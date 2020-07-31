```markdown
# AtomSkills 2020. IT Solution for business

**Участник:** Пантелеев Алексей Сергеевич

В папке web бэкап бд mssql

Восстановить через графический интерфейс

Далее создание прользователя AdminTest для досутпа к восстановленной бд:
CREATE LOGIN AdminUS WITH PASSWORD='123123';
CREATE USER AdminTest FOR LOGIN AdminUS;
ALTER SERVER ROLE sysadmin ADD MEMBER [AdminTest];  
GO  
GRANT ALTER ON dbo.drontaxi TO AdminTest;

Сервер для веб сайта в папке AS2020\web\dron-taxi-web-server\ запустить из консоли node server.js
Папку build из AS2020\web\dron-taxi-web\ поместить на OpenServer и запустить сайт по названию этой папки

Данные для входа: 
Логин: testuser@email.com
Пароль: TestPassword0



