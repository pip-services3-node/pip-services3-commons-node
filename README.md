# <img src="https://uploads-ssl.webflow.com/5ea5d3315186cf5ec60c3ee4/5edf1c94ce4c859f2b188094_logo.svg" alt="Pip.Services Logo" width="200"> <br/> Portable Abstractions and Patterns for Node.js

This module is a part of the [Pip.Services](http://pip.services.org) polyglot microservices toolkit.
It contains a set of basic patterns used in microservices or backend services. Also the module provides a reasonably thin abstraction layer over most fundamental functions across all languages supported by the toolkit to facilitate symmetric implementation.

This module contains the following packages:
- **Commands** - commanding and eventing patterns
- **Config** - configuration pattern
- **Convert** - portable value converters
- **Data** - data patterns
- **Errors**- application errors
- **Random** - random data generators
- **Refer** - locator inversion of control (IoC) pattern
- **Reflect** - portable reflection utilities
- **Run** - component life-cycle management patterns
- **Validate** - validation patterns

<a name="links"></a> Quick links:

* [API Reference](https://pip-services3-node.github.io/pip-services3-commons-node/globals.html)
* [Change Log](CHANGELOG.md)
* [Get Help](https://www.pipservices.org/community/help)
* [Contribute](https://www.pipservices.org/community/contribute)

* [Active Logic](https://www.pipservices.org/recipies/active-logic) - active buisness logic using FixRateTimer
* [Configuration](https://www.pipservices.org/recipies/configuration) - implement Configurable pattern. Implements IConfigurable and using ConfigParams and others.
* [Memory persistence](https://www.pipservices.org/recipies/memory-persistence) - data access patterns using FilterParams and PagingParams
* [Component References](https://www.pipservices.org/recipies/references) - implements Locator pattern using IReferences, Descriptor, DependencyResolver and others.
* [Component lifecycle](https://www.pipservices.org/recipies/component-lifecycle) - describes components lyfe circle and use IClosable, IOpenable, IExecutable interfaceses and others.
* [Data Microservice. Step 2](https://www.pipservices.org/docs/tutorials/data-microservice/data-objects) - show how to implements data validation adn using ObjectSchema and TypeCode.

## Use

Install the NPM package as
```bash
npm install pip-services3-commons-node --save
```

Then you are ready to start using the Pip.Services patterns to augment your backend code.

For instance, here is how you can implement a component, that receives configuration, get assigned references,
can be opened and closed using the patterns from this module.

```typescript
import { IConfigurable } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { IReferenceable } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { IOpenable } from 'pip-services3-commons-node';

export class MyComponentA implements IConfigurable, IReferenceable, IOpenable {
    private _param1: string = "ABC";
    private _param2: number = 123;
    private _anotherComponent: MyComponentB;
    private _opened: boolean = true;

    public configure(config: ConfigParams): void {
        this._param1 = config.getAsStringWithDefault("param1", this._param1);
        this._param2 = config.getAsIntegerWithDefault("param2", this._param2);
    }

    public setReferences(refs: IReferences): void {
        this._anotherComponent = refs.getOneRequired<MyComponentB>(
            new Descriptor("myservice", "mycomponent-b", "*", "*", "1.0")
        );
    }

    public isOpen(): boolean {
        return this._opened;
    }

    public open(correlationId: string, callback: (err: any) => void): void {
        this._opened = true;
        console.log("MyComponentA has been opened.");
        callback(null);
    }

    public close(correlationId: string, callback: (err: any) => void): void {
        this._opened = true;
        console.log("MyComponentA has been closed.");
        callback(null);
    }

}
```

## Configuration

The components from this module have the ability to customize their work without changing the code.
The component is configured using the configuration file in the yaml or json format.
For example, consider the process of configuring through a yaml file.

To pass parameters to a component, you first need to specify its descriptor, and then configure it below. Component settings can be divided into groups, so for some parameters, you first need to specify a group, and then set a specific parameter in this group.

config.yml

```yml
- descriptor: mygroup:mycomponent1:default:default:1.0
  group:
    param1: 12345
    param2: ABCDE
```

Each component has its own set of parameters; for convenience, the list of components and the list of parameters for them are given in the following link [Components list](CONFIGURATION.md).

If you are developing your own component from scratch or inheriting from an existing component and want to add your own set of parameters to it, then [Configuration](https://www.pipservices.org/recipies/configuration) article will help you understand this issue.

## Develop

For development you shall install the following prerequisites:
* Node.js 8+
* Visual Studio Code or another IDE of your choice
* Docker
* Typescript

Install dependencies:
```bash
npm install
```

Compile the code:
```bash
tsc
```

Run automated tests:
```bash
npm test
```

Generate API documentation:
```bash
./docgen.ps1
```

Before committing changes run dockerized build and test as:
```bash
./build.ps1
./test.ps1
./clear.ps1
```

## Contacts

The module is created and maintained by **Sergey Seroukhov**.

The documentation is written by **Egor Nuzhnykh**, **Alexey Dvoykin**, **Mark Makarychev**.
