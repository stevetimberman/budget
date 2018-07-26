Budget App - Steven Timberman - A DRF backend/React-Redux frontend application for budgeting
--------------------------------------------------------------------------
Backend:
- A Django Rest Framework backend api
- Divided into two apps
  - auth: for authentication and storing the individual user.
  - money: all budget related models (Budget, Expenses, Income)
--------------------------------------------------------------------------
Frontend:
- React-Redux frontend SPA
- 
--------------------------------------------------------------------------
Run Locally:
- Backend
	- download
	- run: pip3 install -r requirements.txt
	- run: python3 manage.py runserver
	- it will inform you the IP address in terminal

	- http://127.0.0.1:8000/money/api/budget/
		- for budget api (replace budget with expense or income for those apis) 

- Frontend
	- cd frontend
	- npm start

	- http://localhost:3000/
---------------------------------------------------------------------------
TODO:
- Add user reducer
- Add api endpoint for a specific users expenses and incomes
- Make budget object in registration
