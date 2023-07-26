# Dynamic Dependency Injection

This simple project shows how to implement a dynamic dependency injection using _Dynamic Module_ in NestJS. As a matter of fact, this a approach isn't clean, but this may works if you need one of yours module communicating with one third part api, and another module communicating with a different third part api in the same time.

For example, here I created a _fifo_ and a _api_ services. Imagine that the _fifo_ service has the logic to connect in AWS and send data to SNS, and the _api_ service has some logic and sends data to a direct endpoint. Both have their own particular logic of "how to do" their job, and the rest of the application doesn't need to know it. The application just has to know that ere is a specific method, in a specific class, and it expects a fixed payload. That class is the one who will direct the payload foward, to a class who is dynamic injected.

## How it works?

Let's take a quick look over this project:

- In `src/bridges` here is the hearth of this idea.
- In `src/modules` here I created a module who will use the _bridge_. You can have others following the same steps.
- In `src/shared` is just to show more than one service who will be injected.

### The Bridge

For lack of a better name, I chose call it _bridge_. The idea is have one class that serves as a bridge with third part api. The `data-dispatcher.types` has some important logic. In this file I created the enum of options, the constant token to reference in the injection, and the mapping relating enum value and resolver class.

The `data-dispatcher.bridge` is the one that has the injection and the known `dispatch` method for using in the application. An important part is the exception trigger if the injected class doesn't have the expected method. I chose to do it just to force a use of the `data-dispatcher-service.interface`. But as long as your dispatcher has a `send` method, it will works as well. This interface is almost useless since Typescript doesn't have that level os control.

And finally, the `data-dispatcher.module` has the _Dynamic Module_ and receives the wanted dispatcher by `options` parameter.

In this approach, if a new dispatcher class is needed, it has to be explicit mapped in the enum and mapper of the `data-dispatcher.types` file before use it.

### The Modules

If you take a quick view in the `parte-que-envia.module` file, you'll see this code:

```
DataDispatcherModule.register({
  dispatcherService: DataDispatcherEnum.FIFO,
})
```

Here is where you say which dispatcher you want to use in this module. As I said, you can use a different dispatcher in another module if you needed.

### The Dispatchers

In this example I created in the `shared` folder, but you can put it where you want, as long that it has a `send` method to be called.

---

### Tests

You can clone this project, install the dependencies by `npm i`, and after that, run `npm run start`. Do a request to `http://localhost:3000` using your favorite rest testing platform, such as Postman or Insomnia. You should see the result in the server console:

```
[FifoService] {"success":true}
```

If you change in `parte-que-envia.module` file, the enum option to `API`, you should see the exception because this class doesn't have the required method.
