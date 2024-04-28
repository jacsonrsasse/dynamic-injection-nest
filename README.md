# Dynamic Dependency Injection (Dependency Inversion)

A simple example about how to use dependecy inversion in NestJs. Instead of inject them directly in the constructor, you can use a Interface to only show to your class the methods that your injected class has. And to resolve the injection, you'll need to specify in the `module`.

It's pretty simple, isn't?

Imagine that your project needs to connect in two different Redis database (maybe in different servers as well...). You may have only one class to manage this, and create it in the modules using the `useFactory`. But trust me, this is a very ugly way to solve this problem.

I'd rather to solve this using dependency inversion. In this approuch I chose to have an abstract class, who can have all methods. The child classes will only define in which server, or database, that service will connect. So, in the module I use the `providers` section to resolve a provided symbol with the desired class. Now I can use one service in one place, and another one in other place.

Other example that can benefit from this idea is when your project needs to publish in multiple AWS SQS. The approuch is the same, as you can see.

---

### Tests

You can clone this project, install the dependencies by `npm ci`, and after that, run `npm run start`. Do a request to `http://localhost:3000/user/test` using your favorite rest testing platform, such as Postman or Insomnia. You should see the result in the server console:

```
value saved from user controller
```

Keep in mind that you'll need to have a Redis server running, which this project can connect.
