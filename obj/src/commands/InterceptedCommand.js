"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implements a [[ICommand command]] wrapped by an interceptor.
 * It allows to build command call chains. The interceptor can alter execution
 * and delegate calls to a next command, which can be intercepted or concrete.
 *
 * @see [[ICommand]]
 * @see [[ICommandInterceptor]]
 *
 * ### Example ###
 *
 *     export class CommandLogger implements ICommandInterceptor {
 *
 *         public getName(command: ICommand): string {
 *             return command.getName();
 *         }
 *
 *         public execute(correlationId: string, command: ICommand, args: Parameters, callback: (err: any, result: any) => void): void {
 *             console.log("Executed command " + command.getName());
 *             command.execute(correlationId, args, callback);
 *         }
 *
 *         private validate(command: ICommand, args: Parameters): ValidationResult[] {
 *             return command.validate(args);
 *         }
 *     }
 *
 *     let logger = new CommandLogger();
 *     let loggedCommand = new InterceptedCommand(logger, command);
 *
 *     // Each called command will output: Executed command <command name>
 *
 */
var InterceptedCommand = /** @class */ (function () {
    /**
     * Creates a new InterceptedCommand, which serves as a link in an execution chain. Contains information
     * about the interceptor that is being used and the next command in the chain.
     *
     * @param interceptor   the interceptor that is intercepting the command.
     * @param next          (link to) the next command in the command's execution chain.
     */
    function InterceptedCommand(interceptor, next) {
        this._interceptor = interceptor;
        this._next = next;
    }
    /**
     * @returns the name of the command that is being intercepted.
     */
    InterceptedCommand.prototype.getName = function () {
        return this._interceptor.getName(this._next);
    };
    /**
     * Executes the next command in the execution chain using the given [[Parameters parameters]] (arguments).
     *
     * @param correlationId unique transaction id to trace calls across components.
     * @param args          the parameters (arguments) to pass to the command for execution.
     * @param callback      the function that is to be called once execution is complete. If an exception is raised, then
     *                      it will be called with the error.
     *
     * @see [[Parameters]]
     */
    InterceptedCommand.prototype.execute = function (correlationId, args, callback) {
        this._interceptor.execute(correlationId, this._next, args, callback);
    };
    /**
     * Validates the [[Parameters parameters]] (arguments) that are to be passed to the command that is next
     * in the execution chain.
     *
     * @param args      the parameters (arguments) to validate for the next command.
     * @returns         an array of ValidationResults.
     *
     * @see [[Parameters]]
     * @see [[ValidationResult]]
     */
    InterceptedCommand.prototype.validate = function (args) {
        return this._interceptor.validate(this._next, args);
    };
    return InterceptedCommand;
}());
exports.InterceptedCommand = InterceptedCommand;
//# sourceMappingURL=InterceptedCommand.js.map