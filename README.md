## System Architecture

This is a distributed database system implemented using Next.js, which serves as the front-end framework, and includes 3 SQL databases connected using ProxySQL, and 3 Redis servers connected using HAProxy. This project was developed as an academic final project.

![image](https://user-images.githubusercontent.com/59334824/206860118-67fe01c3-9563-4639-b523-6f384f4c28f5.png)

### Front-end
The front-end is implemented using Next.js, a popular React-based framework. It includes various pages and components that allow users to interact with the database system.

### Back-end
The back-end is composed of three SQL databases and three Redis servers. The SQL databases are connected using ProxySQL, a powerful proxy for MySQL and MariaDB. The Redis servers are connected using HAProxy, a reliable high-availability load balancer.

### Conclusion
This project demonstrates how to implement a distributed database system using Next.js, ProxySQL, and HAProxy. It provides a reliable and scalable solution for handling large amounts of data and is suitable for use in various applications.
