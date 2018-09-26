#!/usr/bin/python

import subprocess, datetime
import sys, os, logging


def init_logging():
	'''
		Function prepair logger.
		Logger save .log file to current directory: ./backup_script.log.
			- return: logger object
	'''

	logger  = logging.getLogger('backup_database')
	handler = logging.FileHandler(
		'{}/backup_script.log'.format(
			os.path.dirname(os.path.realpath(__file__))
		)
	)

	formatter = logging.Formatter(
		'%(asctime)s %(message)s'
	)

	handler.setFormatter(formatter)
	logger.addHandler(handler) 
	logger.setLevel(logging.INFO)

	return logger


def get_container_id():
	'''
		Function tries to find active container with postgres.
			- return: container_id or False if not found.
	'''

	proc = subprocess.Popen(
		['docker', 'ps'],
		stdout = subprocess.PIPE
	)

	while True:
		line = proc.stdout.readline()
		if line != '':
			if 'postgres' in line:
				logger.info(
					'INF: Found postgres container: {}'.format(
						line.rstrip()[0:12]
					)
				)
				
				return line.rstrip()[0:12]
				break
		else:
			break

	logger.error('ERR: Active container with postgres not found!')
	return False


def create_backup(_container_id):
	'''
		Function run pg_dumpall command inside container.
		As result: created backup file in /srv/pg_backups/backups.
			- return True
	'''

	backup_cmd = '''
		docker exec -t {} pg_dumpall -c -U postgres > \
		/srv/pg_backups/backups/{}_backup.sql
	'''.format(_container_id, datetime.date.today())

	subprocess.call(
		'rm -rf /srv/pg_backups/backups/{}_backup.sql'.format(
			datetime.date.today()
		), shell=True
	)

	try:
		subprocess.call(backup_cmd, shell=True)
		logger.info('INF: Backup complete')
	except Exception as e:
		logger.error('ERR: Backup failed - {}'.format(e))

	return True


def cleanup_data():
	'''
		Function find and remove old pg_data.
			- retunr True
	'''

	today = datetime.datetime.now()
	for root, dirs, files in os.walk('/srv/pg_backups/backups/'):
		for filename in files:

			backup_data = datetime.datetime.strptime(filename[:10], '%Y-%m-%d')
			delta = today - backup_data
			
			if delta.days > 30:
				subprocess.call(
					'rm -rf /srv/pg_backups/backups/{}'.format(
						filename
					), shell=True
				)

				logger.info('INF: Cleanup {}'.format(filename))

	return True


#---------------------------------->
#main
if __name__ == '__main__':
	logger = init_logging()
	
	container_id = get_container_id()
	if container_id is False:
		sys.exit()
	else:
		create_backup(container_id)
		cleanup_data()

