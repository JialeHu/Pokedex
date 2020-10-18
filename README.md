# Pokedex

### Frameworks
- Frontend: React, Bootstrap
- Backend: Django, Diango REST freamework, django-rest-auth

### Instructions

- Installation
```
git clone https://github.com/JialeHu/Pokedex.git
cd ./Pokedex

npm install
npm run-script build 

python3 -m venv env
source env/bin/activate  # On Windows use `env\Scripts\activate`

pip install django
pip install djangorestframework
pip install 'django-rest-auth[with_social]'
```

- Run
```
cd ./backend
python manage.py migrate
python manage.py runserver
```

- Open Browser

go to `http://127.0.0.1:8000/`
