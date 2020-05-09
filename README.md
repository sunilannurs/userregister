# userregister
#create the virtual environment#

step 1:
sudo apt-get install python3-venv

#activate the virtual-env#
step 2:
python3 -m venv virt_env && source virt_env/bin/activate 

#install the requirement"
step 3:
python3 -m pip install -r requirements.txt

step 4:
python3 manage.py makemigrations userregister

step 5:
python3 manage.py migrate

step 6:
python3 manage.py runserver
