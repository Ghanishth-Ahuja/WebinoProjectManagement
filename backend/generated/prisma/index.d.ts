
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Tasks
 * 
 */
export type Tasks = $Result.DefaultSelection<Prisma.$TasksPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Attachments
 * 
 */
export type Attachments = $Result.DefaultSelection<Prisma.$AttachmentsPayload>
/**
 * Model Projects
 * 
 */
export type Projects = $Result.DefaultSelection<Prisma.$ProjectsPayload>
/**
 * Model List
 * 
 */
export type List = $Result.DefaultSelection<Prisma.$ListPayload>
/**
 * Model ProjectMembers
 * 
 */
export type ProjectMembers = $Result.DefaultSelection<Prisma.$ProjectMembersPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model PasswordResetToken
 * 
 */
export type PasswordResetToken = $Result.DefaultSelection<Prisma.$PasswordResetTokenPayload>
/**
 * Model ProjectInvitation
 * 
 */
export type ProjectInvitation = $Result.DefaultSelection<Prisma.$ProjectInvitationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Roles: {
  admin: 'admin',
  member: 'member'
};

export type Roles = (typeof Roles)[keyof typeof Roles]


export const Priority: {
  low: 'low',
  medium: 'medium',
  high: 'high',
  urgent: 'urgent'
};

export type Priority = (typeof Priority)[keyof typeof Priority]

}

export type Roles = $Enums.Roles

export const Roles: typeof $Enums.Roles

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tasks`: Exposes CRUD operations for the **Tasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.tasks.findMany()
    * ```
    */
  get tasks(): Prisma.TasksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attachments`: Exposes CRUD operations for the **Attachments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachments.findMany()
    * ```
    */
  get attachments(): Prisma.AttachmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **Projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.ProjectsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.list`: Exposes CRUD operations for the **List** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lists
    * const lists = await prisma.list.findMany()
    * ```
    */
  get list(): Prisma.ListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectMembers`: Exposes CRUD operations for the **ProjectMembers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectMembers
    * const projectMembers = await prisma.projectMembers.findMany()
    * ```
    */
  get projectMembers(): Prisma.ProjectMembersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetToken.findMany()
    * ```
    */
  get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectInvitation`: Exposes CRUD operations for the **ProjectInvitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectInvitations
    * const projectInvitations = await prisma.projectInvitation.findMany()
    * ```
    */
  get projectInvitation(): Prisma.ProjectInvitationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Tasks: 'Tasks',
    Comment: 'Comment',
    Attachments: 'Attachments',
    Projects: 'Projects',
    List: 'List',
    ProjectMembers: 'ProjectMembers',
    Notification: 'Notification',
    PasswordResetToken: 'PasswordResetToken',
    ProjectInvitation: 'ProjectInvitation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "tasks" | "comment" | "attachments" | "projects" | "list" | "projectMembers" | "notification" | "passwordResetToken" | "projectInvitation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Tasks: {
        payload: Prisma.$TasksPayload<ExtArgs>
        fields: Prisma.TasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          findFirst: {
            args: Prisma.TasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          findMany: {
            args: Prisma.TasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>[]
          }
          create: {
            args: Prisma.TasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          createMany: {
            args: Prisma.TasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TasksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>[]
          }
          delete: {
            args: Prisma.TasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          update: {
            args: Prisma.TasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          deleteMany: {
            args: Prisma.TasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TasksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>[]
          }
          upsert: {
            args: Prisma.TasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          aggregate: {
            args: Prisma.TasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTasks>
          }
          groupBy: {
            args: Prisma.TasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<TasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.TasksCountArgs<ExtArgs>
            result: $Utils.Optional<TasksCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Attachments: {
        payload: Prisma.$AttachmentsPayload<ExtArgs>
        fields: Prisma.AttachmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttachmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttachmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>
          }
          findFirst: {
            args: Prisma.AttachmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttachmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>
          }
          findMany: {
            args: Prisma.AttachmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>[]
          }
          create: {
            args: Prisma.AttachmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>
          }
          createMany: {
            args: Prisma.AttachmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttachmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>[]
          }
          delete: {
            args: Prisma.AttachmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>
          }
          update: {
            args: Prisma.AttachmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>
          }
          deleteMany: {
            args: Prisma.AttachmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttachmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttachmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>[]
          }
          upsert: {
            args: Prisma.AttachmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>
          }
          aggregate: {
            args: Prisma.AttachmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttachments>
          }
          groupBy: {
            args: Prisma.AttachmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttachmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttachmentsCountArgs<ExtArgs>
            result: $Utils.Optional<AttachmentsCountAggregateOutputType> | number
          }
        }
      }
      Projects: {
        payload: Prisma.$ProjectsPayload<ExtArgs>
        fields: Prisma.ProjectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          findFirst: {
            args: Prisma.ProjectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          findMany: {
            args: Prisma.ProjectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>[]
          }
          create: {
            args: Prisma.ProjectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          createMany: {
            args: Prisma.ProjectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>[]
          }
          delete: {
            args: Prisma.ProjectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          update: {
            args: Prisma.ProjectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          deleteMany: {
            args: Prisma.ProjectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>[]
          }
          upsert: {
            args: Prisma.ProjectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.ProjectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
      List: {
        payload: Prisma.$ListPayload<ExtArgs>
        fields: Prisma.ListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          findFirst: {
            args: Prisma.ListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          findMany: {
            args: Prisma.ListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>[]
          }
          create: {
            args: Prisma.ListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          createMany: {
            args: Prisma.ListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>[]
          }
          delete: {
            args: Prisma.ListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          update: {
            args: Prisma.ListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          deleteMany: {
            args: Prisma.ListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>[]
          }
          upsert: {
            args: Prisma.ListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          aggregate: {
            args: Prisma.ListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateList>
          }
          groupBy: {
            args: Prisma.ListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListCountArgs<ExtArgs>
            result: $Utils.Optional<ListCountAggregateOutputType> | number
          }
        }
      }
      ProjectMembers: {
        payload: Prisma.$ProjectMembersPayload<ExtArgs>
        fields: Prisma.ProjectMembersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectMembersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMembersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectMembersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMembersPayload>
          }
          findFirst: {
            args: Prisma.ProjectMembersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMembersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectMembersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMembersPayload>
          }
          findMany: {
            args: Prisma.ProjectMembersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMembersPayload>[]
          }
          create: {
            args: Prisma.ProjectMembersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMembersPayload>
          }
          createMany: {
            args: Prisma.ProjectMembersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectMembersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMembersPayload>[]
          }
          delete: {
            args: Prisma.ProjectMembersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMembersPayload>
          }
          update: {
            args: Prisma.ProjectMembersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMembersPayload>
          }
          deleteMany: {
            args: Prisma.ProjectMembersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectMembersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectMembersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMembersPayload>[]
          }
          upsert: {
            args: Prisma.ProjectMembersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMembersPayload>
          }
          aggregate: {
            args: Prisma.ProjectMembersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectMembers>
          }
          groupBy: {
            args: Prisma.ProjectMembersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectMembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectMembersCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectMembersCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetToken: {
        payload: Prisma.$PasswordResetTokenPayload<ExtArgs>
        fields: Prisma.PasswordResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findMany: {
            args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          create: {
            args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          createMany: {
            args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          update: {
            args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetToken>
          }
          groupBy: {
            args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenCountAggregateOutputType> | number
          }
        }
      }
      ProjectInvitation: {
        payload: Prisma.$ProjectInvitationPayload<ExtArgs>
        fields: Prisma.ProjectInvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectInvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectInvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectInvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectInvitationPayload>
          }
          findFirst: {
            args: Prisma.ProjectInvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectInvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectInvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectInvitationPayload>
          }
          findMany: {
            args: Prisma.ProjectInvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectInvitationPayload>[]
          }
          create: {
            args: Prisma.ProjectInvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectInvitationPayload>
          }
          createMany: {
            args: Prisma.ProjectInvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectInvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectInvitationPayload>[]
          }
          delete: {
            args: Prisma.ProjectInvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectInvitationPayload>
          }
          update: {
            args: Prisma.ProjectInvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectInvitationPayload>
          }
          deleteMany: {
            args: Prisma.ProjectInvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectInvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectInvitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectInvitationPayload>[]
          }
          upsert: {
            args: Prisma.ProjectInvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectInvitationPayload>
          }
          aggregate: {
            args: Prisma.ProjectInvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectInvitation>
          }
          groupBy: {
            args: Prisma.ProjectInvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectInvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectInvitationCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectInvitationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    tasks?: TasksOmit
    comment?: CommentOmit
    attachments?: AttachmentsOmit
    projects?: ProjectsOmit
    list?: ListOmit
    projectMembers?: ProjectMembersOmit
    notification?: NotificationOmit
    passwordResetToken?: PasswordResetTokenOmit
    projectInvitation?: ProjectInvitationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    assignedTasks: number
    comments: number
    attachments: number
    ownedProjects: number
    sentNotifications: number
    receivedNotifications: number
    memberof: number
    invitations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTasks?: boolean | UserCountOutputTypeCountAssignedTasksArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    attachments?: boolean | UserCountOutputTypeCountAttachmentsArgs
    ownedProjects?: boolean | UserCountOutputTypeCountOwnedProjectsArgs
    sentNotifications?: boolean | UserCountOutputTypeCountSentNotificationsArgs
    receivedNotifications?: boolean | UserCountOutputTypeCountReceivedNotificationsArgs
    memberof?: boolean | UserCountOutputTypeCountMemberofArgs
    invitations?: boolean | UserCountOutputTypeCountInvitationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TasksWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMemberofArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMembersWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectInvitationWhereInput
  }


  /**
   * Count Type TasksCountOutputType
   */

  export type TasksCountOutputType = {
    comment: number
    attachments: number
    notifications: number
  }

  export type TasksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | TasksCountOutputTypeCountCommentArgs
    attachments?: boolean | TasksCountOutputTypeCountAttachmentsArgs
    notifications?: boolean | TasksCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasksCountOutputType
     */
    select?: TasksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeCountCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentsWhereInput
  }

  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type ProjectsCountOutputType
   */

  export type ProjectsCountOutputType = {
    lists: number
    projectmembers: number
    tasks: number
    notifications: number
    invitations: number
  }

  export type ProjectsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lists?: boolean | ProjectsCountOutputTypeCountListsArgs
    projectmembers?: boolean | ProjectsCountOutputTypeCountProjectmembersArgs
    tasks?: boolean | ProjectsCountOutputTypeCountTasksArgs
    notifications?: boolean | ProjectsCountOutputTypeCountNotificationsArgs
    invitations?: boolean | ProjectsCountOutputTypeCountInvitationsArgs
  }

  // Custom InputTypes
  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectsCountOutputType
     */
    select?: ProjectsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListWhereInput
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountProjectmembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMembersWhereInput
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TasksWhereInput
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectInvitationWhereInput
  }


  /**
   * Count Type ListCountOutputType
   */

  export type ListCountOutputType = {
    tasks: number
  }

  export type ListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ListCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * ListCountOutputType without action
   */
  export type ListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListCountOutputType
     */
    select?: ListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ListCountOutputType without action
   */
  export type ListCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TasksWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Roles | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Roles | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    avatar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Roles
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignedTasks?: boolean | User$assignedTasksArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    attachments?: boolean | User$attachmentsArgs<ExtArgs>
    ownedProjects?: boolean | User$ownedProjectsArgs<ExtArgs>
    sentNotifications?: boolean | User$sentNotificationsArgs<ExtArgs>
    receivedNotifications?: boolean | User$receivedNotificationsArgs<ExtArgs>
    memberof?: boolean | User$memberofArgs<ExtArgs>
    invitations?: boolean | User$invitationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "avatar" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTasks?: boolean | User$assignedTasksArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    attachments?: boolean | User$attachmentsArgs<ExtArgs>
    ownedProjects?: boolean | User$ownedProjectsArgs<ExtArgs>
    sentNotifications?: boolean | User$sentNotificationsArgs<ExtArgs>
    receivedNotifications?: boolean | User$receivedNotificationsArgs<ExtArgs>
    memberof?: boolean | User$memberofArgs<ExtArgs>
    invitations?: boolean | User$invitationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      assignedTasks: Prisma.$TasksPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      attachments: Prisma.$AttachmentsPayload<ExtArgs>[]
      ownedProjects: Prisma.$ProjectsPayload<ExtArgs>[]
      sentNotifications: Prisma.$NotificationPayload<ExtArgs>[]
      receivedNotifications: Prisma.$NotificationPayload<ExtArgs>[]
      memberof: Prisma.$ProjectMembersPayload<ExtArgs>[]
      invitations: Prisma.$ProjectInvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Roles
      avatar: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignedTasks<T extends User$assignedTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attachments<T extends User$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownedProjects<T extends User$ownedProjectsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentNotifications<T extends User$sentNotificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentNotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedNotifications<T extends User$receivedNotificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedNotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberof<T extends User$memberofArgs<ExtArgs> = {}>(args?: Subset<T, User$memberofArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitations<T extends User$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, User$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Roles'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.assignedTasks
   */
  export type User$assignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    where?: TasksWhereInput
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    cursor?: TasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.attachments
   */
  export type User$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsInclude<ExtArgs> | null
    where?: AttachmentsWhereInput
    orderBy?: AttachmentsOrderByWithRelationInput | AttachmentsOrderByWithRelationInput[]
    cursor?: AttachmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }

  /**
   * User.ownedProjects
   */
  export type User$ownedProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    where?: ProjectsWhereInput
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    cursor?: ProjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * User.sentNotifications
   */
  export type User$sentNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.receivedNotifications
   */
  export type User$receivedNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.memberof
   */
  export type User$memberofArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMembers
     */
    select?: ProjectMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMembers
     */
    omit?: ProjectMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMembersInclude<ExtArgs> | null
    where?: ProjectMembersWhereInput
    orderBy?: ProjectMembersOrderByWithRelationInput | ProjectMembersOrderByWithRelationInput[]
    cursor?: ProjectMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMembersScalarFieldEnum | ProjectMembersScalarFieldEnum[]
  }

  /**
   * User.invitations
   */
  export type User$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationInclude<ExtArgs> | null
    where?: ProjectInvitationWhereInput
    orderBy?: ProjectInvitationOrderByWithRelationInput | ProjectInvitationOrderByWithRelationInput[]
    cursor?: ProjectInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectInvitationScalarFieldEnum | ProjectInvitationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Tasks
   */

  export type AggregateTasks = {
    _count: TasksCountAggregateOutputType | null
    _avg: TasksAvgAggregateOutputType | null
    _sum: TasksSumAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  export type TasksAvgAggregateOutputType = {
    position: number | null
  }

  export type TasksSumAggregateOutputType = {
    position: number | null
  }

  export type TasksMinAggregateOutputType = {
    id: string | null
    position: number | null
    title: string | null
    description: string | null
    deadline: Date | null
    priority: $Enums.Priority | null
    createdAt: Date | null
    updatedAt: Date | null
    assigneeId: string | null
    isComplete: boolean | null
    listId: string | null
    projectId: string | null
  }

  export type TasksMaxAggregateOutputType = {
    id: string | null
    position: number | null
    title: string | null
    description: string | null
    deadline: Date | null
    priority: $Enums.Priority | null
    createdAt: Date | null
    updatedAt: Date | null
    assigneeId: string | null
    isComplete: boolean | null
    listId: string | null
    projectId: string | null
  }

  export type TasksCountAggregateOutputType = {
    id: number
    position: number
    title: number
    description: number
    deadline: number
    priority: number
    createdAt: number
    updatedAt: number
    assigneeId: number
    isComplete: number
    listId: number
    projectId: number
    _all: number
  }


  export type TasksAvgAggregateInputType = {
    position?: true
  }

  export type TasksSumAggregateInputType = {
    position?: true
  }

  export type TasksMinAggregateInputType = {
    id?: true
    position?: true
    title?: true
    description?: true
    deadline?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    assigneeId?: true
    isComplete?: true
    listId?: true
    projectId?: true
  }

  export type TasksMaxAggregateInputType = {
    id?: true
    position?: true
    title?: true
    description?: true
    deadline?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    assigneeId?: true
    isComplete?: true
    listId?: true
    projectId?: true
  }

  export type TasksCountAggregateInputType = {
    id?: true
    position?: true
    title?: true
    description?: true
    deadline?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    assigneeId?: true
    isComplete?: true
    listId?: true
    projectId?: true
    _all?: true
  }

  export type TasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to aggregate.
     */
    where?: TasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TasksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TasksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TasksMaxAggregateInputType
  }

  export type GetTasksAggregateType<T extends TasksAggregateArgs> = {
        [P in keyof T & keyof AggregateTasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTasks[P]>
      : GetScalarType<T[P], AggregateTasks[P]>
  }




  export type TasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TasksWhereInput
    orderBy?: TasksOrderByWithAggregationInput | TasksOrderByWithAggregationInput[]
    by: TasksScalarFieldEnum[] | TasksScalarFieldEnum
    having?: TasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TasksCountAggregateInputType | true
    _avg?: TasksAvgAggregateInputType
    _sum?: TasksSumAggregateInputType
    _min?: TasksMinAggregateInputType
    _max?: TasksMaxAggregateInputType
  }

  export type TasksGroupByOutputType = {
    id: string
    position: number
    title: string
    description: string | null
    deadline: Date | null
    priority: $Enums.Priority
    createdAt: Date
    updatedAt: Date
    assigneeId: string | null
    isComplete: boolean
    listId: string
    projectId: string
    _count: TasksCountAggregateOutputType | null
    _avg: TasksAvgAggregateOutputType | null
    _sum: TasksSumAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  type GetTasksGroupByPayload<T extends TasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TasksGroupByOutputType[P]>
            : GetScalarType<T[P], TasksGroupByOutputType[P]>
        }
      >
    >


  export type TasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assigneeId?: boolean
    isComplete?: boolean
    listId?: boolean
    projectId?: boolean
    assignee?: boolean | Tasks$assigneeArgs<ExtArgs>
    comment?: boolean | Tasks$commentArgs<ExtArgs>
    attachments?: boolean | Tasks$attachmentsArgs<ExtArgs>
    list?: boolean | ListDefaultArgs<ExtArgs>
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    notifications?: boolean | Tasks$notificationsArgs<ExtArgs>
    _count?: boolean | TasksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type TasksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assigneeId?: boolean
    isComplete?: boolean
    listId?: boolean
    projectId?: boolean
    assignee?: boolean | Tasks$assigneeArgs<ExtArgs>
    list?: boolean | ListDefaultArgs<ExtArgs>
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type TasksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assigneeId?: boolean
    isComplete?: boolean
    listId?: boolean
    projectId?: boolean
    assignee?: boolean | Tasks$assigneeArgs<ExtArgs>
    list?: boolean | ListDefaultArgs<ExtArgs>
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type TasksSelectScalar = {
    id?: boolean
    position?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assigneeId?: boolean
    isComplete?: boolean
    listId?: boolean
    projectId?: boolean
  }

  export type TasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "position" | "title" | "description" | "deadline" | "priority" | "createdAt" | "updatedAt" | "assigneeId" | "isComplete" | "listId" | "projectId", ExtArgs["result"]["tasks"]>
  export type TasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignee?: boolean | Tasks$assigneeArgs<ExtArgs>
    comment?: boolean | Tasks$commentArgs<ExtArgs>
    attachments?: boolean | Tasks$attachmentsArgs<ExtArgs>
    list?: boolean | ListDefaultArgs<ExtArgs>
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    notifications?: boolean | Tasks$notificationsArgs<ExtArgs>
    _count?: boolean | TasksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TasksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignee?: boolean | Tasks$assigneeArgs<ExtArgs>
    list?: boolean | ListDefaultArgs<ExtArgs>
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }
  export type TasksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignee?: boolean | Tasks$assigneeArgs<ExtArgs>
    list?: boolean | ListDefaultArgs<ExtArgs>
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }

  export type $TasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tasks"
    objects: {
      assignee: Prisma.$UserPayload<ExtArgs> | null
      comment: Prisma.$CommentPayload<ExtArgs>[]
      attachments: Prisma.$AttachmentsPayload<ExtArgs>[]
      list: Prisma.$ListPayload<ExtArgs>
      project: Prisma.$ProjectsPayload<ExtArgs>
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      position: number
      title: string
      description: string | null
      deadline: Date | null
      priority: $Enums.Priority
      createdAt: Date
      updatedAt: Date
      assigneeId: string | null
      isComplete: boolean
      listId: string
      projectId: string
    }, ExtArgs["result"]["tasks"]>
    composites: {}
  }

  type TasksGetPayload<S extends boolean | null | undefined | TasksDefaultArgs> = $Result.GetResult<Prisma.$TasksPayload, S>

  type TasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TasksCountAggregateInputType | true
    }

  export interface TasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tasks'], meta: { name: 'Tasks' } }
    /**
     * Find zero or one Tasks that matches the filter.
     * @param {TasksFindUniqueArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TasksFindUniqueArgs>(args: SelectSubset<T, TasksFindUniqueArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tasks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TasksFindUniqueOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TasksFindUniqueOrThrowArgs>(args: SelectSubset<T, TasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksFindFirstArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TasksFindFirstArgs>(args?: SelectSubset<T, TasksFindFirstArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksFindFirstOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TasksFindFirstOrThrowArgs>(args?: SelectSubset<T, TasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.tasks.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.tasks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tasksWithIdOnly = await prisma.tasks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TasksFindManyArgs>(args?: SelectSubset<T, TasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tasks.
     * @param {TasksCreateArgs} args - Arguments to create a Tasks.
     * @example
     * // Create one Tasks
     * const Tasks = await prisma.tasks.create({
     *   data: {
     *     // ... data to create a Tasks
     *   }
     * })
     * 
     */
    create<T extends TasksCreateArgs>(args: SelectSubset<T, TasksCreateArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TasksCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TasksCreateManyArgs>(args?: SelectSubset<T, TasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TasksCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const tasksWithIdOnly = await prisma.tasks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TasksCreateManyAndReturnArgs>(args?: SelectSubset<T, TasksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tasks.
     * @param {TasksDeleteArgs} args - Arguments to delete one Tasks.
     * @example
     * // Delete one Tasks
     * const Tasks = await prisma.tasks.delete({
     *   where: {
     *     // ... filter to delete one Tasks
     *   }
     * })
     * 
     */
    delete<T extends TasksDeleteArgs>(args: SelectSubset<T, TasksDeleteArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tasks.
     * @param {TasksUpdateArgs} args - Arguments to update one Tasks.
     * @example
     * // Update one Tasks
     * const tasks = await prisma.tasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TasksUpdateArgs>(args: SelectSubset<T, TasksUpdateArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TasksDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.tasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TasksDeleteManyArgs>(args?: SelectSubset<T, TasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TasksUpdateManyArgs>(args: SelectSubset<T, TasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TasksUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const tasksWithIdOnly = await prisma.tasks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TasksUpdateManyAndReturnArgs>(args: SelectSubset<T, TasksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tasks.
     * @param {TasksUpsertArgs} args - Arguments to update or create a Tasks.
     * @example
     * // Update or create a Tasks
     * const tasks = await prisma.tasks.upsert({
     *   create: {
     *     // ... data to create a Tasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tasks we want to update
     *   }
     * })
     */
    upsert<T extends TasksUpsertArgs>(args: SelectSubset<T, TasksUpsertArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.tasks.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TasksCountArgs>(
      args?: Subset<T, TasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TasksAggregateArgs>(args: Subset<T, TasksAggregateArgs>): Prisma.PrismaPromise<GetTasksAggregateType<T>>

    /**
     * Group by Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TasksGroupByArgs['orderBy'] }
        : { orderBy?: TasksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tasks model
   */
  readonly fields: TasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignee<T extends Tasks$assigneeArgs<ExtArgs> = {}>(args?: Subset<T, Tasks$assigneeArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comment<T extends Tasks$commentArgs<ExtArgs> = {}>(args?: Subset<T, Tasks$commentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attachments<T extends Tasks$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Tasks$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    list<T extends ListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListDefaultArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectsDefaultArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notifications<T extends Tasks$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Tasks$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tasks model
   */
  interface TasksFieldRefs {
    readonly id: FieldRef<"Tasks", 'String'>
    readonly position: FieldRef<"Tasks", 'Int'>
    readonly title: FieldRef<"Tasks", 'String'>
    readonly description: FieldRef<"Tasks", 'String'>
    readonly deadline: FieldRef<"Tasks", 'DateTime'>
    readonly priority: FieldRef<"Tasks", 'Priority'>
    readonly createdAt: FieldRef<"Tasks", 'DateTime'>
    readonly updatedAt: FieldRef<"Tasks", 'DateTime'>
    readonly assigneeId: FieldRef<"Tasks", 'String'>
    readonly isComplete: FieldRef<"Tasks", 'Boolean'>
    readonly listId: FieldRef<"Tasks", 'String'>
    readonly projectId: FieldRef<"Tasks", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tasks findUnique
   */
  export type TasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where: TasksWhereUniqueInput
  }

  /**
   * Tasks findUniqueOrThrow
   */
  export type TasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where: TasksWhereUniqueInput
  }

  /**
   * Tasks findFirst
   */
  export type TasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Tasks findFirstOrThrow
   */
  export type TasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Tasks findMany
   */
  export type TasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Tasks create
   */
  export type TasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * The data needed to create a Tasks.
     */
    data: XOR<TasksCreateInput, TasksUncheckedCreateInput>
  }

  /**
   * Tasks createMany
   */
  export type TasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TasksCreateManyInput | TasksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tasks createManyAndReturn
   */
  export type TasksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TasksCreateManyInput | TasksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tasks update
   */
  export type TasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * The data needed to update a Tasks.
     */
    data: XOR<TasksUpdateInput, TasksUncheckedUpdateInput>
    /**
     * Choose, which Tasks to update.
     */
    where: TasksWhereUniqueInput
  }

  /**
   * Tasks updateMany
   */
  export type TasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TasksUpdateManyMutationInput, TasksUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TasksWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Tasks updateManyAndReturn
   */
  export type TasksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TasksUpdateManyMutationInput, TasksUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TasksWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tasks upsert
   */
  export type TasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * The filter to search for the Tasks to update in case it exists.
     */
    where: TasksWhereUniqueInput
    /**
     * In case the Tasks found by the `where` argument doesn't exist, create a new Tasks with this data.
     */
    create: XOR<TasksCreateInput, TasksUncheckedCreateInput>
    /**
     * In case the Tasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TasksUpdateInput, TasksUncheckedUpdateInput>
  }

  /**
   * Tasks delete
   */
  export type TasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter which Tasks to delete.
     */
    where: TasksWhereUniqueInput
  }

  /**
   * Tasks deleteMany
   */
  export type TasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TasksWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Tasks.assignee
   */
  export type Tasks$assigneeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Tasks.comment
   */
  export type Tasks$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Tasks.attachments
   */
  export type Tasks$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsInclude<ExtArgs> | null
    where?: AttachmentsWhereInput
    orderBy?: AttachmentsOrderByWithRelationInput | AttachmentsOrderByWithRelationInput[]
    cursor?: AttachmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }

  /**
   * Tasks.notifications
   */
  export type Tasks$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Tasks without action
   */
  export type TasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    taskId: string | null
    authorId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    taskId: string | null
    authorId: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    updatedAt: number
    taskId: number
    authorId: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    taskId?: true
    authorId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    taskId?: true
    authorId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    taskId?: true
    authorId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    content: string
    createdAt: Date
    updatedAt: Date
    taskId: string
    authorId: string
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taskId?: boolean
    authorId?: boolean
    task?: boolean | TasksDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taskId?: boolean
    authorId?: boolean
    task?: boolean | TasksDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taskId?: boolean
    authorId?: boolean
    task?: boolean | TasksDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taskId?: boolean
    authorId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "updatedAt" | "taskId" | "authorId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TasksDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TasksDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TasksDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      task: Prisma.$TasksPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      createdAt: Date
      updatedAt: Date
      taskId: string
      authorId: string
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TasksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TasksDefaultArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
    readonly taskId: FieldRef<"Comment", 'String'>
    readonly authorId: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Attachments
   */

  export type AggregateAttachments = {
    _count: AttachmentsCountAggregateOutputType | null
    _min: AttachmentsMinAggregateOutputType | null
    _max: AttachmentsMaxAggregateOutputType | null
  }

  export type AttachmentsMinAggregateOutputType = {
    id: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    taskId: string | null
    uploaderId: string | null
  }

  export type AttachmentsMaxAggregateOutputType = {
    id: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    taskId: string | null
    uploaderId: string | null
  }

  export type AttachmentsCountAggregateOutputType = {
    id: number
    url: number
    createdAt: number
    updatedAt: number
    taskId: number
    uploaderId: number
    _all: number
  }


  export type AttachmentsMinAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    taskId?: true
    uploaderId?: true
  }

  export type AttachmentsMaxAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    taskId?: true
    uploaderId?: true
  }

  export type AttachmentsCountAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    taskId?: true
    uploaderId?: true
    _all?: true
  }

  export type AttachmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachments to aggregate.
     */
    where?: AttachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentsOrderByWithRelationInput | AttachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attachments
    **/
    _count?: true | AttachmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentsMaxAggregateInputType
  }

  export type GetAttachmentsAggregateType<T extends AttachmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachments[P]>
      : GetScalarType<T[P], AggregateAttachments[P]>
  }




  export type AttachmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentsWhereInput
    orderBy?: AttachmentsOrderByWithAggregationInput | AttachmentsOrderByWithAggregationInput[]
    by: AttachmentsScalarFieldEnum[] | AttachmentsScalarFieldEnum
    having?: AttachmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachmentsCountAggregateInputType | true
    _min?: AttachmentsMinAggregateInputType
    _max?: AttachmentsMaxAggregateInputType
  }

  export type AttachmentsGroupByOutputType = {
    id: string
    url: string
    createdAt: Date
    updatedAt: Date
    taskId: string
    uploaderId: string
    _count: AttachmentsCountAggregateOutputType | null
    _min: AttachmentsMinAggregateOutputType | null
    _max: AttachmentsMaxAggregateOutputType | null
  }

  type GetAttachmentsGroupByPayload<T extends AttachmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttachmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentsGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentsGroupByOutputType[P]>
        }
      >
    >


  export type AttachmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taskId?: boolean
    uploaderId?: boolean
    task?: boolean | TasksDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachments"]>

  export type AttachmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taskId?: boolean
    uploaderId?: boolean
    task?: boolean | TasksDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachments"]>

  export type AttachmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taskId?: boolean
    uploaderId?: boolean
    task?: boolean | TasksDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachments"]>

  export type AttachmentsSelectScalar = {
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taskId?: boolean
    uploaderId?: boolean
  }

  export type AttachmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "createdAt" | "updatedAt" | "taskId" | "uploaderId", ExtArgs["result"]["attachments"]>
  export type AttachmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TasksDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttachmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TasksDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttachmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TasksDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AttachmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attachments"
    objects: {
      task: Prisma.$TasksPayload<ExtArgs>
      uploadedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      createdAt: Date
      updatedAt: Date
      taskId: string
      uploaderId: string
    }, ExtArgs["result"]["attachments"]>
    composites: {}
  }

  type AttachmentsGetPayload<S extends boolean | null | undefined | AttachmentsDefaultArgs> = $Result.GetResult<Prisma.$AttachmentsPayload, S>

  type AttachmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttachmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttachmentsCountAggregateInputType | true
    }

  export interface AttachmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attachments'], meta: { name: 'Attachments' } }
    /**
     * Find zero or one Attachments that matches the filter.
     * @param {AttachmentsFindUniqueArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttachmentsFindUniqueArgs>(args: SelectSubset<T, AttachmentsFindUniqueArgs<ExtArgs>>): Prisma__AttachmentsClient<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attachments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttachmentsFindUniqueOrThrowArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttachmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, AttachmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttachmentsClient<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsFindFirstArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttachmentsFindFirstArgs>(args?: SelectSubset<T, AttachmentsFindFirstArgs<ExtArgs>>): Prisma__AttachmentsClient<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsFindFirstOrThrowArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttachmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, AttachmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttachmentsClient<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachments.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attachmentsWithIdOnly = await prisma.attachments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttachmentsFindManyArgs>(args?: SelectSubset<T, AttachmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attachments.
     * @param {AttachmentsCreateArgs} args - Arguments to create a Attachments.
     * @example
     * // Create one Attachments
     * const Attachments = await prisma.attachments.create({
     *   data: {
     *     // ... data to create a Attachments
     *   }
     * })
     * 
     */
    create<T extends AttachmentsCreateArgs>(args: SelectSubset<T, AttachmentsCreateArgs<ExtArgs>>): Prisma__AttachmentsClient<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attachments.
     * @param {AttachmentsCreateManyArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachments = await prisma.attachments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttachmentsCreateManyArgs>(args?: SelectSubset<T, AttachmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attachments and returns the data saved in the database.
     * @param {AttachmentsCreateManyAndReturnArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachments = await prisma.attachments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attachments and only return the `id`
     * const attachmentsWithIdOnly = await prisma.attachments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttachmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, AttachmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attachments.
     * @param {AttachmentsDeleteArgs} args - Arguments to delete one Attachments.
     * @example
     * // Delete one Attachments
     * const Attachments = await prisma.attachments.delete({
     *   where: {
     *     // ... filter to delete one Attachments
     *   }
     * })
     * 
     */
    delete<T extends AttachmentsDeleteArgs>(args: SelectSubset<T, AttachmentsDeleteArgs<ExtArgs>>): Prisma__AttachmentsClient<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attachments.
     * @param {AttachmentsUpdateArgs} args - Arguments to update one Attachments.
     * @example
     * // Update one Attachments
     * const attachments = await prisma.attachments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttachmentsUpdateArgs>(args: SelectSubset<T, AttachmentsUpdateArgs<ExtArgs>>): Prisma__AttachmentsClient<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attachments.
     * @param {AttachmentsDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttachmentsDeleteManyArgs>(args?: SelectSubset<T, AttachmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachments = await prisma.attachments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttachmentsUpdateManyArgs>(args: SelectSubset<T, AttachmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments and returns the data updated in the database.
     * @param {AttachmentsUpdateManyAndReturnArgs} args - Arguments to update many Attachments.
     * @example
     * // Update many Attachments
     * const attachments = await prisma.attachments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attachments and only return the `id`
     * const attachmentsWithIdOnly = await prisma.attachments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttachmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, AttachmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attachments.
     * @param {AttachmentsUpsertArgs} args - Arguments to update or create a Attachments.
     * @example
     * // Update or create a Attachments
     * const attachments = await prisma.attachments.upsert({
     *   create: {
     *     // ... data to create a Attachments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachments we want to update
     *   }
     * })
     */
    upsert<T extends AttachmentsUpsertArgs>(args: SelectSubset<T, AttachmentsUpsertArgs<ExtArgs>>): Prisma__AttachmentsClient<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachments.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends AttachmentsCountArgs>(
      args?: Subset<T, AttachmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttachmentsAggregateArgs>(args: Subset<T, AttachmentsAggregateArgs>): Prisma.PrismaPromise<GetAttachmentsAggregateType<T>>

    /**
     * Group by Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttachmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttachmentsGroupByArgs['orderBy'] }
        : { orderBy?: AttachmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttachmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attachments model
   */
  readonly fields: AttachmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attachments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttachmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TasksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TasksDefaultArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    uploadedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attachments model
   */
  interface AttachmentsFieldRefs {
    readonly id: FieldRef<"Attachments", 'String'>
    readonly url: FieldRef<"Attachments", 'String'>
    readonly createdAt: FieldRef<"Attachments", 'DateTime'>
    readonly updatedAt: FieldRef<"Attachments", 'DateTime'>
    readonly taskId: FieldRef<"Attachments", 'String'>
    readonly uploaderId: FieldRef<"Attachments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Attachments findUnique
   */
  export type AttachmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where: AttachmentsWhereUniqueInput
  }

  /**
   * Attachments findUniqueOrThrow
   */
  export type AttachmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where: AttachmentsWhereUniqueInput
  }

  /**
   * Attachments findFirst
   */
  export type AttachmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentsOrderByWithRelationInput | AttachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }

  /**
   * Attachments findFirstOrThrow
   */
  export type AttachmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentsOrderByWithRelationInput | AttachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }

  /**
   * Attachments findMany
   */
  export type AttachmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentsOrderByWithRelationInput | AttachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attachments.
     */
    cursor?: AttachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }

  /**
   * Attachments create
   */
  export type AttachmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Attachments.
     */
    data: XOR<AttachmentsCreateInput, AttachmentsUncheckedCreateInput>
  }

  /**
   * Attachments createMany
   */
  export type AttachmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentsCreateManyInput | AttachmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attachments createManyAndReturn
   */
  export type AttachmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentsCreateManyInput | AttachmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attachments update
   */
  export type AttachmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Attachments.
     */
    data: XOR<AttachmentsUpdateInput, AttachmentsUncheckedUpdateInput>
    /**
     * Choose, which Attachments to update.
     */
    where: AttachmentsWhereUniqueInput
  }

  /**
   * Attachments updateMany
   */
  export type AttachmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentsUpdateManyMutationInput, AttachmentsUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentsWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
  }

  /**
   * Attachments updateManyAndReturn
   */
  export type AttachmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentsUpdateManyMutationInput, AttachmentsUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentsWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attachments upsert
   */
  export type AttachmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Attachments to update in case it exists.
     */
    where: AttachmentsWhereUniqueInput
    /**
     * In case the Attachments found by the `where` argument doesn't exist, create a new Attachments with this data.
     */
    create: XOR<AttachmentsCreateInput, AttachmentsUncheckedCreateInput>
    /**
     * In case the Attachments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttachmentsUpdateInput, AttachmentsUncheckedUpdateInput>
  }

  /**
   * Attachments delete
   */
  export type AttachmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * Filter which Attachments to delete.
     */
    where: AttachmentsWhereUniqueInput
  }

  /**
   * Attachments deleteMany
   */
  export type AttachmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachments to delete
     */
    where?: AttachmentsWhereInput
    /**
     * Limit how many Attachments to delete.
     */
    limit?: number
  }

  /**
   * Attachments without action
   */
  export type AttachmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsInclude<ExtArgs> | null
  }


  /**
   * Model Projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsMinAggregateOutputType = {
    id: string | null
    title: string | null
    creatorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    creatorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectsCountAggregateOutputType = {
    id: number
    title: number
    creatorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectsMinAggregateInputType = {
    id?: true
    title?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectsMaxAggregateInputType = {
    id?: true
    title?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectsCountAggregateInputType = {
    id?: true
    title?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to aggregate.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type ProjectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectsWhereInput
    orderBy?: ProjectsOrderByWithAggregationInput | ProjectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: ProjectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    id: string
    title: string
    creatorId: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectsCountAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends ProjectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type ProjectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    lists?: boolean | Projects$listsArgs<ExtArgs>
    projectmembers?: boolean | Projects$projectmembersArgs<ExtArgs>
    tasks?: boolean | Projects$tasksArgs<ExtArgs>
    notifications?: boolean | Projects$notificationsArgs<ExtArgs>
    invitations?: boolean | Projects$invitationsArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type ProjectsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type ProjectsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type ProjectsSelectScalar = {
    id?: boolean
    title?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "creatorId" | "createdAt" | "updatedAt", ExtArgs["result"]["projects"]>
  export type ProjectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    lists?: boolean | Projects$listsArgs<ExtArgs>
    projectmembers?: boolean | Projects$projectmembersArgs<ExtArgs>
    tasks?: boolean | Projects$tasksArgs<ExtArgs>
    notifications?: boolean | Projects$notificationsArgs<ExtArgs>
    invitations?: boolean | Projects$invitationsArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Projects"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      lists: Prisma.$ListPayload<ExtArgs>[]
      projectmembers: Prisma.$ProjectMembersPayload<ExtArgs>[]
      tasks: Prisma.$TasksPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      invitations: Prisma.$ProjectInvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      creatorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }

  type ProjectsGetPayload<S extends boolean | null | undefined | ProjectsDefaultArgs> = $Result.GetResult<Prisma.$ProjectsPayload, S>

  type ProjectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface ProjectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Projects'], meta: { name: 'Projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {ProjectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectsFindUniqueArgs>(args: SelectSubset<T, ProjectsFindUniqueArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectsFindFirstArgs>(args?: SelectSubset<T, ProjectsFindFirstArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectsWithIdOnly = await prisma.projects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectsFindManyArgs>(args?: SelectSubset<T, ProjectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projects.
     * @param {ProjectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
     */
    create<T extends ProjectsCreateArgs>(args: SelectSubset<T, ProjectsCreateArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectsCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectsCreateManyArgs>(args?: SelectSubset<T, ProjectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectsCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projects.
     * @param {ProjectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
     */
    delete<T extends ProjectsDeleteArgs>(args: SelectSubset<T, ProjectsDeleteArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projects.
     * @param {ProjectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectsUpdateArgs>(args: SelectSubset<T, ProjectsUpdateArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectsDeleteManyArgs>(args?: SelectSubset<T, ProjectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectsUpdateManyArgs>(args: SelectSubset<T, ProjectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectsUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projects.
     * @param {ProjectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
     */
    upsert<T extends ProjectsUpsertArgs>(args: SelectSubset<T, ProjectsUpsertArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectsCountArgs>(
      args?: Subset<T, ProjectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectsGroupByArgs['orderBy'] }
        : { orderBy?: ProjectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Projects model
   */
  readonly fields: ProjectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lists<T extends Projects$listsArgs<ExtArgs> = {}>(args?: Subset<T, Projects$listsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectmembers<T extends Projects$projectmembersArgs<ExtArgs> = {}>(args?: Subset<T, Projects$projectmembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends Projects$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Projects$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Projects$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Projects$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitations<T extends Projects$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, Projects$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Projects model
   */
  interface ProjectsFieldRefs {
    readonly id: FieldRef<"Projects", 'String'>
    readonly title: FieldRef<"Projects", 'String'>
    readonly creatorId: FieldRef<"Projects", 'String'>
    readonly createdAt: FieldRef<"Projects", 'DateTime'>
    readonly updatedAt: FieldRef<"Projects", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Projects findUnique
   */
  export type ProjectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects findUniqueOrThrow
   */
  export type ProjectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects findFirst
   */
  export type ProjectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Projects findFirstOrThrow
   */
  export type ProjectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Projects findMany
   */
  export type ProjectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Projects create
   */
  export type ProjectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The data needed to create a Projects.
     */
    data: XOR<ProjectsCreateInput, ProjectsUncheckedCreateInput>
  }

  /**
   * Projects createMany
   */
  export type ProjectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectsCreateManyInput | ProjectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Projects createManyAndReturn
   */
  export type ProjectsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectsCreateManyInput | ProjectsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Projects update
   */
  export type ProjectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The data needed to update a Projects.
     */
    data: XOR<ProjectsUpdateInput, ProjectsUncheckedUpdateInput>
    /**
     * Choose, which Projects to update.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects updateMany
   */
  export type ProjectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectsWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Projects updateManyAndReturn
   */
  export type ProjectsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectsWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Projects upsert
   */
  export type ProjectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The filter to search for the Projects to update in case it exists.
     */
    where: ProjectsWhereUniqueInput
    /**
     * In case the Projects found by the `where` argument doesn't exist, create a new Projects with this data.
     */
    create: XOR<ProjectsCreateInput, ProjectsUncheckedCreateInput>
    /**
     * In case the Projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectsUpdateInput, ProjectsUncheckedUpdateInput>
  }

  /**
   * Projects delete
   */
  export type ProjectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter which Projects to delete.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects deleteMany
   */
  export type ProjectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectsWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Projects.lists
   */
  export type Projects$listsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    where?: ListWhereInput
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    cursor?: ListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * Projects.projectmembers
   */
  export type Projects$projectmembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMembers
     */
    select?: ProjectMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMembers
     */
    omit?: ProjectMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMembersInclude<ExtArgs> | null
    where?: ProjectMembersWhereInput
    orderBy?: ProjectMembersOrderByWithRelationInput | ProjectMembersOrderByWithRelationInput[]
    cursor?: ProjectMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMembersScalarFieldEnum | ProjectMembersScalarFieldEnum[]
  }

  /**
   * Projects.tasks
   */
  export type Projects$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    where?: TasksWhereInput
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    cursor?: TasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Projects.notifications
   */
  export type Projects$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Projects.invitations
   */
  export type Projects$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationInclude<ExtArgs> | null
    where?: ProjectInvitationWhereInput
    orderBy?: ProjectInvitationOrderByWithRelationInput | ProjectInvitationOrderByWithRelationInput[]
    cursor?: ProjectInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectInvitationScalarFieldEnum | ProjectInvitationScalarFieldEnum[]
  }

  /**
   * Projects without action
   */
  export type ProjectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
  }


  /**
   * Model List
   */

  export type AggregateList = {
    _count: ListCountAggregateOutputType | null
    _avg: ListAvgAggregateOutputType | null
    _sum: ListSumAggregateOutputType | null
    _min: ListMinAggregateOutputType | null
    _max: ListMaxAggregateOutputType | null
  }

  export type ListAvgAggregateOutputType = {
    position: number | null
  }

  export type ListSumAggregateOutputType = {
    position: number | null
  }

  export type ListMinAggregateOutputType = {
    id: string | null
    title: string | null
    position: number | null
    color: string | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListMaxAggregateOutputType = {
    id: string | null
    title: string | null
    position: number | null
    color: string | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListCountAggregateOutputType = {
    id: number
    title: number
    position: number
    color: number
    projectId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ListAvgAggregateInputType = {
    position?: true
  }

  export type ListSumAggregateInputType = {
    position?: true
  }

  export type ListMinAggregateInputType = {
    id?: true
    title?: true
    position?: true
    color?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListMaxAggregateInputType = {
    id?: true
    title?: true
    position?: true
    color?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListCountAggregateInputType = {
    id?: true
    title?: true
    position?: true
    color?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which List to aggregate.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lists
    **/
    _count?: true | ListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListMaxAggregateInputType
  }

  export type GetListAggregateType<T extends ListAggregateArgs> = {
        [P in keyof T & keyof AggregateList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateList[P]>
      : GetScalarType<T[P], AggregateList[P]>
  }




  export type ListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListWhereInput
    orderBy?: ListOrderByWithAggregationInput | ListOrderByWithAggregationInput[]
    by: ListScalarFieldEnum[] | ListScalarFieldEnum
    having?: ListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListCountAggregateInputType | true
    _avg?: ListAvgAggregateInputType
    _sum?: ListSumAggregateInputType
    _min?: ListMinAggregateInputType
    _max?: ListMaxAggregateInputType
  }

  export type ListGroupByOutputType = {
    id: string
    title: string
    position: number
    color: string | null
    projectId: string
    createdAt: Date
    updatedAt: Date
    _count: ListCountAggregateOutputType | null
    _avg: ListAvgAggregateOutputType | null
    _sum: ListSumAggregateOutputType | null
    _min: ListMinAggregateOutputType | null
    _max: ListMaxAggregateOutputType | null
  }

  type GetListGroupByPayload<T extends ListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListGroupByOutputType[P]>
            : GetScalarType<T[P], ListGroupByOutputType[P]>
        }
      >
    >


  export type ListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    position?: boolean
    color?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    tasks?: boolean | List$tasksArgs<ExtArgs>
    _count?: boolean | ListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list"]>

  export type ListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    position?: boolean
    color?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list"]>

  export type ListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    position?: boolean
    color?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list"]>

  export type ListSelectScalar = {
    id?: boolean
    title?: boolean
    position?: boolean
    color?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "position" | "color" | "projectId" | "createdAt" | "updatedAt", ExtArgs["result"]["list"]>
  export type ListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    tasks?: boolean | List$tasksArgs<ExtArgs>
    _count?: boolean | ListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }
  export type ListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }

  export type $ListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "List"
    objects: {
      project: Prisma.$ProjectsPayload<ExtArgs>
      tasks: Prisma.$TasksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      position: number
      color: string | null
      projectId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["list"]>
    composites: {}
  }

  type ListGetPayload<S extends boolean | null | undefined | ListDefaultArgs> = $Result.GetResult<Prisma.$ListPayload, S>

  type ListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListCountAggregateInputType | true
    }

  export interface ListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['List'], meta: { name: 'List' } }
    /**
     * Find zero or one List that matches the filter.
     * @param {ListFindUniqueArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListFindUniqueArgs>(args: SelectSubset<T, ListFindUniqueArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one List that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListFindUniqueOrThrowArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListFindUniqueOrThrowArgs>(args: SelectSubset<T, ListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first List that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindFirstArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListFindFirstArgs>(args?: SelectSubset<T, ListFindFirstArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first List that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindFirstOrThrowArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListFindFirstOrThrowArgs>(args?: SelectSubset<T, ListFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lists
     * const lists = await prisma.list.findMany()
     * 
     * // Get first 10 Lists
     * const lists = await prisma.list.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listWithIdOnly = await prisma.list.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListFindManyArgs>(args?: SelectSubset<T, ListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a List.
     * @param {ListCreateArgs} args - Arguments to create a List.
     * @example
     * // Create one List
     * const List = await prisma.list.create({
     *   data: {
     *     // ... data to create a List
     *   }
     * })
     * 
     */
    create<T extends ListCreateArgs>(args: SelectSubset<T, ListCreateArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lists.
     * @param {ListCreateManyArgs} args - Arguments to create many Lists.
     * @example
     * // Create many Lists
     * const list = await prisma.list.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListCreateManyArgs>(args?: SelectSubset<T, ListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lists and returns the data saved in the database.
     * @param {ListCreateManyAndReturnArgs} args - Arguments to create many Lists.
     * @example
     * // Create many Lists
     * const list = await prisma.list.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lists and only return the `id`
     * const listWithIdOnly = await prisma.list.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListCreateManyAndReturnArgs>(args?: SelectSubset<T, ListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a List.
     * @param {ListDeleteArgs} args - Arguments to delete one List.
     * @example
     * // Delete one List
     * const List = await prisma.list.delete({
     *   where: {
     *     // ... filter to delete one List
     *   }
     * })
     * 
     */
    delete<T extends ListDeleteArgs>(args: SelectSubset<T, ListDeleteArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one List.
     * @param {ListUpdateArgs} args - Arguments to update one List.
     * @example
     * // Update one List
     * const list = await prisma.list.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListUpdateArgs>(args: SelectSubset<T, ListUpdateArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lists.
     * @param {ListDeleteManyArgs} args - Arguments to filter Lists to delete.
     * @example
     * // Delete a few Lists
     * const { count } = await prisma.list.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListDeleteManyArgs>(args?: SelectSubset<T, ListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lists
     * const list = await prisma.list.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListUpdateManyArgs>(args: SelectSubset<T, ListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lists and returns the data updated in the database.
     * @param {ListUpdateManyAndReturnArgs} args - Arguments to update many Lists.
     * @example
     * // Update many Lists
     * const list = await prisma.list.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lists and only return the `id`
     * const listWithIdOnly = await prisma.list.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListUpdateManyAndReturnArgs>(args: SelectSubset<T, ListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one List.
     * @param {ListUpsertArgs} args - Arguments to update or create a List.
     * @example
     * // Update or create a List
     * const list = await prisma.list.upsert({
     *   create: {
     *     // ... data to create a List
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the List we want to update
     *   }
     * })
     */
    upsert<T extends ListUpsertArgs>(args: SelectSubset<T, ListUpsertArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListCountArgs} args - Arguments to filter Lists to count.
     * @example
     * // Count the number of Lists
     * const count = await prisma.list.count({
     *   where: {
     *     // ... the filter for the Lists we want to count
     *   }
     * })
    **/
    count<T extends ListCountArgs>(
      args?: Subset<T, ListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListAggregateArgs>(args: Subset<T, ListAggregateArgs>): Prisma.PrismaPromise<GetListAggregateType<T>>

    /**
     * Group by List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListGroupByArgs['orderBy'] }
        : { orderBy?: ListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the List model
   */
  readonly fields: ListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for List.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectsDefaultArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends List$tasksArgs<ExtArgs> = {}>(args?: Subset<T, List$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the List model
   */
  interface ListFieldRefs {
    readonly id: FieldRef<"List", 'String'>
    readonly title: FieldRef<"List", 'String'>
    readonly position: FieldRef<"List", 'Int'>
    readonly color: FieldRef<"List", 'String'>
    readonly projectId: FieldRef<"List", 'String'>
    readonly createdAt: FieldRef<"List", 'DateTime'>
    readonly updatedAt: FieldRef<"List", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * List findUnique
   */
  export type ListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List findUniqueOrThrow
   */
  export type ListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List findFirst
   */
  export type ListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lists.
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lists.
     */
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * List findFirstOrThrow
   */
  export type ListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lists.
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lists.
     */
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * List findMany
   */
  export type ListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which Lists to fetch.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lists.
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lists.
     */
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * List create
   */
  export type ListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * The data needed to create a List.
     */
    data: XOR<ListCreateInput, ListUncheckedCreateInput>
  }

  /**
   * List createMany
   */
  export type ListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lists.
     */
    data: ListCreateManyInput | ListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * List createManyAndReturn
   */
  export type ListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * The data used to create many Lists.
     */
    data: ListCreateManyInput | ListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * List update
   */
  export type ListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * The data needed to update a List.
     */
    data: XOR<ListUpdateInput, ListUncheckedUpdateInput>
    /**
     * Choose, which List to update.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List updateMany
   */
  export type ListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lists.
     */
    data: XOR<ListUpdateManyMutationInput, ListUncheckedUpdateManyInput>
    /**
     * Filter which Lists to update
     */
    where?: ListWhereInput
    /**
     * Limit how many Lists to update.
     */
    limit?: number
  }

  /**
   * List updateManyAndReturn
   */
  export type ListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * The data used to update Lists.
     */
    data: XOR<ListUpdateManyMutationInput, ListUncheckedUpdateManyInput>
    /**
     * Filter which Lists to update
     */
    where?: ListWhereInput
    /**
     * Limit how many Lists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * List upsert
   */
  export type ListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * The filter to search for the List to update in case it exists.
     */
    where: ListWhereUniqueInput
    /**
     * In case the List found by the `where` argument doesn't exist, create a new List with this data.
     */
    create: XOR<ListCreateInput, ListUncheckedCreateInput>
    /**
     * In case the List was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListUpdateInput, ListUncheckedUpdateInput>
  }

  /**
   * List delete
   */
  export type ListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter which List to delete.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List deleteMany
   */
  export type ListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lists to delete
     */
    where?: ListWhereInput
    /**
     * Limit how many Lists to delete.
     */
    limit?: number
  }

  /**
   * List.tasks
   */
  export type List$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    where?: TasksWhereInput
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    cursor?: TasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * List without action
   */
  export type ListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
  }


  /**
   * Model ProjectMembers
   */

  export type AggregateProjectMembers = {
    _count: ProjectMembersCountAggregateOutputType | null
    _min: ProjectMembersMinAggregateOutputType | null
    _max: ProjectMembersMaxAggregateOutputType | null
  }

  export type ProjectMembersMinAggregateOutputType = {
    id: string | null
    role: string | null
    projectId: string | null
    userId: string | null
  }

  export type ProjectMembersMaxAggregateOutputType = {
    id: string | null
    role: string | null
    projectId: string | null
    userId: string | null
  }

  export type ProjectMembersCountAggregateOutputType = {
    id: number
    role: number
    projectId: number
    userId: number
    _all: number
  }


  export type ProjectMembersMinAggregateInputType = {
    id?: true
    role?: true
    projectId?: true
    userId?: true
  }

  export type ProjectMembersMaxAggregateInputType = {
    id?: true
    role?: true
    projectId?: true
    userId?: true
  }

  export type ProjectMembersCountAggregateInputType = {
    id?: true
    role?: true
    projectId?: true
    userId?: true
    _all?: true
  }

  export type ProjectMembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMembers to aggregate.
     */
    where?: ProjectMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMembersOrderByWithRelationInput | ProjectMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectMembers
    **/
    _count?: true | ProjectMembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMembersMaxAggregateInputType
  }

  export type GetProjectMembersAggregateType<T extends ProjectMembersAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectMembers[P]>
      : GetScalarType<T[P], AggregateProjectMembers[P]>
  }




  export type ProjectMembersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMembersWhereInput
    orderBy?: ProjectMembersOrderByWithAggregationInput | ProjectMembersOrderByWithAggregationInput[]
    by: ProjectMembersScalarFieldEnum[] | ProjectMembersScalarFieldEnum
    having?: ProjectMembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectMembersCountAggregateInputType | true
    _min?: ProjectMembersMinAggregateInputType
    _max?: ProjectMembersMaxAggregateInputType
  }

  export type ProjectMembersGroupByOutputType = {
    id: string
    role: string
    projectId: string
    userId: string
    _count: ProjectMembersCountAggregateOutputType | null
    _min: ProjectMembersMinAggregateOutputType | null
    _max: ProjectMembersMaxAggregateOutputType | null
  }

  type GetProjectMembersGroupByPayload<T extends ProjectMembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectMembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectMembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectMembersGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectMembersGroupByOutputType[P]>
        }
      >
    >


  export type ProjectMembersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    projectId?: boolean
    userId?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMembers"]>

  export type ProjectMembersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    projectId?: boolean
    userId?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMembers"]>

  export type ProjectMembersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    projectId?: boolean
    userId?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMembers"]>

  export type ProjectMembersSelectScalar = {
    id?: boolean
    role?: boolean
    projectId?: boolean
    userId?: boolean
  }

  export type ProjectMembersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "projectId" | "userId", ExtArgs["result"]["projectMembers"]>
  export type ProjectMembersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectMembersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectMembersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectMembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectMembers"
    objects: {
      project: Prisma.$ProjectsPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: string
      projectId: string
      userId: string
    }, ExtArgs["result"]["projectMembers"]>
    composites: {}
  }

  type ProjectMembersGetPayload<S extends boolean | null | undefined | ProjectMembersDefaultArgs> = $Result.GetResult<Prisma.$ProjectMembersPayload, S>

  type ProjectMembersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectMembersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectMembersCountAggregateInputType | true
    }

  export interface ProjectMembersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectMembers'], meta: { name: 'ProjectMembers' } }
    /**
     * Find zero or one ProjectMembers that matches the filter.
     * @param {ProjectMembersFindUniqueArgs} args - Arguments to find a ProjectMembers
     * @example
     * // Get one ProjectMembers
     * const projectMembers = await prisma.projectMembers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectMembersFindUniqueArgs>(args: SelectSubset<T, ProjectMembersFindUniqueArgs<ExtArgs>>): Prisma__ProjectMembersClient<$Result.GetResult<Prisma.$ProjectMembersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectMembers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectMembersFindUniqueOrThrowArgs} args - Arguments to find a ProjectMembers
     * @example
     * // Get one ProjectMembers
     * const projectMembers = await prisma.projectMembers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectMembersFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectMembersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectMembersClient<$Result.GetResult<Prisma.$ProjectMembersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMembersFindFirstArgs} args - Arguments to find a ProjectMembers
     * @example
     * // Get one ProjectMembers
     * const projectMembers = await prisma.projectMembers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectMembersFindFirstArgs>(args?: SelectSubset<T, ProjectMembersFindFirstArgs<ExtArgs>>): Prisma__ProjectMembersClient<$Result.GetResult<Prisma.$ProjectMembersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMembers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMembersFindFirstOrThrowArgs} args - Arguments to find a ProjectMembers
     * @example
     * // Get one ProjectMembers
     * const projectMembers = await prisma.projectMembers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectMembersFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectMembersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectMembersClient<$Result.GetResult<Prisma.$ProjectMembersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMembersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectMembers
     * const projectMembers = await prisma.projectMembers.findMany()
     * 
     * // Get first 10 ProjectMembers
     * const projectMembers = await prisma.projectMembers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectMembersWithIdOnly = await prisma.projectMembers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectMembersFindManyArgs>(args?: SelectSubset<T, ProjectMembersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectMembers.
     * @param {ProjectMembersCreateArgs} args - Arguments to create a ProjectMembers.
     * @example
     * // Create one ProjectMembers
     * const ProjectMembers = await prisma.projectMembers.create({
     *   data: {
     *     // ... data to create a ProjectMembers
     *   }
     * })
     * 
     */
    create<T extends ProjectMembersCreateArgs>(args: SelectSubset<T, ProjectMembersCreateArgs<ExtArgs>>): Prisma__ProjectMembersClient<$Result.GetResult<Prisma.$ProjectMembersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectMembers.
     * @param {ProjectMembersCreateManyArgs} args - Arguments to create many ProjectMembers.
     * @example
     * // Create many ProjectMembers
     * const projectMembers = await prisma.projectMembers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectMembersCreateManyArgs>(args?: SelectSubset<T, ProjectMembersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectMembers and returns the data saved in the database.
     * @param {ProjectMembersCreateManyAndReturnArgs} args - Arguments to create many ProjectMembers.
     * @example
     * // Create many ProjectMembers
     * const projectMembers = await prisma.projectMembers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectMembers and only return the `id`
     * const projectMembersWithIdOnly = await prisma.projectMembers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectMembersCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectMembersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMembersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectMembers.
     * @param {ProjectMembersDeleteArgs} args - Arguments to delete one ProjectMembers.
     * @example
     * // Delete one ProjectMembers
     * const ProjectMembers = await prisma.projectMembers.delete({
     *   where: {
     *     // ... filter to delete one ProjectMembers
     *   }
     * })
     * 
     */
    delete<T extends ProjectMembersDeleteArgs>(args: SelectSubset<T, ProjectMembersDeleteArgs<ExtArgs>>): Prisma__ProjectMembersClient<$Result.GetResult<Prisma.$ProjectMembersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectMembers.
     * @param {ProjectMembersUpdateArgs} args - Arguments to update one ProjectMembers.
     * @example
     * // Update one ProjectMembers
     * const projectMembers = await prisma.projectMembers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectMembersUpdateArgs>(args: SelectSubset<T, ProjectMembersUpdateArgs<ExtArgs>>): Prisma__ProjectMembersClient<$Result.GetResult<Prisma.$ProjectMembersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectMembers.
     * @param {ProjectMembersDeleteManyArgs} args - Arguments to filter ProjectMembers to delete.
     * @example
     * // Delete a few ProjectMembers
     * const { count } = await prisma.projectMembers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectMembersDeleteManyArgs>(args?: SelectSubset<T, ProjectMembersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectMembers
     * const projectMembers = await prisma.projectMembers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectMembersUpdateManyArgs>(args: SelectSubset<T, ProjectMembersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMembers and returns the data updated in the database.
     * @param {ProjectMembersUpdateManyAndReturnArgs} args - Arguments to update many ProjectMembers.
     * @example
     * // Update many ProjectMembers
     * const projectMembers = await prisma.projectMembers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectMembers and only return the `id`
     * const projectMembersWithIdOnly = await prisma.projectMembers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectMembersUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectMembersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMembersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectMembers.
     * @param {ProjectMembersUpsertArgs} args - Arguments to update or create a ProjectMembers.
     * @example
     * // Update or create a ProjectMembers
     * const projectMembers = await prisma.projectMembers.upsert({
     *   create: {
     *     // ... data to create a ProjectMembers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectMembers we want to update
     *   }
     * })
     */
    upsert<T extends ProjectMembersUpsertArgs>(args: SelectSubset<T, ProjectMembersUpsertArgs<ExtArgs>>): Prisma__ProjectMembersClient<$Result.GetResult<Prisma.$ProjectMembersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMembersCountArgs} args - Arguments to filter ProjectMembers to count.
     * @example
     * // Count the number of ProjectMembers
     * const count = await prisma.projectMembers.count({
     *   where: {
     *     // ... the filter for the ProjectMembers we want to count
     *   }
     * })
    **/
    count<T extends ProjectMembersCountArgs>(
      args?: Subset<T, ProjectMembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectMembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectMembersAggregateArgs>(args: Subset<T, ProjectMembersAggregateArgs>): Prisma.PrismaPromise<GetProjectMembersAggregateType<T>>

    /**
     * Group by ProjectMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMembersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectMembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectMembersGroupByArgs['orderBy'] }
        : { orderBy?: ProjectMembersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectMembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectMembers model
   */
  readonly fields: ProjectMembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectMembers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectMembersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectsDefaultArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectMembers model
   */
  interface ProjectMembersFieldRefs {
    readonly id: FieldRef<"ProjectMembers", 'String'>
    readonly role: FieldRef<"ProjectMembers", 'String'>
    readonly projectId: FieldRef<"ProjectMembers", 'String'>
    readonly userId: FieldRef<"ProjectMembers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectMembers findUnique
   */
  export type ProjectMembersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMembers
     */
    select?: ProjectMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMembers
     */
    omit?: ProjectMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMembersInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMembers to fetch.
     */
    where: ProjectMembersWhereUniqueInput
  }

  /**
   * ProjectMembers findUniqueOrThrow
   */
  export type ProjectMembersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMembers
     */
    select?: ProjectMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMembers
     */
    omit?: ProjectMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMembersInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMembers to fetch.
     */
    where: ProjectMembersWhereUniqueInput
  }

  /**
   * ProjectMembers findFirst
   */
  export type ProjectMembersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMembers
     */
    select?: ProjectMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMembers
     */
    omit?: ProjectMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMembersInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMembers to fetch.
     */
    where?: ProjectMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMembersOrderByWithRelationInput | ProjectMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMembers.
     */
    cursor?: ProjectMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMembers.
     */
    distinct?: ProjectMembersScalarFieldEnum | ProjectMembersScalarFieldEnum[]
  }

  /**
   * ProjectMembers findFirstOrThrow
   */
  export type ProjectMembersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMembers
     */
    select?: ProjectMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMembers
     */
    omit?: ProjectMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMembersInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMembers to fetch.
     */
    where?: ProjectMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMembersOrderByWithRelationInput | ProjectMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMembers.
     */
    cursor?: ProjectMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMembers.
     */
    distinct?: ProjectMembersScalarFieldEnum | ProjectMembersScalarFieldEnum[]
  }

  /**
   * ProjectMembers findMany
   */
  export type ProjectMembersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMembers
     */
    select?: ProjectMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMembers
     */
    omit?: ProjectMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMembersInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMembers to fetch.
     */
    where?: ProjectMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMembersOrderByWithRelationInput | ProjectMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectMembers.
     */
    cursor?: ProjectMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMembers.
     */
    distinct?: ProjectMembersScalarFieldEnum | ProjectMembersScalarFieldEnum[]
  }

  /**
   * ProjectMembers create
   */
  export type ProjectMembersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMembers
     */
    select?: ProjectMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMembers
     */
    omit?: ProjectMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMembersInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectMembers.
     */
    data: XOR<ProjectMembersCreateInput, ProjectMembersUncheckedCreateInput>
  }

  /**
   * ProjectMembers createMany
   */
  export type ProjectMembersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectMembers.
     */
    data: ProjectMembersCreateManyInput | ProjectMembersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectMembers createManyAndReturn
   */
  export type ProjectMembersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMembers
     */
    select?: ProjectMembersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMembers
     */
    omit?: ProjectMembersOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectMembers.
     */
    data: ProjectMembersCreateManyInput | ProjectMembersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMembersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectMembers update
   */
  export type ProjectMembersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMembers
     */
    select?: ProjectMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMembers
     */
    omit?: ProjectMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMembersInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectMembers.
     */
    data: XOR<ProjectMembersUpdateInput, ProjectMembersUncheckedUpdateInput>
    /**
     * Choose, which ProjectMembers to update.
     */
    where: ProjectMembersWhereUniqueInput
  }

  /**
   * ProjectMembers updateMany
   */
  export type ProjectMembersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectMembers.
     */
    data: XOR<ProjectMembersUpdateManyMutationInput, ProjectMembersUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMembers to update
     */
    where?: ProjectMembersWhereInput
    /**
     * Limit how many ProjectMembers to update.
     */
    limit?: number
  }

  /**
   * ProjectMembers updateManyAndReturn
   */
  export type ProjectMembersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMembers
     */
    select?: ProjectMembersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMembers
     */
    omit?: ProjectMembersOmit<ExtArgs> | null
    /**
     * The data used to update ProjectMembers.
     */
    data: XOR<ProjectMembersUpdateManyMutationInput, ProjectMembersUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMembers to update
     */
    where?: ProjectMembersWhereInput
    /**
     * Limit how many ProjectMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMembersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectMembers upsert
   */
  export type ProjectMembersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMembers
     */
    select?: ProjectMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMembers
     */
    omit?: ProjectMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMembersInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectMembers to update in case it exists.
     */
    where: ProjectMembersWhereUniqueInput
    /**
     * In case the ProjectMembers found by the `where` argument doesn't exist, create a new ProjectMembers with this data.
     */
    create: XOR<ProjectMembersCreateInput, ProjectMembersUncheckedCreateInput>
    /**
     * In case the ProjectMembers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectMembersUpdateInput, ProjectMembersUncheckedUpdateInput>
  }

  /**
   * ProjectMembers delete
   */
  export type ProjectMembersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMembers
     */
    select?: ProjectMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMembers
     */
    omit?: ProjectMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMembersInclude<ExtArgs> | null
    /**
     * Filter which ProjectMembers to delete.
     */
    where: ProjectMembersWhereUniqueInput
  }

  /**
   * ProjectMembers deleteMany
   */
  export type ProjectMembersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMembers to delete
     */
    where?: ProjectMembersWhereInput
    /**
     * Limit how many ProjectMembers to delete.
     */
    limit?: number
  }

  /**
   * ProjectMembers without action
   */
  export type ProjectMembersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMembers
     */
    select?: ProjectMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMembers
     */
    omit?: ProjectMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMembersInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    message: string | null
    type: string | null
    isRead: boolean | null
    createdAt: Date | null
    taskId: string | null
    projectId: string | null
    senderId: string | null
    receiverId: string | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    message: string | null
    type: string | null
    isRead: boolean | null
    createdAt: Date | null
    taskId: string | null
    projectId: string | null
    senderId: string | null
    receiverId: string | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    message: number
    type: number
    isRead: number
    createdAt: number
    taskId: number
    projectId: number
    senderId: number
    receiverId: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
    taskId?: true
    projectId?: true
    senderId?: true
    receiverId?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
    taskId?: true
    projectId?: true
    senderId?: true
    receiverId?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
    taskId?: true
    projectId?: true
    senderId?: true
    receiverId?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    message: string
    type: string
    isRead: boolean
    createdAt: Date
    taskId: string
    projectId: string
    senderId: string
    receiverId: string
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    createdAt?: boolean
    taskId?: boolean
    projectId?: boolean
    senderId?: boolean
    receiverId?: boolean
    task?: boolean | TasksDefaultArgs<ExtArgs>
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    createdAt?: boolean
    taskId?: boolean
    projectId?: boolean
    senderId?: boolean
    receiverId?: boolean
    task?: boolean | TasksDefaultArgs<ExtArgs>
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    createdAt?: boolean
    taskId?: boolean
    projectId?: boolean
    senderId?: boolean
    receiverId?: boolean
    task?: boolean | TasksDefaultArgs<ExtArgs>
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    createdAt?: boolean
    taskId?: boolean
    projectId?: boolean
    senderId?: boolean
    receiverId?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "type" | "isRead" | "createdAt" | "taskId" | "projectId" | "senderId" | "receiverId", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TasksDefaultArgs<ExtArgs>
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TasksDefaultArgs<ExtArgs>
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TasksDefaultArgs<ExtArgs>
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      task: Prisma.$TasksPayload<ExtArgs>
      project: Prisma.$ProjectsPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      type: string
      isRead: boolean
      createdAt: Date
      taskId: string
      projectId: string
      senderId: string
      receiverId: string
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TasksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TasksDefaultArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectsDefaultArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly taskId: FieldRef<"Notification", 'String'>
    readonly projectId: FieldRef<"Notification", 'String'>
    readonly senderId: FieldRef<"Notification", 'String'>
    readonly receiverId: FieldRef<"Notification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model PasswordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  export type PasswordResetTokenMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expires: Date | null
    isUsed: boolean | null
  }

  export type PasswordResetTokenMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expires: Date | null
    isUsed: boolean | null
  }

  export type PasswordResetTokenCountAggregateOutputType = {
    id: number
    email: number
    token: number
    expires: number
    isUsed: number
    _all: number
  }


  export type PasswordResetTokenMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    isUsed?: true
  }

  export type PasswordResetTokenMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    isUsed?: true
  }

  export type PasswordResetTokenCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    isUsed?: true
    _all?: true
  }

  export type PasswordResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetToken to aggregate.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetTokens
    **/
    _count?: true | PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type GetPasswordResetTokenAggregateType<T extends PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>
  }




  export type PasswordResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithAggregationInput | PasswordResetTokenOrderByWithAggregationInput[]
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum
    having?: PasswordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokenCountAggregateInputType | true
    _min?: PasswordResetTokenMinAggregateInputType
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type PasswordResetTokenGroupByOutputType = {
    id: string
    email: string
    token: string
    expires: Date
    isUsed: boolean
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetPasswordResetTokenGroupByPayload<T extends PasswordResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    isUsed?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    isUsed?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    isUsed?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    isUsed?: boolean
  }

  export type PasswordResetTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "token" | "expires" | "isUsed", ExtArgs["result"]["passwordResetToken"]>

  export type $PasswordResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      expires: Date
      isUsed: boolean
    }, ExtArgs["result"]["passwordResetToken"]>
    composites: {}
  }

  type PasswordResetTokenGetPayload<S extends boolean | null | undefined | PasswordResetTokenDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetTokenPayload, S>

  type PasswordResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetTokenCountAggregateInputType | true
    }

  export interface PasswordResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetToken'], meta: { name: 'PasswordResetToken' } }
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {PasswordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetTokenFindUniqueArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetTokenFindFirstArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetTokenFindManyArgs>(args?: SelectSubset<T, PasswordResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResetToken.
     * @param {PasswordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     * 
     */
    create<T extends PasswordResetTokenCreateArgs>(args: SelectSubset<T, PasswordResetTokenCreateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResetTokens.
     * @param {PasswordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetTokenCreateManyArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResetTokens and returns the data saved in the database.
     * @param {PasswordResetTokenCreateManyAndReturnArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordResetToken.
     * @param {PasswordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetTokenDeleteArgs>(args: SelectSubset<T, PasswordResetTokenDeleteArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResetToken.
     * @param {PasswordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetTokenUpdateArgs>(args: SelectSubset<T, PasswordResetTokenUpdateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetTokenDeleteManyArgs>(args?: SelectSubset<T, PasswordResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetTokenUpdateManyArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens and returns the data updated in the database.
     * @param {PasswordResetTokenUpdateManyAndReturnArgs} args - Arguments to update many PasswordResetTokens.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PasswordResetTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordResetToken.
     * @param {PasswordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetTokenUpsertArgs>(args: SelectSubset<T, PasswordResetTokenUpsertArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetTokenCountArgs>(
      args?: Subset<T, PasswordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasswordResetTokenAggregateArgs>(args: Subset<T, PasswordResetTokenAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasswordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetToken model
   */
  readonly fields: PasswordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PasswordResetToken model
   */
  interface PasswordResetTokenFieldRefs {
    readonly id: FieldRef<"PasswordResetToken", 'String'>
    readonly email: FieldRef<"PasswordResetToken", 'String'>
    readonly token: FieldRef<"PasswordResetToken", 'String'>
    readonly expires: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly isUsed: FieldRef<"PasswordResetToken", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResetToken findUnique
   */
  export type PasswordResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findUniqueOrThrow
   */
  export type PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findFirst
   */
  export type PasswordResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findFirstOrThrow
   */
  export type PasswordResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findMany
   */
  export type PasswordResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken create
   */
  export type PasswordResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
  }

  /**
   * PasswordResetToken createMany
   */
  export type PasswordResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken createManyAndReturn
   */
  export type PasswordResetTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken update
   */
  export type PasswordResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetToken to update.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken updateMany
   */
  export type PasswordResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken updateManyAndReturn
   */
  export type PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken upsert
   */
  export type PasswordResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetToken to update in case it exists.
     */
    where: PasswordResetTokenWhereUniqueInput
    /**
     * In case the PasswordResetToken found by the `where` argument doesn't exist, create a new PasswordResetToken with this data.
     */
    create: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
    /**
     * In case the PasswordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
  }

  /**
   * PasswordResetToken delete
   */
  export type PasswordResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter which PasswordResetToken to delete.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken deleteMany
   */
  export type PasswordResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetTokens to delete
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to delete.
     */
    limit?: number
  }

  /**
   * PasswordResetToken without action
   */
  export type PasswordResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
  }


  /**
   * Model ProjectInvitation
   */

  export type AggregateProjectInvitation = {
    _count: ProjectInvitationCountAggregateOutputType | null
    _min: ProjectInvitationMinAggregateOutputType | null
    _max: ProjectInvitationMaxAggregateOutputType | null
  }

  export type ProjectInvitationMinAggregateOutputType = {
    id: string | null
    email: string | null
    role: $Enums.Roles | null
    token: string | null
    status: string | null
    expiresAt: Date | null
    projectId: string | null
    invitedBy: string | null
  }

  export type ProjectInvitationMaxAggregateOutputType = {
    id: string | null
    email: string | null
    role: $Enums.Roles | null
    token: string | null
    status: string | null
    expiresAt: Date | null
    projectId: string | null
    invitedBy: string | null
  }

  export type ProjectInvitationCountAggregateOutputType = {
    id: number
    email: number
    role: number
    token: number
    status: number
    expiresAt: number
    projectId: number
    invitedBy: number
    _all: number
  }


  export type ProjectInvitationMinAggregateInputType = {
    id?: true
    email?: true
    role?: true
    token?: true
    status?: true
    expiresAt?: true
    projectId?: true
    invitedBy?: true
  }

  export type ProjectInvitationMaxAggregateInputType = {
    id?: true
    email?: true
    role?: true
    token?: true
    status?: true
    expiresAt?: true
    projectId?: true
    invitedBy?: true
  }

  export type ProjectInvitationCountAggregateInputType = {
    id?: true
    email?: true
    role?: true
    token?: true
    status?: true
    expiresAt?: true
    projectId?: true
    invitedBy?: true
    _all?: true
  }

  export type ProjectInvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectInvitation to aggregate.
     */
    where?: ProjectInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectInvitations to fetch.
     */
    orderBy?: ProjectInvitationOrderByWithRelationInput | ProjectInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectInvitations
    **/
    _count?: true | ProjectInvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectInvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectInvitationMaxAggregateInputType
  }

  export type GetProjectInvitationAggregateType<T extends ProjectInvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectInvitation[P]>
      : GetScalarType<T[P], AggregateProjectInvitation[P]>
  }




  export type ProjectInvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectInvitationWhereInput
    orderBy?: ProjectInvitationOrderByWithAggregationInput | ProjectInvitationOrderByWithAggregationInput[]
    by: ProjectInvitationScalarFieldEnum[] | ProjectInvitationScalarFieldEnum
    having?: ProjectInvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectInvitationCountAggregateInputType | true
    _min?: ProjectInvitationMinAggregateInputType
    _max?: ProjectInvitationMaxAggregateInputType
  }

  export type ProjectInvitationGroupByOutputType = {
    id: string
    email: string
    role: $Enums.Roles
    token: string
    status: string
    expiresAt: Date
    projectId: string
    invitedBy: string
    _count: ProjectInvitationCountAggregateOutputType | null
    _min: ProjectInvitationMinAggregateOutputType | null
    _max: ProjectInvitationMaxAggregateOutputType | null
  }

  type GetProjectInvitationGroupByPayload<T extends ProjectInvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectInvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectInvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectInvitationGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectInvitationGroupByOutputType[P]>
        }
      >
    >


  export type ProjectInvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    status?: boolean
    expiresAt?: boolean
    projectId?: boolean
    invitedBy?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectInvitation"]>

  export type ProjectInvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    status?: boolean
    expiresAt?: boolean
    projectId?: boolean
    invitedBy?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectInvitation"]>

  export type ProjectInvitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    status?: boolean
    expiresAt?: boolean
    projectId?: boolean
    invitedBy?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectInvitation"]>

  export type ProjectInvitationSelectScalar = {
    id?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    status?: boolean
    expiresAt?: boolean
    projectId?: boolean
    invitedBy?: boolean
  }

  export type ProjectInvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "role" | "token" | "status" | "expiresAt" | "projectId" | "invitedBy", ExtArgs["result"]["projectInvitation"]>
  export type ProjectInvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectInvitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectInvitationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectInvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectInvitation"
    objects: {
      project: Prisma.$ProjectsPayload<ExtArgs>
      inviter: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      role: $Enums.Roles
      token: string
      status: string
      expiresAt: Date
      projectId: string
      invitedBy: string
    }, ExtArgs["result"]["projectInvitation"]>
    composites: {}
  }

  type ProjectInvitationGetPayload<S extends boolean | null | undefined | ProjectInvitationDefaultArgs> = $Result.GetResult<Prisma.$ProjectInvitationPayload, S>

  type ProjectInvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectInvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectInvitationCountAggregateInputType | true
    }

  export interface ProjectInvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectInvitation'], meta: { name: 'ProjectInvitation' } }
    /**
     * Find zero or one ProjectInvitation that matches the filter.
     * @param {ProjectInvitationFindUniqueArgs} args - Arguments to find a ProjectInvitation
     * @example
     * // Get one ProjectInvitation
     * const projectInvitation = await prisma.projectInvitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectInvitationFindUniqueArgs>(args: SelectSubset<T, ProjectInvitationFindUniqueArgs<ExtArgs>>): Prisma__ProjectInvitationClient<$Result.GetResult<Prisma.$ProjectInvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectInvitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectInvitationFindUniqueOrThrowArgs} args - Arguments to find a ProjectInvitation
     * @example
     * // Get one ProjectInvitation
     * const projectInvitation = await prisma.projectInvitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectInvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectInvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectInvitationClient<$Result.GetResult<Prisma.$ProjectInvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectInvitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectInvitationFindFirstArgs} args - Arguments to find a ProjectInvitation
     * @example
     * // Get one ProjectInvitation
     * const projectInvitation = await prisma.projectInvitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectInvitationFindFirstArgs>(args?: SelectSubset<T, ProjectInvitationFindFirstArgs<ExtArgs>>): Prisma__ProjectInvitationClient<$Result.GetResult<Prisma.$ProjectInvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectInvitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectInvitationFindFirstOrThrowArgs} args - Arguments to find a ProjectInvitation
     * @example
     * // Get one ProjectInvitation
     * const projectInvitation = await prisma.projectInvitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectInvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectInvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectInvitationClient<$Result.GetResult<Prisma.$ProjectInvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectInvitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectInvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectInvitations
     * const projectInvitations = await prisma.projectInvitation.findMany()
     * 
     * // Get first 10 ProjectInvitations
     * const projectInvitations = await prisma.projectInvitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectInvitationWithIdOnly = await prisma.projectInvitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectInvitationFindManyArgs>(args?: SelectSubset<T, ProjectInvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectInvitation.
     * @param {ProjectInvitationCreateArgs} args - Arguments to create a ProjectInvitation.
     * @example
     * // Create one ProjectInvitation
     * const ProjectInvitation = await prisma.projectInvitation.create({
     *   data: {
     *     // ... data to create a ProjectInvitation
     *   }
     * })
     * 
     */
    create<T extends ProjectInvitationCreateArgs>(args: SelectSubset<T, ProjectInvitationCreateArgs<ExtArgs>>): Prisma__ProjectInvitationClient<$Result.GetResult<Prisma.$ProjectInvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectInvitations.
     * @param {ProjectInvitationCreateManyArgs} args - Arguments to create many ProjectInvitations.
     * @example
     * // Create many ProjectInvitations
     * const projectInvitation = await prisma.projectInvitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectInvitationCreateManyArgs>(args?: SelectSubset<T, ProjectInvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectInvitations and returns the data saved in the database.
     * @param {ProjectInvitationCreateManyAndReturnArgs} args - Arguments to create many ProjectInvitations.
     * @example
     * // Create many ProjectInvitations
     * const projectInvitation = await prisma.projectInvitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectInvitations and only return the `id`
     * const projectInvitationWithIdOnly = await prisma.projectInvitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectInvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectInvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectInvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectInvitation.
     * @param {ProjectInvitationDeleteArgs} args - Arguments to delete one ProjectInvitation.
     * @example
     * // Delete one ProjectInvitation
     * const ProjectInvitation = await prisma.projectInvitation.delete({
     *   where: {
     *     // ... filter to delete one ProjectInvitation
     *   }
     * })
     * 
     */
    delete<T extends ProjectInvitationDeleteArgs>(args: SelectSubset<T, ProjectInvitationDeleteArgs<ExtArgs>>): Prisma__ProjectInvitationClient<$Result.GetResult<Prisma.$ProjectInvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectInvitation.
     * @param {ProjectInvitationUpdateArgs} args - Arguments to update one ProjectInvitation.
     * @example
     * // Update one ProjectInvitation
     * const projectInvitation = await prisma.projectInvitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectInvitationUpdateArgs>(args: SelectSubset<T, ProjectInvitationUpdateArgs<ExtArgs>>): Prisma__ProjectInvitationClient<$Result.GetResult<Prisma.$ProjectInvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectInvitations.
     * @param {ProjectInvitationDeleteManyArgs} args - Arguments to filter ProjectInvitations to delete.
     * @example
     * // Delete a few ProjectInvitations
     * const { count } = await prisma.projectInvitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectInvitationDeleteManyArgs>(args?: SelectSubset<T, ProjectInvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectInvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectInvitations
     * const projectInvitation = await prisma.projectInvitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectInvitationUpdateManyArgs>(args: SelectSubset<T, ProjectInvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectInvitations and returns the data updated in the database.
     * @param {ProjectInvitationUpdateManyAndReturnArgs} args - Arguments to update many ProjectInvitations.
     * @example
     * // Update many ProjectInvitations
     * const projectInvitation = await prisma.projectInvitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectInvitations and only return the `id`
     * const projectInvitationWithIdOnly = await prisma.projectInvitation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectInvitationUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectInvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectInvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectInvitation.
     * @param {ProjectInvitationUpsertArgs} args - Arguments to update or create a ProjectInvitation.
     * @example
     * // Update or create a ProjectInvitation
     * const projectInvitation = await prisma.projectInvitation.upsert({
     *   create: {
     *     // ... data to create a ProjectInvitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectInvitation we want to update
     *   }
     * })
     */
    upsert<T extends ProjectInvitationUpsertArgs>(args: SelectSubset<T, ProjectInvitationUpsertArgs<ExtArgs>>): Prisma__ProjectInvitationClient<$Result.GetResult<Prisma.$ProjectInvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectInvitationCountArgs} args - Arguments to filter ProjectInvitations to count.
     * @example
     * // Count the number of ProjectInvitations
     * const count = await prisma.projectInvitation.count({
     *   where: {
     *     // ... the filter for the ProjectInvitations we want to count
     *   }
     * })
    **/
    count<T extends ProjectInvitationCountArgs>(
      args?: Subset<T, ProjectInvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectInvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectInvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectInvitationAggregateArgs>(args: Subset<T, ProjectInvitationAggregateArgs>): Prisma.PrismaPromise<GetProjectInvitationAggregateType<T>>

    /**
     * Group by ProjectInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectInvitationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectInvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectInvitationGroupByArgs['orderBy'] }
        : { orderBy?: ProjectInvitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectInvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectInvitation model
   */
  readonly fields: ProjectInvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectInvitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectInvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectsDefaultArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inviter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectInvitation model
   */
  interface ProjectInvitationFieldRefs {
    readonly id: FieldRef<"ProjectInvitation", 'String'>
    readonly email: FieldRef<"ProjectInvitation", 'String'>
    readonly role: FieldRef<"ProjectInvitation", 'Roles'>
    readonly token: FieldRef<"ProjectInvitation", 'String'>
    readonly status: FieldRef<"ProjectInvitation", 'String'>
    readonly expiresAt: FieldRef<"ProjectInvitation", 'DateTime'>
    readonly projectId: FieldRef<"ProjectInvitation", 'String'>
    readonly invitedBy: FieldRef<"ProjectInvitation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectInvitation findUnique
   */
  export type ProjectInvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationInclude<ExtArgs> | null
    /**
     * Filter, which ProjectInvitation to fetch.
     */
    where: ProjectInvitationWhereUniqueInput
  }

  /**
   * ProjectInvitation findUniqueOrThrow
   */
  export type ProjectInvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationInclude<ExtArgs> | null
    /**
     * Filter, which ProjectInvitation to fetch.
     */
    where: ProjectInvitationWhereUniqueInput
  }

  /**
   * ProjectInvitation findFirst
   */
  export type ProjectInvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationInclude<ExtArgs> | null
    /**
     * Filter, which ProjectInvitation to fetch.
     */
    where?: ProjectInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectInvitations to fetch.
     */
    orderBy?: ProjectInvitationOrderByWithRelationInput | ProjectInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectInvitations.
     */
    cursor?: ProjectInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectInvitations.
     */
    distinct?: ProjectInvitationScalarFieldEnum | ProjectInvitationScalarFieldEnum[]
  }

  /**
   * ProjectInvitation findFirstOrThrow
   */
  export type ProjectInvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationInclude<ExtArgs> | null
    /**
     * Filter, which ProjectInvitation to fetch.
     */
    where?: ProjectInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectInvitations to fetch.
     */
    orderBy?: ProjectInvitationOrderByWithRelationInput | ProjectInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectInvitations.
     */
    cursor?: ProjectInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectInvitations.
     */
    distinct?: ProjectInvitationScalarFieldEnum | ProjectInvitationScalarFieldEnum[]
  }

  /**
   * ProjectInvitation findMany
   */
  export type ProjectInvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationInclude<ExtArgs> | null
    /**
     * Filter, which ProjectInvitations to fetch.
     */
    where?: ProjectInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectInvitations to fetch.
     */
    orderBy?: ProjectInvitationOrderByWithRelationInput | ProjectInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectInvitations.
     */
    cursor?: ProjectInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectInvitations.
     */
    distinct?: ProjectInvitationScalarFieldEnum | ProjectInvitationScalarFieldEnum[]
  }

  /**
   * ProjectInvitation create
   */
  export type ProjectInvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectInvitation.
     */
    data: XOR<ProjectInvitationCreateInput, ProjectInvitationUncheckedCreateInput>
  }

  /**
   * ProjectInvitation createMany
   */
  export type ProjectInvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectInvitations.
     */
    data: ProjectInvitationCreateManyInput | ProjectInvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectInvitation createManyAndReturn
   */
  export type ProjectInvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectInvitations.
     */
    data: ProjectInvitationCreateManyInput | ProjectInvitationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectInvitation update
   */
  export type ProjectInvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectInvitation.
     */
    data: XOR<ProjectInvitationUpdateInput, ProjectInvitationUncheckedUpdateInput>
    /**
     * Choose, which ProjectInvitation to update.
     */
    where: ProjectInvitationWhereUniqueInput
  }

  /**
   * ProjectInvitation updateMany
   */
  export type ProjectInvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectInvitations.
     */
    data: XOR<ProjectInvitationUpdateManyMutationInput, ProjectInvitationUncheckedUpdateManyInput>
    /**
     * Filter which ProjectInvitations to update
     */
    where?: ProjectInvitationWhereInput
    /**
     * Limit how many ProjectInvitations to update.
     */
    limit?: number
  }

  /**
   * ProjectInvitation updateManyAndReturn
   */
  export type ProjectInvitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null
    /**
     * The data used to update ProjectInvitations.
     */
    data: XOR<ProjectInvitationUpdateManyMutationInput, ProjectInvitationUncheckedUpdateManyInput>
    /**
     * Filter which ProjectInvitations to update
     */
    where?: ProjectInvitationWhereInput
    /**
     * Limit how many ProjectInvitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectInvitation upsert
   */
  export type ProjectInvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectInvitation to update in case it exists.
     */
    where: ProjectInvitationWhereUniqueInput
    /**
     * In case the ProjectInvitation found by the `where` argument doesn't exist, create a new ProjectInvitation with this data.
     */
    create: XOR<ProjectInvitationCreateInput, ProjectInvitationUncheckedCreateInput>
    /**
     * In case the ProjectInvitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectInvitationUpdateInput, ProjectInvitationUncheckedUpdateInput>
  }

  /**
   * ProjectInvitation delete
   */
  export type ProjectInvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationInclude<ExtArgs> | null
    /**
     * Filter which ProjectInvitation to delete.
     */
    where: ProjectInvitationWhereUniqueInput
  }

  /**
   * ProjectInvitation deleteMany
   */
  export type ProjectInvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectInvitations to delete
     */
    where?: ProjectInvitationWhereInput
    /**
     * Limit how many ProjectInvitations to delete.
     */
    limit?: number
  }

  /**
   * ProjectInvitation without action
   */
  export type ProjectInvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TasksScalarFieldEnum: {
    id: 'id',
    position: 'position',
    title: 'title',
    description: 'description',
    deadline: 'deadline',
    priority: 'priority',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    assigneeId: 'assigneeId',
    isComplete: 'isComplete',
    listId: 'listId',
    projectId: 'projectId'
  };

  export type TasksScalarFieldEnum = (typeof TasksScalarFieldEnum)[keyof typeof TasksScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    taskId: 'taskId',
    authorId: 'authorId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const AttachmentsScalarFieldEnum: {
    id: 'id',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    taskId: 'taskId',
    uploaderId: 'uploaderId'
  };

  export type AttachmentsScalarFieldEnum = (typeof AttachmentsScalarFieldEnum)[keyof typeof AttachmentsScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    creatorId: 'creatorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const ListScalarFieldEnum: {
    id: 'id',
    title: 'title',
    position: 'position',
    color: 'color',
    projectId: 'projectId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ListScalarFieldEnum = (typeof ListScalarFieldEnum)[keyof typeof ListScalarFieldEnum]


  export const ProjectMembersScalarFieldEnum: {
    id: 'id',
    role: 'role',
    projectId: 'projectId',
    userId: 'userId'
  };

  export type ProjectMembersScalarFieldEnum = (typeof ProjectMembersScalarFieldEnum)[keyof typeof ProjectMembersScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    message: 'message',
    type: 'type',
    isRead: 'isRead',
    createdAt: 'createdAt',
    taskId: 'taskId',
    projectId: 'projectId',
    senderId: 'senderId',
    receiverId: 'receiverId'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const PasswordResetTokenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    expires: 'expires',
    isUsed: 'isUsed'
  };

  export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum]


  export const ProjectInvitationScalarFieldEnum: {
    id: 'id',
    email: 'email',
    role: 'role',
    token: 'token',
    status: 'status',
    expiresAt: 'expiresAt',
    projectId: 'projectId',
    invitedBy: 'invitedBy'
  };

  export type ProjectInvitationScalarFieldEnum = (typeof ProjectInvitationScalarFieldEnum)[keyof typeof ProjectInvitationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Roles'
   */
  export type EnumRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Roles'>
    


  /**
   * Reference to a field of type 'Roles[]'
   */
  export type ListEnumRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Roles[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRolesFilter<"User"> | $Enums.Roles
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    assignedTasks?: TasksListRelationFilter
    comments?: CommentListRelationFilter
    attachments?: AttachmentsListRelationFilter
    ownedProjects?: ProjectsListRelationFilter
    sentNotifications?: NotificationListRelationFilter
    receivedNotifications?: NotificationListRelationFilter
    memberof?: ProjectMembersListRelationFilter
    invitations?: ProjectInvitationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignedTasks?: TasksOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    attachments?: AttachmentsOrderByRelationAggregateInput
    ownedProjects?: ProjectsOrderByRelationAggregateInput
    sentNotifications?: NotificationOrderByRelationAggregateInput
    receivedNotifications?: NotificationOrderByRelationAggregateInput
    memberof?: ProjectMembersOrderByRelationAggregateInput
    invitations?: ProjectInvitationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRolesFilter<"User"> | $Enums.Roles
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    assignedTasks?: TasksListRelationFilter
    comments?: CommentListRelationFilter
    attachments?: AttachmentsListRelationFilter
    ownedProjects?: ProjectsListRelationFilter
    sentNotifications?: NotificationListRelationFilter
    receivedNotifications?: NotificationListRelationFilter
    memberof?: ProjectMembersListRelationFilter
    invitations?: ProjectInvitationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRolesWithAggregatesFilter<"User"> | $Enums.Roles
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TasksWhereInput = {
    AND?: TasksWhereInput | TasksWhereInput[]
    OR?: TasksWhereInput[]
    NOT?: TasksWhereInput | TasksWhereInput[]
    id?: StringFilter<"Tasks"> | string
    position?: IntFilter<"Tasks"> | number
    title?: StringFilter<"Tasks"> | string
    description?: StringNullableFilter<"Tasks"> | string | null
    deadline?: DateTimeNullableFilter<"Tasks"> | Date | string | null
    priority?: EnumPriorityFilter<"Tasks"> | $Enums.Priority
    createdAt?: DateTimeFilter<"Tasks"> | Date | string
    updatedAt?: DateTimeFilter<"Tasks"> | Date | string
    assigneeId?: StringNullableFilter<"Tasks"> | string | null
    isComplete?: BoolFilter<"Tasks"> | boolean
    listId?: StringFilter<"Tasks"> | string
    projectId?: StringFilter<"Tasks"> | string
    assignee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    comment?: CommentListRelationFilter
    attachments?: AttachmentsListRelationFilter
    list?: XOR<ListScalarRelationFilter, ListWhereInput>
    project?: XOR<ProjectsScalarRelationFilter, ProjectsWhereInput>
    notifications?: NotificationListRelationFilter
  }

  export type TasksOrderByWithRelationInput = {
    id?: SortOrder
    position?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assigneeId?: SortOrderInput | SortOrder
    isComplete?: SortOrder
    listId?: SortOrder
    projectId?: SortOrder
    assignee?: UserOrderByWithRelationInput
    comment?: CommentOrderByRelationAggregateInput
    attachments?: AttachmentsOrderByRelationAggregateInput
    list?: ListOrderByWithRelationInput
    project?: ProjectsOrderByWithRelationInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type TasksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TasksWhereInput | TasksWhereInput[]
    OR?: TasksWhereInput[]
    NOT?: TasksWhereInput | TasksWhereInput[]
    position?: IntFilter<"Tasks"> | number
    title?: StringFilter<"Tasks"> | string
    description?: StringNullableFilter<"Tasks"> | string | null
    deadline?: DateTimeNullableFilter<"Tasks"> | Date | string | null
    priority?: EnumPriorityFilter<"Tasks"> | $Enums.Priority
    createdAt?: DateTimeFilter<"Tasks"> | Date | string
    updatedAt?: DateTimeFilter<"Tasks"> | Date | string
    assigneeId?: StringNullableFilter<"Tasks"> | string | null
    isComplete?: BoolFilter<"Tasks"> | boolean
    listId?: StringFilter<"Tasks"> | string
    projectId?: StringFilter<"Tasks"> | string
    assignee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    comment?: CommentListRelationFilter
    attachments?: AttachmentsListRelationFilter
    list?: XOR<ListScalarRelationFilter, ListWhereInput>
    project?: XOR<ProjectsScalarRelationFilter, ProjectsWhereInput>
    notifications?: NotificationListRelationFilter
  }, "id">

  export type TasksOrderByWithAggregationInput = {
    id?: SortOrder
    position?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assigneeId?: SortOrderInput | SortOrder
    isComplete?: SortOrder
    listId?: SortOrder
    projectId?: SortOrder
    _count?: TasksCountOrderByAggregateInput
    _avg?: TasksAvgOrderByAggregateInput
    _max?: TasksMaxOrderByAggregateInput
    _min?: TasksMinOrderByAggregateInput
    _sum?: TasksSumOrderByAggregateInput
  }

  export type TasksScalarWhereWithAggregatesInput = {
    AND?: TasksScalarWhereWithAggregatesInput | TasksScalarWhereWithAggregatesInput[]
    OR?: TasksScalarWhereWithAggregatesInput[]
    NOT?: TasksScalarWhereWithAggregatesInput | TasksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tasks"> | string
    position?: IntWithAggregatesFilter<"Tasks"> | number
    title?: StringWithAggregatesFilter<"Tasks"> | string
    description?: StringNullableWithAggregatesFilter<"Tasks"> | string | null
    deadline?: DateTimeNullableWithAggregatesFilter<"Tasks"> | Date | string | null
    priority?: EnumPriorityWithAggregatesFilter<"Tasks"> | $Enums.Priority
    createdAt?: DateTimeWithAggregatesFilter<"Tasks"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tasks"> | Date | string
    assigneeId?: StringNullableWithAggregatesFilter<"Tasks"> | string | null
    isComplete?: BoolWithAggregatesFilter<"Tasks"> | boolean
    listId?: StringWithAggregatesFilter<"Tasks"> | string
    projectId?: StringWithAggregatesFilter<"Tasks"> | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    taskId?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    task?: XOR<TasksScalarRelationFilter, TasksWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    taskId?: SortOrder
    authorId?: SortOrder
    task?: TasksOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    taskId?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    task?: XOR<TasksScalarRelationFilter, TasksWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    taskId?: SortOrder
    authorId?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    taskId?: StringWithAggregatesFilter<"Comment"> | string
    authorId?: StringWithAggregatesFilter<"Comment"> | string
  }

  export type AttachmentsWhereInput = {
    AND?: AttachmentsWhereInput | AttachmentsWhereInput[]
    OR?: AttachmentsWhereInput[]
    NOT?: AttachmentsWhereInput | AttachmentsWhereInput[]
    id?: StringFilter<"Attachments"> | string
    url?: StringFilter<"Attachments"> | string
    createdAt?: DateTimeFilter<"Attachments"> | Date | string
    updatedAt?: DateTimeFilter<"Attachments"> | Date | string
    taskId?: StringFilter<"Attachments"> | string
    uploaderId?: StringFilter<"Attachments"> | string
    task?: XOR<TasksScalarRelationFilter, TasksWhereInput>
    uploadedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AttachmentsOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    taskId?: SortOrder
    uploaderId?: SortOrder
    task?: TasksOrderByWithRelationInput
    uploadedBy?: UserOrderByWithRelationInput
  }

  export type AttachmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttachmentsWhereInput | AttachmentsWhereInput[]
    OR?: AttachmentsWhereInput[]
    NOT?: AttachmentsWhereInput | AttachmentsWhereInput[]
    url?: StringFilter<"Attachments"> | string
    createdAt?: DateTimeFilter<"Attachments"> | Date | string
    updatedAt?: DateTimeFilter<"Attachments"> | Date | string
    taskId?: StringFilter<"Attachments"> | string
    uploaderId?: StringFilter<"Attachments"> | string
    task?: XOR<TasksScalarRelationFilter, TasksWhereInput>
    uploadedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AttachmentsOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    taskId?: SortOrder
    uploaderId?: SortOrder
    _count?: AttachmentsCountOrderByAggregateInput
    _max?: AttachmentsMaxOrderByAggregateInput
    _min?: AttachmentsMinOrderByAggregateInput
  }

  export type AttachmentsScalarWhereWithAggregatesInput = {
    AND?: AttachmentsScalarWhereWithAggregatesInput | AttachmentsScalarWhereWithAggregatesInput[]
    OR?: AttachmentsScalarWhereWithAggregatesInput[]
    NOT?: AttachmentsScalarWhereWithAggregatesInput | AttachmentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attachments"> | string
    url?: StringWithAggregatesFilter<"Attachments"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Attachments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attachments"> | Date | string
    taskId?: StringWithAggregatesFilter<"Attachments"> | string
    uploaderId?: StringWithAggregatesFilter<"Attachments"> | string
  }

  export type ProjectsWhereInput = {
    AND?: ProjectsWhereInput | ProjectsWhereInput[]
    OR?: ProjectsWhereInput[]
    NOT?: ProjectsWhereInput | ProjectsWhereInput[]
    id?: StringFilter<"Projects"> | string
    title?: StringFilter<"Projects"> | string
    creatorId?: StringFilter<"Projects"> | string
    createdAt?: DateTimeFilter<"Projects"> | Date | string
    updatedAt?: DateTimeFilter<"Projects"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    lists?: ListListRelationFilter
    projectmembers?: ProjectMembersListRelationFilter
    tasks?: TasksListRelationFilter
    notifications?: NotificationListRelationFilter
    invitations?: ProjectInvitationListRelationFilter
  }

  export type ProjectsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    lists?: ListOrderByRelationAggregateInput
    projectmembers?: ProjectMembersOrderByRelationAggregateInput
    tasks?: TasksOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    invitations?: ProjectInvitationOrderByRelationAggregateInput
  }

  export type ProjectsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectsWhereInput | ProjectsWhereInput[]
    OR?: ProjectsWhereInput[]
    NOT?: ProjectsWhereInput | ProjectsWhereInput[]
    title?: StringFilter<"Projects"> | string
    creatorId?: StringFilter<"Projects"> | string
    createdAt?: DateTimeFilter<"Projects"> | Date | string
    updatedAt?: DateTimeFilter<"Projects"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    lists?: ListListRelationFilter
    projectmembers?: ProjectMembersListRelationFilter
    tasks?: TasksListRelationFilter
    notifications?: NotificationListRelationFilter
    invitations?: ProjectInvitationListRelationFilter
  }, "id">

  export type ProjectsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectsCountOrderByAggregateInput
    _max?: ProjectsMaxOrderByAggregateInput
    _min?: ProjectsMinOrderByAggregateInput
  }

  export type ProjectsScalarWhereWithAggregatesInput = {
    AND?: ProjectsScalarWhereWithAggregatesInput | ProjectsScalarWhereWithAggregatesInput[]
    OR?: ProjectsScalarWhereWithAggregatesInput[]
    NOT?: ProjectsScalarWhereWithAggregatesInput | ProjectsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Projects"> | string
    title?: StringWithAggregatesFilter<"Projects"> | string
    creatorId?: StringWithAggregatesFilter<"Projects"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Projects"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Projects"> | Date | string
  }

  export type ListWhereInput = {
    AND?: ListWhereInput | ListWhereInput[]
    OR?: ListWhereInput[]
    NOT?: ListWhereInput | ListWhereInput[]
    id?: StringFilter<"List"> | string
    title?: StringFilter<"List"> | string
    position?: IntFilter<"List"> | number
    color?: StringNullableFilter<"List"> | string | null
    projectId?: StringFilter<"List"> | string
    createdAt?: DateTimeFilter<"List"> | Date | string
    updatedAt?: DateTimeFilter<"List"> | Date | string
    project?: XOR<ProjectsScalarRelationFilter, ProjectsWhereInput>
    tasks?: TasksListRelationFilter
  }

  export type ListOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    position?: SortOrder
    color?: SortOrderInput | SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectsOrderByWithRelationInput
    tasks?: TasksOrderByRelationAggregateInput
  }

  export type ListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListWhereInput | ListWhereInput[]
    OR?: ListWhereInput[]
    NOT?: ListWhereInput | ListWhereInput[]
    title?: StringFilter<"List"> | string
    position?: IntFilter<"List"> | number
    color?: StringNullableFilter<"List"> | string | null
    projectId?: StringFilter<"List"> | string
    createdAt?: DateTimeFilter<"List"> | Date | string
    updatedAt?: DateTimeFilter<"List"> | Date | string
    project?: XOR<ProjectsScalarRelationFilter, ProjectsWhereInput>
    tasks?: TasksListRelationFilter
  }, "id">

  export type ListOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    position?: SortOrder
    color?: SortOrderInput | SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ListCountOrderByAggregateInput
    _avg?: ListAvgOrderByAggregateInput
    _max?: ListMaxOrderByAggregateInput
    _min?: ListMinOrderByAggregateInput
    _sum?: ListSumOrderByAggregateInput
  }

  export type ListScalarWhereWithAggregatesInput = {
    AND?: ListScalarWhereWithAggregatesInput | ListScalarWhereWithAggregatesInput[]
    OR?: ListScalarWhereWithAggregatesInput[]
    NOT?: ListScalarWhereWithAggregatesInput | ListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"List"> | string
    title?: StringWithAggregatesFilter<"List"> | string
    position?: IntWithAggregatesFilter<"List"> | number
    color?: StringNullableWithAggregatesFilter<"List"> | string | null
    projectId?: StringWithAggregatesFilter<"List"> | string
    createdAt?: DateTimeWithAggregatesFilter<"List"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"List"> | Date | string
  }

  export type ProjectMembersWhereInput = {
    AND?: ProjectMembersWhereInput | ProjectMembersWhereInput[]
    OR?: ProjectMembersWhereInput[]
    NOT?: ProjectMembersWhereInput | ProjectMembersWhereInput[]
    id?: StringFilter<"ProjectMembers"> | string
    role?: StringFilter<"ProjectMembers"> | string
    projectId?: StringFilter<"ProjectMembers"> | string
    userId?: StringFilter<"ProjectMembers"> | string
    project?: XOR<ProjectsScalarRelationFilter, ProjectsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProjectMembersOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    project?: ProjectsOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ProjectMembersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_userId?: ProjectMembersProjectIdUserIdCompoundUniqueInput
    AND?: ProjectMembersWhereInput | ProjectMembersWhereInput[]
    OR?: ProjectMembersWhereInput[]
    NOT?: ProjectMembersWhereInput | ProjectMembersWhereInput[]
    role?: StringFilter<"ProjectMembers"> | string
    projectId?: StringFilter<"ProjectMembers"> | string
    userId?: StringFilter<"ProjectMembers"> | string
    project?: XOR<ProjectsScalarRelationFilter, ProjectsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "projectId_userId">

  export type ProjectMembersOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    _count?: ProjectMembersCountOrderByAggregateInput
    _max?: ProjectMembersMaxOrderByAggregateInput
    _min?: ProjectMembersMinOrderByAggregateInput
  }

  export type ProjectMembersScalarWhereWithAggregatesInput = {
    AND?: ProjectMembersScalarWhereWithAggregatesInput | ProjectMembersScalarWhereWithAggregatesInput[]
    OR?: ProjectMembersScalarWhereWithAggregatesInput[]
    NOT?: ProjectMembersScalarWhereWithAggregatesInput | ProjectMembersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectMembers"> | string
    role?: StringWithAggregatesFilter<"ProjectMembers"> | string
    projectId?: StringWithAggregatesFilter<"ProjectMembers"> | string
    userId?: StringWithAggregatesFilter<"ProjectMembers"> | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    taskId?: StringFilter<"Notification"> | string
    projectId?: StringFilter<"Notification"> | string
    senderId?: StringFilter<"Notification"> | string
    receiverId?: StringFilter<"Notification"> | string
    task?: XOR<TasksScalarRelationFilter, TasksWhereInput>
    project?: XOR<ProjectsScalarRelationFilter, ProjectsWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    taskId?: SortOrder
    projectId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    task?: TasksOrderByWithRelationInput
    project?: ProjectsOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    taskId?: StringFilter<"Notification"> | string
    projectId?: StringFilter<"Notification"> | string
    senderId?: StringFilter<"Notification"> | string
    receiverId?: StringFilter<"Notification"> | string
    task?: XOR<TasksScalarRelationFilter, TasksWhereInput>
    project?: XOR<ProjectsScalarRelationFilter, ProjectsWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    taskId?: SortOrder
    projectId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    taskId?: StringWithAggregatesFilter<"Notification"> | string
    projectId?: StringWithAggregatesFilter<"Notification"> | string
    senderId?: StringWithAggregatesFilter<"Notification"> | string
    receiverId?: StringWithAggregatesFilter<"Notification"> | string
  }

  export type PasswordResetTokenWhereInput = {
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    id?: StringFilter<"PasswordResetToken"> | string
    email?: StringFilter<"PasswordResetToken"> | string
    token?: StringFilter<"PasswordResetToken"> | string
    expires?: DateTimeFilter<"PasswordResetToken"> | Date | string
    isUsed?: BoolFilter<"PasswordResetToken"> | boolean
  }

  export type PasswordResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    isUsed?: SortOrder
  }

  export type PasswordResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    email_token?: PasswordResetTokenEmailTokenCompoundUniqueInput
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    email?: StringFilter<"PasswordResetToken"> | string
    expires?: DateTimeFilter<"PasswordResetToken"> | Date | string
    isUsed?: BoolFilter<"PasswordResetToken"> | boolean
  }, "id" | "token" | "email_token">

  export type PasswordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    isUsed?: SortOrder
    _count?: PasswordResetTokenCountOrderByAggregateInput
    _max?: PasswordResetTokenMaxOrderByAggregateInput
    _min?: PasswordResetTokenMinOrderByAggregateInput
  }

  export type PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    OR?: PasswordResetTokenScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    email?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    token?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    expires?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
    isUsed?: BoolWithAggregatesFilter<"PasswordResetToken"> | boolean
  }

  export type ProjectInvitationWhereInput = {
    AND?: ProjectInvitationWhereInput | ProjectInvitationWhereInput[]
    OR?: ProjectInvitationWhereInput[]
    NOT?: ProjectInvitationWhereInput | ProjectInvitationWhereInput[]
    id?: StringFilter<"ProjectInvitation"> | string
    email?: StringFilter<"ProjectInvitation"> | string
    role?: EnumRolesFilter<"ProjectInvitation"> | $Enums.Roles
    token?: StringFilter<"ProjectInvitation"> | string
    status?: StringFilter<"ProjectInvitation"> | string
    expiresAt?: DateTimeFilter<"ProjectInvitation"> | Date | string
    projectId?: StringFilter<"ProjectInvitation"> | string
    invitedBy?: StringFilter<"ProjectInvitation"> | string
    project?: XOR<ProjectsScalarRelationFilter, ProjectsWhereInput>
    inviter?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProjectInvitationOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    projectId?: SortOrder
    invitedBy?: SortOrder
    project?: ProjectsOrderByWithRelationInput
    inviter?: UserOrderByWithRelationInput
  }

  export type ProjectInvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: ProjectInvitationWhereInput | ProjectInvitationWhereInput[]
    OR?: ProjectInvitationWhereInput[]
    NOT?: ProjectInvitationWhereInput | ProjectInvitationWhereInput[]
    email?: StringFilter<"ProjectInvitation"> | string
    role?: EnumRolesFilter<"ProjectInvitation"> | $Enums.Roles
    status?: StringFilter<"ProjectInvitation"> | string
    expiresAt?: DateTimeFilter<"ProjectInvitation"> | Date | string
    projectId?: StringFilter<"ProjectInvitation"> | string
    invitedBy?: StringFilter<"ProjectInvitation"> | string
    project?: XOR<ProjectsScalarRelationFilter, ProjectsWhereInput>
    inviter?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type ProjectInvitationOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    projectId?: SortOrder
    invitedBy?: SortOrder
    _count?: ProjectInvitationCountOrderByAggregateInput
    _max?: ProjectInvitationMaxOrderByAggregateInput
    _min?: ProjectInvitationMinOrderByAggregateInput
  }

  export type ProjectInvitationScalarWhereWithAggregatesInput = {
    AND?: ProjectInvitationScalarWhereWithAggregatesInput | ProjectInvitationScalarWhereWithAggregatesInput[]
    OR?: ProjectInvitationScalarWhereWithAggregatesInput[]
    NOT?: ProjectInvitationScalarWhereWithAggregatesInput | ProjectInvitationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectInvitation"> | string
    email?: StringWithAggregatesFilter<"ProjectInvitation"> | string
    role?: EnumRolesWithAggregatesFilter<"ProjectInvitation"> | $Enums.Roles
    token?: StringWithAggregatesFilter<"ProjectInvitation"> | string
    status?: StringWithAggregatesFilter<"ProjectInvitation"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"ProjectInvitation"> | Date | string
    projectId?: StringWithAggregatesFilter<"ProjectInvitation"> | string
    invitedBy?: StringWithAggregatesFilter<"ProjectInvitation"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Roles
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TasksCreateNestedManyWithoutAssigneeInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    attachments?: AttachmentsCreateNestedManyWithoutUploadedByInput
    ownedProjects?: ProjectsCreateNestedManyWithoutCreatedByInput
    sentNotifications?: NotificationCreateNestedManyWithoutSenderInput
    receivedNotifications?: NotificationCreateNestedManyWithoutReceiverInput
    memberof?: ProjectMembersCreateNestedManyWithoutUserInput
    invitations?: ProjectInvitationCreateNestedManyWithoutInviterInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Roles
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TasksUncheckedCreateNestedManyWithoutAssigneeInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    attachments?: AttachmentsUncheckedCreateNestedManyWithoutUploadedByInput
    ownedProjects?: ProjectsUncheckedCreateNestedManyWithoutCreatedByInput
    sentNotifications?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    receivedNotifications?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    memberof?: ProjectMembersUncheckedCreateNestedManyWithoutUserInput
    invitations?: ProjectInvitationUncheckedCreateNestedManyWithoutInviterInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TasksUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    attachments?: AttachmentsUpdateManyWithoutUploadedByNestedInput
    ownedProjects?: ProjectsUpdateManyWithoutCreatedByNestedInput
    sentNotifications?: NotificationUpdateManyWithoutSenderNestedInput
    receivedNotifications?: NotificationUpdateManyWithoutReceiverNestedInput
    memberof?: ProjectMembersUpdateManyWithoutUserNestedInput
    invitations?: ProjectInvitationUpdateManyWithoutInviterNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TasksUncheckedUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    attachments?: AttachmentsUncheckedUpdateManyWithoutUploadedByNestedInput
    ownedProjects?: ProjectsUncheckedUpdateManyWithoutCreatedByNestedInput
    sentNotifications?: NotificationUncheckedUpdateManyWithoutSenderNestedInput
    receivedNotifications?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    memberof?: ProjectMembersUncheckedUpdateManyWithoutUserNestedInput
    invitations?: ProjectInvitationUncheckedUpdateManyWithoutInviterNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Roles
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TasksCreateInput = {
    id?: string
    position?: number
    title: string
    description?: string | null
    deadline?: Date | string | null
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    isComplete?: boolean
    assignee?: UserCreateNestedOneWithoutAssignedTasksInput
    comment?: CommentCreateNestedManyWithoutTaskInput
    attachments?: AttachmentsCreateNestedManyWithoutTaskInput
    list: ListCreateNestedOneWithoutTasksInput
    project: ProjectsCreateNestedOneWithoutTasksInput
    notifications?: NotificationCreateNestedManyWithoutTaskInput
  }

  export type TasksUncheckedCreateInput = {
    id?: string
    position?: number
    title: string
    description?: string | null
    deadline?: Date | string | null
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    assigneeId?: string | null
    isComplete?: boolean
    listId: string
    projectId: string
    comment?: CommentUncheckedCreateNestedManyWithoutTaskInput
    attachments?: AttachmentsUncheckedCreateNestedManyWithoutTaskInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TasksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    assignee?: UserUpdateOneWithoutAssignedTasksNestedInput
    comment?: CommentUpdateManyWithoutTaskNestedInput
    attachments?: AttachmentsUpdateManyWithoutTaskNestedInput
    list?: ListUpdateOneRequiredWithoutTasksNestedInput
    project?: ProjectsUpdateOneRequiredWithoutTasksNestedInput
    notifications?: NotificationUpdateManyWithoutTaskNestedInput
  }

  export type TasksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    listId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    comment?: CommentUncheckedUpdateManyWithoutTaskNestedInput
    attachments?: AttachmentsUncheckedUpdateManyWithoutTaskNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TasksCreateManyInput = {
    id?: string
    position?: number
    title: string
    description?: string | null
    deadline?: Date | string | null
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    assigneeId?: string | null
    isComplete?: boolean
    listId: string
    projectId: string
  }

  export type TasksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isComplete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TasksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    listId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    task: TasksCreateNestedOneWithoutCommentInput
    author: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    taskId: string
    authorId: string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TasksUpdateOneRequiredWithoutCommentNestedInput
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    taskId: string
    authorId: string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type AttachmentsCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    task: TasksCreateNestedOneWithoutAttachmentsInput
    uploadedBy: UserCreateNestedOneWithoutAttachmentsInput
  }

  export type AttachmentsUncheckedCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    taskId: string
    uploaderId: string
  }

  export type AttachmentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TasksUpdateOneRequiredWithoutAttachmentsNestedInput
    uploadedBy?: UserUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type AttachmentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
    uploaderId?: StringFieldUpdateOperationsInput | string
  }

  export type AttachmentsCreateManyInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    taskId: string
    uploaderId: string
  }

  export type AttachmentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
    uploaderId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectsCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutOwnedProjectsInput
    lists?: ListCreateNestedManyWithoutProjectInput
    projectmembers?: ProjectMembersCreateNestedManyWithoutProjectInput
    tasks?: TasksCreateNestedManyWithoutProjectInput
    notifications?: NotificationCreateNestedManyWithoutProjectInput
    invitations?: ProjectInvitationCreateNestedManyWithoutProjectInput
  }

  export type ProjectsUncheckedCreateInput = {
    id?: string
    title: string
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lists?: ListUncheckedCreateNestedManyWithoutProjectInput
    projectmembers?: ProjectMembersUncheckedCreateNestedManyWithoutProjectInput
    tasks?: TasksUncheckedCreateNestedManyWithoutProjectInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutProjectInput
    invitations?: ProjectInvitationUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    lists?: ListUpdateManyWithoutProjectNestedInput
    projectmembers?: ProjectMembersUpdateManyWithoutProjectNestedInput
    tasks?: TasksUpdateManyWithoutProjectNestedInput
    notifications?: NotificationUpdateManyWithoutProjectNestedInput
    invitations?: ProjectInvitationUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ListUncheckedUpdateManyWithoutProjectNestedInput
    projectmembers?: ProjectMembersUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: TasksUncheckedUpdateManyWithoutProjectNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutProjectNestedInput
    invitations?: ProjectInvitationUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsCreateManyInput = {
    id?: string
    title: string
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListCreateInput = {
    id?: string
    title: string
    position: number
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectsCreateNestedOneWithoutListsInput
    tasks?: TasksCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateInput = {
    id?: string
    title: string
    position: number
    color?: string | null
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TasksUncheckedCreateNestedManyWithoutListInput
  }

  export type ListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectsUpdateOneRequiredWithoutListsNestedInput
    tasks?: TasksUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TasksUncheckedUpdateManyWithoutListNestedInput
  }

  export type ListCreateManyInput = {
    id?: string
    title: string
    position: number
    color?: string | null
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMembersCreateInput = {
    id?: string
    role?: string
    project: ProjectsCreateNestedOneWithoutProjectmembersInput
    user: UserCreateNestedOneWithoutMemberofInput
  }

  export type ProjectMembersUncheckedCreateInput = {
    id?: string
    role?: string
    projectId: string
    userId: string
  }

  export type ProjectMembersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    project?: ProjectsUpdateOneRequiredWithoutProjectmembersNestedInput
    user?: UserUpdateOneRequiredWithoutMemberofNestedInput
  }

  export type ProjectMembersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectMembersCreateManyInput = {
    id?: string
    role?: string
    projectId: string
    userId: string
  }

  export type ProjectMembersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectMembersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateInput = {
    id?: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    task: TasksCreateNestedOneWithoutNotificationsInput
    project: ProjectsCreateNestedOneWithoutNotificationsInput
    sender: UserCreateNestedOneWithoutSentNotificationsInput
    receiver: UserCreateNestedOneWithoutReceivedNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    taskId: string
    projectId: string
    senderId: string
    receiverId: string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TasksUpdateOneRequiredWithoutNotificationsNestedInput
    project?: ProjectsUpdateOneRequiredWithoutNotificationsNestedInput
    sender?: UserUpdateOneRequiredWithoutSentNotificationsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    taskId: string
    projectId: string
    senderId: string
    receiverId: string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type PasswordResetTokenCreateInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
    isUsed?: boolean
  }

  export type PasswordResetTokenUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
    isUsed?: boolean
  }

  export type PasswordResetTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetTokenCreateManyInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
    isUsed?: boolean
  }

  export type PasswordResetTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectInvitationCreateInput = {
    id?: string
    email: string
    role?: $Enums.Roles
    token: string
    status?: string
    expiresAt: Date | string
    project: ProjectsCreateNestedOneWithoutInvitationsInput
    inviter: UserCreateNestedOneWithoutInvitationsInput
  }

  export type ProjectInvitationUncheckedCreateInput = {
    id?: string
    email: string
    role?: $Enums.Roles
    token: string
    status?: string
    expiresAt: Date | string
    projectId: string
    invitedBy: string
  }

  export type ProjectInvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectsUpdateOneRequiredWithoutInvitationsNestedInput
    inviter?: UserUpdateOneRequiredWithoutInvitationsNestedInput
  }

  export type ProjectInvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    invitedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectInvitationCreateManyInput = {
    id?: string
    email: string
    role?: $Enums.Roles
    token: string
    status?: string
    expiresAt: Date | string
    projectId: string
    invitedBy: string
  }

  export type ProjectInvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectInvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    invitedBy?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesFilter<$PrismaModel> | $Enums.Roles
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TasksListRelationFilter = {
    every?: TasksWhereInput
    some?: TasksWhereInput
    none?: TasksWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type AttachmentsListRelationFilter = {
    every?: AttachmentsWhereInput
    some?: AttachmentsWhereInput
    none?: AttachmentsWhereInput
  }

  export type ProjectsListRelationFilter = {
    every?: ProjectsWhereInput
    some?: ProjectsWhereInput
    none?: ProjectsWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type ProjectMembersListRelationFilter = {
    every?: ProjectMembersWhereInput
    some?: ProjectMembersWhereInput
    none?: ProjectMembersWhereInput
  }

  export type ProjectInvitationListRelationFilter = {
    every?: ProjectInvitationWhereInput
    some?: ProjectInvitationWhereInput
    none?: ProjectInvitationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttachmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectMembersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectInvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesWithAggregatesFilter<$PrismaModel> | $Enums.Roles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolesFilter<$PrismaModel>
    _max?: NestedEnumRolesFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ListScalarRelationFilter = {
    is?: ListWhereInput
    isNot?: ListWhereInput
  }

  export type ProjectsScalarRelationFilter = {
    is?: ProjectsWhereInput
    isNot?: ProjectsWhereInput
  }

  export type TasksCountOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assigneeId?: SortOrder
    isComplete?: SortOrder
    listId?: SortOrder
    projectId?: SortOrder
  }

  export type TasksAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type TasksMaxOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assigneeId?: SortOrder
    isComplete?: SortOrder
    listId?: SortOrder
    projectId?: SortOrder
  }

  export type TasksMinOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assigneeId?: SortOrder
    isComplete?: SortOrder
    listId?: SortOrder
    projectId?: SortOrder
  }

  export type TasksSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TasksScalarRelationFilter = {
    is?: TasksWhereInput
    isNot?: TasksWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    taskId?: SortOrder
    authorId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    taskId?: SortOrder
    authorId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    taskId?: SortOrder
    authorId?: SortOrder
  }

  export type AttachmentsCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    taskId?: SortOrder
    uploaderId?: SortOrder
  }

  export type AttachmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    taskId?: SortOrder
    uploaderId?: SortOrder
  }

  export type AttachmentsMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    taskId?: SortOrder
    uploaderId?: SortOrder
  }

  export type ListListRelationFilter = {
    every?: ListWhereInput
    some?: ListWhereInput
    none?: ListWhereInput
  }

  export type ListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    position?: SortOrder
    color?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type ListMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    position?: SortOrder
    color?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    position?: SortOrder
    color?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type ProjectMembersProjectIdUserIdCompoundUniqueInput = {
    projectId: string
    userId: string
  }

  export type ProjectMembersCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
  }

  export type ProjectMembersMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
  }

  export type ProjectMembersMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    taskId?: SortOrder
    projectId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    taskId?: SortOrder
    projectId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    taskId?: SortOrder
    projectId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type PasswordResetTokenEmailTokenCompoundUniqueInput = {
    email: string
    token: string
  }

  export type PasswordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    isUsed?: SortOrder
  }

  export type PasswordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    isUsed?: SortOrder
  }

  export type PasswordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    isUsed?: SortOrder
  }

  export type ProjectInvitationCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    projectId?: SortOrder
    invitedBy?: SortOrder
  }

  export type ProjectInvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    projectId?: SortOrder
    invitedBy?: SortOrder
  }

  export type ProjectInvitationMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    projectId?: SortOrder
    invitedBy?: SortOrder
  }

  export type TasksCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<TasksCreateWithoutAssigneeInput, TasksUncheckedCreateWithoutAssigneeInput> | TasksCreateWithoutAssigneeInput[] | TasksUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutAssigneeInput | TasksCreateOrConnectWithoutAssigneeInput[]
    createMany?: TasksCreateManyAssigneeInputEnvelope
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type AttachmentsCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<AttachmentsCreateWithoutUploadedByInput, AttachmentsUncheckedCreateWithoutUploadedByInput> | AttachmentsCreateWithoutUploadedByInput[] | AttachmentsUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: AttachmentsCreateOrConnectWithoutUploadedByInput | AttachmentsCreateOrConnectWithoutUploadedByInput[]
    createMany?: AttachmentsCreateManyUploadedByInputEnvelope
    connect?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
  }

  export type ProjectsCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ProjectsCreateWithoutCreatedByInput, ProjectsUncheckedCreateWithoutCreatedByInput> | ProjectsCreateWithoutCreatedByInput[] | ProjectsUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutCreatedByInput | ProjectsCreateOrConnectWithoutCreatedByInput[]
    createMany?: ProjectsCreateManyCreatedByInputEnvelope
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutSenderInput = {
    create?: XOR<NotificationCreateWithoutSenderInput, NotificationUncheckedCreateWithoutSenderInput> | NotificationCreateWithoutSenderInput[] | NotificationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutSenderInput | NotificationCreateOrConnectWithoutSenderInput[]
    createMany?: NotificationCreateManySenderInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutReceiverInput = {
    create?: XOR<NotificationCreateWithoutReceiverInput, NotificationUncheckedCreateWithoutReceiverInput> | NotificationCreateWithoutReceiverInput[] | NotificationUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutReceiverInput | NotificationCreateOrConnectWithoutReceiverInput[]
    createMany?: NotificationCreateManyReceiverInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ProjectMembersCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectMembersCreateWithoutUserInput, ProjectMembersUncheckedCreateWithoutUserInput> | ProjectMembersCreateWithoutUserInput[] | ProjectMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMembersCreateOrConnectWithoutUserInput | ProjectMembersCreateOrConnectWithoutUserInput[]
    createMany?: ProjectMembersCreateManyUserInputEnvelope
    connect?: ProjectMembersWhereUniqueInput | ProjectMembersWhereUniqueInput[]
  }

  export type ProjectInvitationCreateNestedManyWithoutInviterInput = {
    create?: XOR<ProjectInvitationCreateWithoutInviterInput, ProjectInvitationUncheckedCreateWithoutInviterInput> | ProjectInvitationCreateWithoutInviterInput[] | ProjectInvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: ProjectInvitationCreateOrConnectWithoutInviterInput | ProjectInvitationCreateOrConnectWithoutInviterInput[]
    createMany?: ProjectInvitationCreateManyInviterInputEnvelope
    connect?: ProjectInvitationWhereUniqueInput | ProjectInvitationWhereUniqueInput[]
  }

  export type TasksUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<TasksCreateWithoutAssigneeInput, TasksUncheckedCreateWithoutAssigneeInput> | TasksCreateWithoutAssigneeInput[] | TasksUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutAssigneeInput | TasksCreateOrConnectWithoutAssigneeInput[]
    createMany?: TasksCreateManyAssigneeInputEnvelope
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type AttachmentsUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<AttachmentsCreateWithoutUploadedByInput, AttachmentsUncheckedCreateWithoutUploadedByInput> | AttachmentsCreateWithoutUploadedByInput[] | AttachmentsUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: AttachmentsCreateOrConnectWithoutUploadedByInput | AttachmentsCreateOrConnectWithoutUploadedByInput[]
    createMany?: AttachmentsCreateManyUploadedByInputEnvelope
    connect?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
  }

  export type ProjectsUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ProjectsCreateWithoutCreatedByInput, ProjectsUncheckedCreateWithoutCreatedByInput> | ProjectsCreateWithoutCreatedByInput[] | ProjectsUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutCreatedByInput | ProjectsCreateOrConnectWithoutCreatedByInput[]
    createMany?: ProjectsCreateManyCreatedByInputEnvelope
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<NotificationCreateWithoutSenderInput, NotificationUncheckedCreateWithoutSenderInput> | NotificationCreateWithoutSenderInput[] | NotificationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutSenderInput | NotificationCreateOrConnectWithoutSenderInput[]
    createMany?: NotificationCreateManySenderInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<NotificationCreateWithoutReceiverInput, NotificationUncheckedCreateWithoutReceiverInput> | NotificationCreateWithoutReceiverInput[] | NotificationUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutReceiverInput | NotificationCreateOrConnectWithoutReceiverInput[]
    createMany?: NotificationCreateManyReceiverInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ProjectMembersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectMembersCreateWithoutUserInput, ProjectMembersUncheckedCreateWithoutUserInput> | ProjectMembersCreateWithoutUserInput[] | ProjectMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMembersCreateOrConnectWithoutUserInput | ProjectMembersCreateOrConnectWithoutUserInput[]
    createMany?: ProjectMembersCreateManyUserInputEnvelope
    connect?: ProjectMembersWhereUniqueInput | ProjectMembersWhereUniqueInput[]
  }

  export type ProjectInvitationUncheckedCreateNestedManyWithoutInviterInput = {
    create?: XOR<ProjectInvitationCreateWithoutInviterInput, ProjectInvitationUncheckedCreateWithoutInviterInput> | ProjectInvitationCreateWithoutInviterInput[] | ProjectInvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: ProjectInvitationCreateOrConnectWithoutInviterInput | ProjectInvitationCreateOrConnectWithoutInviterInput[]
    createMany?: ProjectInvitationCreateManyInviterInputEnvelope
    connect?: ProjectInvitationWhereUniqueInput | ProjectInvitationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRolesFieldUpdateOperationsInput = {
    set?: $Enums.Roles
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TasksUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<TasksCreateWithoutAssigneeInput, TasksUncheckedCreateWithoutAssigneeInput> | TasksCreateWithoutAssigneeInput[] | TasksUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutAssigneeInput | TasksCreateOrConnectWithoutAssigneeInput[]
    upsert?: TasksUpsertWithWhereUniqueWithoutAssigneeInput | TasksUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: TasksCreateManyAssigneeInputEnvelope
    set?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    disconnect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    delete?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    update?: TasksUpdateWithWhereUniqueWithoutAssigneeInput | TasksUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: TasksUpdateManyWithWhereWithoutAssigneeInput | TasksUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: TasksScalarWhereInput | TasksScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type AttachmentsUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<AttachmentsCreateWithoutUploadedByInput, AttachmentsUncheckedCreateWithoutUploadedByInput> | AttachmentsCreateWithoutUploadedByInput[] | AttachmentsUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: AttachmentsCreateOrConnectWithoutUploadedByInput | AttachmentsCreateOrConnectWithoutUploadedByInput[]
    upsert?: AttachmentsUpsertWithWhereUniqueWithoutUploadedByInput | AttachmentsUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: AttachmentsCreateManyUploadedByInputEnvelope
    set?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    disconnect?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    delete?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    connect?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    update?: AttachmentsUpdateWithWhereUniqueWithoutUploadedByInput | AttachmentsUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: AttachmentsUpdateManyWithWhereWithoutUploadedByInput | AttachmentsUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: AttachmentsScalarWhereInput | AttachmentsScalarWhereInput[]
  }

  export type ProjectsUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ProjectsCreateWithoutCreatedByInput, ProjectsUncheckedCreateWithoutCreatedByInput> | ProjectsCreateWithoutCreatedByInput[] | ProjectsUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutCreatedByInput | ProjectsCreateOrConnectWithoutCreatedByInput[]
    upsert?: ProjectsUpsertWithWhereUniqueWithoutCreatedByInput | ProjectsUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ProjectsCreateManyCreatedByInputEnvelope
    set?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    disconnect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    delete?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    update?: ProjectsUpdateWithWhereUniqueWithoutCreatedByInput | ProjectsUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ProjectsUpdateManyWithWhereWithoutCreatedByInput | ProjectsUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutSenderNestedInput = {
    create?: XOR<NotificationCreateWithoutSenderInput, NotificationUncheckedCreateWithoutSenderInput> | NotificationCreateWithoutSenderInput[] | NotificationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutSenderInput | NotificationCreateOrConnectWithoutSenderInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutSenderInput | NotificationUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: NotificationCreateManySenderInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutSenderInput | NotificationUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutSenderInput | NotificationUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<NotificationCreateWithoutReceiverInput, NotificationUncheckedCreateWithoutReceiverInput> | NotificationCreateWithoutReceiverInput[] | NotificationUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutReceiverInput | NotificationCreateOrConnectWithoutReceiverInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutReceiverInput | NotificationUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: NotificationCreateManyReceiverInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutReceiverInput | NotificationUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutReceiverInput | NotificationUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ProjectMembersUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectMembersCreateWithoutUserInput, ProjectMembersUncheckedCreateWithoutUserInput> | ProjectMembersCreateWithoutUserInput[] | ProjectMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMembersCreateOrConnectWithoutUserInput | ProjectMembersCreateOrConnectWithoutUserInput[]
    upsert?: ProjectMembersUpsertWithWhereUniqueWithoutUserInput | ProjectMembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectMembersCreateManyUserInputEnvelope
    set?: ProjectMembersWhereUniqueInput | ProjectMembersWhereUniqueInput[]
    disconnect?: ProjectMembersWhereUniqueInput | ProjectMembersWhereUniqueInput[]
    delete?: ProjectMembersWhereUniqueInput | ProjectMembersWhereUniqueInput[]
    connect?: ProjectMembersWhereUniqueInput | ProjectMembersWhereUniqueInput[]
    update?: ProjectMembersUpdateWithWhereUniqueWithoutUserInput | ProjectMembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectMembersUpdateManyWithWhereWithoutUserInput | ProjectMembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectMembersScalarWhereInput | ProjectMembersScalarWhereInput[]
  }

  export type ProjectInvitationUpdateManyWithoutInviterNestedInput = {
    create?: XOR<ProjectInvitationCreateWithoutInviterInput, ProjectInvitationUncheckedCreateWithoutInviterInput> | ProjectInvitationCreateWithoutInviterInput[] | ProjectInvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: ProjectInvitationCreateOrConnectWithoutInviterInput | ProjectInvitationCreateOrConnectWithoutInviterInput[]
    upsert?: ProjectInvitationUpsertWithWhereUniqueWithoutInviterInput | ProjectInvitationUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: ProjectInvitationCreateManyInviterInputEnvelope
    set?: ProjectInvitationWhereUniqueInput | ProjectInvitationWhereUniqueInput[]
    disconnect?: ProjectInvitationWhereUniqueInput | ProjectInvitationWhereUniqueInput[]
    delete?: ProjectInvitationWhereUniqueInput | ProjectInvitationWhereUniqueInput[]
    connect?: ProjectInvitationWhereUniqueInput | ProjectInvitationWhereUniqueInput[]
    update?: ProjectInvitationUpdateWithWhereUniqueWithoutInviterInput | ProjectInvitationUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: ProjectInvitationUpdateManyWithWhereWithoutInviterInput | ProjectInvitationUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: ProjectInvitationScalarWhereInput | ProjectInvitationScalarWhereInput[]
  }

  export type TasksUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<TasksCreateWithoutAssigneeInput, TasksUncheckedCreateWithoutAssigneeInput> | TasksCreateWithoutAssigneeInput[] | TasksUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutAssigneeInput | TasksCreateOrConnectWithoutAssigneeInput[]
    upsert?: TasksUpsertWithWhereUniqueWithoutAssigneeInput | TasksUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: TasksCreateManyAssigneeInputEnvelope
    set?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    disconnect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    delete?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    update?: TasksUpdateWithWhereUniqueWithoutAssigneeInput | TasksUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: TasksUpdateManyWithWhereWithoutAssigneeInput | TasksUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: TasksScalarWhereInput | TasksScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type AttachmentsUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<AttachmentsCreateWithoutUploadedByInput, AttachmentsUncheckedCreateWithoutUploadedByInput> | AttachmentsCreateWithoutUploadedByInput[] | AttachmentsUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: AttachmentsCreateOrConnectWithoutUploadedByInput | AttachmentsCreateOrConnectWithoutUploadedByInput[]
    upsert?: AttachmentsUpsertWithWhereUniqueWithoutUploadedByInput | AttachmentsUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: AttachmentsCreateManyUploadedByInputEnvelope
    set?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    disconnect?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    delete?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    connect?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    update?: AttachmentsUpdateWithWhereUniqueWithoutUploadedByInput | AttachmentsUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: AttachmentsUpdateManyWithWhereWithoutUploadedByInput | AttachmentsUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: AttachmentsScalarWhereInput | AttachmentsScalarWhereInput[]
  }

  export type ProjectsUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ProjectsCreateWithoutCreatedByInput, ProjectsUncheckedCreateWithoutCreatedByInput> | ProjectsCreateWithoutCreatedByInput[] | ProjectsUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutCreatedByInput | ProjectsCreateOrConnectWithoutCreatedByInput[]
    upsert?: ProjectsUpsertWithWhereUniqueWithoutCreatedByInput | ProjectsUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ProjectsCreateManyCreatedByInputEnvelope
    set?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    disconnect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    delete?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    update?: ProjectsUpdateWithWhereUniqueWithoutCreatedByInput | ProjectsUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ProjectsUpdateManyWithWhereWithoutCreatedByInput | ProjectsUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<NotificationCreateWithoutSenderInput, NotificationUncheckedCreateWithoutSenderInput> | NotificationCreateWithoutSenderInput[] | NotificationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutSenderInput | NotificationCreateOrConnectWithoutSenderInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutSenderInput | NotificationUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: NotificationCreateManySenderInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutSenderInput | NotificationUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutSenderInput | NotificationUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<NotificationCreateWithoutReceiverInput, NotificationUncheckedCreateWithoutReceiverInput> | NotificationCreateWithoutReceiverInput[] | NotificationUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutReceiverInput | NotificationCreateOrConnectWithoutReceiverInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutReceiverInput | NotificationUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: NotificationCreateManyReceiverInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutReceiverInput | NotificationUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutReceiverInput | NotificationUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ProjectMembersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectMembersCreateWithoutUserInput, ProjectMembersUncheckedCreateWithoutUserInput> | ProjectMembersCreateWithoutUserInput[] | ProjectMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMembersCreateOrConnectWithoutUserInput | ProjectMembersCreateOrConnectWithoutUserInput[]
    upsert?: ProjectMembersUpsertWithWhereUniqueWithoutUserInput | ProjectMembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectMembersCreateManyUserInputEnvelope
    set?: ProjectMembersWhereUniqueInput | ProjectMembersWhereUniqueInput[]
    disconnect?: ProjectMembersWhereUniqueInput | ProjectMembersWhereUniqueInput[]
    delete?: ProjectMembersWhereUniqueInput | ProjectMembersWhereUniqueInput[]
    connect?: ProjectMembersWhereUniqueInput | ProjectMembersWhereUniqueInput[]
    update?: ProjectMembersUpdateWithWhereUniqueWithoutUserInput | ProjectMembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectMembersUpdateManyWithWhereWithoutUserInput | ProjectMembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectMembersScalarWhereInput | ProjectMembersScalarWhereInput[]
  }

  export type ProjectInvitationUncheckedUpdateManyWithoutInviterNestedInput = {
    create?: XOR<ProjectInvitationCreateWithoutInviterInput, ProjectInvitationUncheckedCreateWithoutInviterInput> | ProjectInvitationCreateWithoutInviterInput[] | ProjectInvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: ProjectInvitationCreateOrConnectWithoutInviterInput | ProjectInvitationCreateOrConnectWithoutInviterInput[]
    upsert?: ProjectInvitationUpsertWithWhereUniqueWithoutInviterInput | ProjectInvitationUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: ProjectInvitationCreateManyInviterInputEnvelope
    set?: ProjectInvitationWhereUniqueInput | ProjectInvitationWhereUniqueInput[]
    disconnect?: ProjectInvitationWhereUniqueInput | ProjectInvitationWhereUniqueInput[]
    delete?: ProjectInvitationWhereUniqueInput | ProjectInvitationWhereUniqueInput[]
    connect?: ProjectInvitationWhereUniqueInput | ProjectInvitationWhereUniqueInput[]
    update?: ProjectInvitationUpdateWithWhereUniqueWithoutInviterInput | ProjectInvitationUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: ProjectInvitationUpdateManyWithWhereWithoutInviterInput | ProjectInvitationUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: ProjectInvitationScalarWhereInput | ProjectInvitationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAssignedTasksInput = {
    create?: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutTaskInput = {
    create?: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput> | CommentCreateWithoutTaskInput[] | CommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTaskInput | CommentCreateOrConnectWithoutTaskInput[]
    createMany?: CommentCreateManyTaskInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type AttachmentsCreateNestedManyWithoutTaskInput = {
    create?: XOR<AttachmentsCreateWithoutTaskInput, AttachmentsUncheckedCreateWithoutTaskInput> | AttachmentsCreateWithoutTaskInput[] | AttachmentsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: AttachmentsCreateOrConnectWithoutTaskInput | AttachmentsCreateOrConnectWithoutTaskInput[]
    createMany?: AttachmentsCreateManyTaskInputEnvelope
    connect?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
  }

  export type ListCreateNestedOneWithoutTasksInput = {
    create?: XOR<ListCreateWithoutTasksInput, ListUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ListCreateOrConnectWithoutTasksInput
    connect?: ListWhereUniqueInput
  }

  export type ProjectsCreateNestedOneWithoutTasksInput = {
    create?: XOR<ProjectsCreateWithoutTasksInput, ProjectsUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutTasksInput
    connect?: ProjectsWhereUniqueInput
  }

  export type NotificationCreateNestedManyWithoutTaskInput = {
    create?: XOR<NotificationCreateWithoutTaskInput, NotificationUncheckedCreateWithoutTaskInput> | NotificationCreateWithoutTaskInput[] | NotificationUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTaskInput | NotificationCreateOrConnectWithoutTaskInput[]
    createMany?: NotificationCreateManyTaskInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput> | CommentCreateWithoutTaskInput[] | CommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTaskInput | CommentCreateOrConnectWithoutTaskInput[]
    createMany?: CommentCreateManyTaskInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type AttachmentsUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<AttachmentsCreateWithoutTaskInput, AttachmentsUncheckedCreateWithoutTaskInput> | AttachmentsCreateWithoutTaskInput[] | AttachmentsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: AttachmentsCreateOrConnectWithoutTaskInput | AttachmentsCreateOrConnectWithoutTaskInput[]
    createMany?: AttachmentsCreateManyTaskInputEnvelope
    connect?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<NotificationCreateWithoutTaskInput, NotificationUncheckedCreateWithoutTaskInput> | NotificationCreateWithoutTaskInput[] | NotificationUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTaskInput | NotificationCreateOrConnectWithoutTaskInput[]
    createMany?: NotificationCreateManyTaskInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutAssignedTasksNestedInput = {
    create?: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput
    upsert?: UserUpsertWithoutAssignedTasksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedTasksInput, UserUpdateWithoutAssignedTasksInput>, UserUncheckedUpdateWithoutAssignedTasksInput>
  }

  export type CommentUpdateManyWithoutTaskNestedInput = {
    create?: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput> | CommentCreateWithoutTaskInput[] | CommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTaskInput | CommentCreateOrConnectWithoutTaskInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTaskInput | CommentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: CommentCreateManyTaskInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTaskInput | CommentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTaskInput | CommentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type AttachmentsUpdateManyWithoutTaskNestedInput = {
    create?: XOR<AttachmentsCreateWithoutTaskInput, AttachmentsUncheckedCreateWithoutTaskInput> | AttachmentsCreateWithoutTaskInput[] | AttachmentsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: AttachmentsCreateOrConnectWithoutTaskInput | AttachmentsCreateOrConnectWithoutTaskInput[]
    upsert?: AttachmentsUpsertWithWhereUniqueWithoutTaskInput | AttachmentsUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: AttachmentsCreateManyTaskInputEnvelope
    set?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    disconnect?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    delete?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    connect?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    update?: AttachmentsUpdateWithWhereUniqueWithoutTaskInput | AttachmentsUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: AttachmentsUpdateManyWithWhereWithoutTaskInput | AttachmentsUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: AttachmentsScalarWhereInput | AttachmentsScalarWhereInput[]
  }

  export type ListUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ListCreateWithoutTasksInput, ListUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ListCreateOrConnectWithoutTasksInput
    upsert?: ListUpsertWithoutTasksInput
    connect?: ListWhereUniqueInput
    update?: XOR<XOR<ListUpdateToOneWithWhereWithoutTasksInput, ListUpdateWithoutTasksInput>, ListUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectsUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ProjectsCreateWithoutTasksInput, ProjectsUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutTasksInput
    upsert?: ProjectsUpsertWithoutTasksInput
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutTasksInput, ProjectsUpdateWithoutTasksInput>, ProjectsUncheckedUpdateWithoutTasksInput>
  }

  export type NotificationUpdateManyWithoutTaskNestedInput = {
    create?: XOR<NotificationCreateWithoutTaskInput, NotificationUncheckedCreateWithoutTaskInput> | NotificationCreateWithoutTaskInput[] | NotificationUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTaskInput | NotificationCreateOrConnectWithoutTaskInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutTaskInput | NotificationUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: NotificationCreateManyTaskInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutTaskInput | NotificationUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutTaskInput | NotificationUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput> | CommentCreateWithoutTaskInput[] | CommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTaskInput | CommentCreateOrConnectWithoutTaskInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTaskInput | CommentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: CommentCreateManyTaskInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTaskInput | CommentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTaskInput | CommentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type AttachmentsUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<AttachmentsCreateWithoutTaskInput, AttachmentsUncheckedCreateWithoutTaskInput> | AttachmentsCreateWithoutTaskInput[] | AttachmentsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: AttachmentsCreateOrConnectWithoutTaskInput | AttachmentsCreateOrConnectWithoutTaskInput[]
    upsert?: AttachmentsUpsertWithWhereUniqueWithoutTaskInput | AttachmentsUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: AttachmentsCreateManyTaskInputEnvelope
    set?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    disconnect?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    delete?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    connect?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    update?: AttachmentsUpdateWithWhereUniqueWithoutTaskInput | AttachmentsUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: AttachmentsUpdateManyWithWhereWithoutTaskInput | AttachmentsUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: AttachmentsScalarWhereInput | AttachmentsScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<NotificationCreateWithoutTaskInput, NotificationUncheckedCreateWithoutTaskInput> | NotificationCreateWithoutTaskInput[] | NotificationUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTaskInput | NotificationCreateOrConnectWithoutTaskInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutTaskInput | NotificationUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: NotificationCreateManyTaskInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutTaskInput | NotificationUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutTaskInput | NotificationUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type TasksCreateNestedOneWithoutCommentInput = {
    create?: XOR<TasksCreateWithoutCommentInput, TasksUncheckedCreateWithoutCommentInput>
    connectOrCreate?: TasksCreateOrConnectWithoutCommentInput
    connect?: TasksWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type TasksUpdateOneRequiredWithoutCommentNestedInput = {
    create?: XOR<TasksCreateWithoutCommentInput, TasksUncheckedCreateWithoutCommentInput>
    connectOrCreate?: TasksCreateOrConnectWithoutCommentInput
    upsert?: TasksUpsertWithoutCommentInput
    connect?: TasksWhereUniqueInput
    update?: XOR<XOR<TasksUpdateToOneWithWhereWithoutCommentInput, TasksUpdateWithoutCommentInput>, TasksUncheckedUpdateWithoutCommentInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type TasksCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<TasksCreateWithoutAttachmentsInput, TasksUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: TasksCreateOrConnectWithoutAttachmentsInput
    connect?: TasksWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<UserCreateWithoutAttachmentsInput, UserUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttachmentsInput
    connect?: UserWhereUniqueInput
  }

  export type TasksUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<TasksCreateWithoutAttachmentsInput, TasksUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: TasksCreateOrConnectWithoutAttachmentsInput
    upsert?: TasksUpsertWithoutAttachmentsInput
    connect?: TasksWhereUniqueInput
    update?: XOR<XOR<TasksUpdateToOneWithWhereWithoutAttachmentsInput, TasksUpdateWithoutAttachmentsInput>, TasksUncheckedUpdateWithoutAttachmentsInput>
  }

  export type UserUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<UserCreateWithoutAttachmentsInput, UserUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttachmentsInput
    upsert?: UserUpsertWithoutAttachmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttachmentsInput, UserUpdateWithoutAttachmentsInput>, UserUncheckedUpdateWithoutAttachmentsInput>
  }

  export type UserCreateNestedOneWithoutOwnedProjectsInput = {
    create?: XOR<UserCreateWithoutOwnedProjectsInput, UserUncheckedCreateWithoutOwnedProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ListCreateNestedManyWithoutProjectInput = {
    create?: XOR<ListCreateWithoutProjectInput, ListUncheckedCreateWithoutProjectInput> | ListCreateWithoutProjectInput[] | ListUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ListCreateOrConnectWithoutProjectInput | ListCreateOrConnectWithoutProjectInput[]
    createMany?: ListCreateManyProjectInputEnvelope
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
  }

  export type ProjectMembersCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectMembersCreateWithoutProjectInput, ProjectMembersUncheckedCreateWithoutProjectInput> | ProjectMembersCreateWithoutProjectInput[] | ProjectMembersUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMembersCreateOrConnectWithoutProjectInput | ProjectMembersCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectMembersCreateManyProjectInputEnvelope
    connect?: ProjectMembersWhereUniqueInput | ProjectMembersWhereUniqueInput[]
  }

  export type TasksCreateNestedManyWithoutProjectInput = {
    create?: XOR<TasksCreateWithoutProjectInput, TasksUncheckedCreateWithoutProjectInput> | TasksCreateWithoutProjectInput[] | TasksUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutProjectInput | TasksCreateOrConnectWithoutProjectInput[]
    createMany?: TasksCreateManyProjectInputEnvelope
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutProjectInput = {
    create?: XOR<NotificationCreateWithoutProjectInput, NotificationUncheckedCreateWithoutProjectInput> | NotificationCreateWithoutProjectInput[] | NotificationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutProjectInput | NotificationCreateOrConnectWithoutProjectInput[]
    createMany?: NotificationCreateManyProjectInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ProjectInvitationCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectInvitationCreateWithoutProjectInput, ProjectInvitationUncheckedCreateWithoutProjectInput> | ProjectInvitationCreateWithoutProjectInput[] | ProjectInvitationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectInvitationCreateOrConnectWithoutProjectInput | ProjectInvitationCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectInvitationCreateManyProjectInputEnvelope
    connect?: ProjectInvitationWhereUniqueInput | ProjectInvitationWhereUniqueInput[]
  }

  export type ListUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ListCreateWithoutProjectInput, ListUncheckedCreateWithoutProjectInput> | ListCreateWithoutProjectInput[] | ListUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ListCreateOrConnectWithoutProjectInput | ListCreateOrConnectWithoutProjectInput[]
    createMany?: ListCreateManyProjectInputEnvelope
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
  }

  export type ProjectMembersUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectMembersCreateWithoutProjectInput, ProjectMembersUncheckedCreateWithoutProjectInput> | ProjectMembersCreateWithoutProjectInput[] | ProjectMembersUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMembersCreateOrConnectWithoutProjectInput | ProjectMembersCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectMembersCreateManyProjectInputEnvelope
    connect?: ProjectMembersWhereUniqueInput | ProjectMembersWhereUniqueInput[]
  }

  export type TasksUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TasksCreateWithoutProjectInput, TasksUncheckedCreateWithoutProjectInput> | TasksCreateWithoutProjectInput[] | TasksUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutProjectInput | TasksCreateOrConnectWithoutProjectInput[]
    createMany?: TasksCreateManyProjectInputEnvelope
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<NotificationCreateWithoutProjectInput, NotificationUncheckedCreateWithoutProjectInput> | NotificationCreateWithoutProjectInput[] | NotificationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutProjectInput | NotificationCreateOrConnectWithoutProjectInput[]
    createMany?: NotificationCreateManyProjectInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ProjectInvitationUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectInvitationCreateWithoutProjectInput, ProjectInvitationUncheckedCreateWithoutProjectInput> | ProjectInvitationCreateWithoutProjectInput[] | ProjectInvitationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectInvitationCreateOrConnectWithoutProjectInput | ProjectInvitationCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectInvitationCreateManyProjectInputEnvelope
    connect?: ProjectInvitationWhereUniqueInput | ProjectInvitationWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOwnedProjectsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedProjectsInput, UserUncheckedCreateWithoutOwnedProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedProjectsInput
    upsert?: UserUpsertWithoutOwnedProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedProjectsInput, UserUpdateWithoutOwnedProjectsInput>, UserUncheckedUpdateWithoutOwnedProjectsInput>
  }

  export type ListUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ListCreateWithoutProjectInput, ListUncheckedCreateWithoutProjectInput> | ListCreateWithoutProjectInput[] | ListUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ListCreateOrConnectWithoutProjectInput | ListCreateOrConnectWithoutProjectInput[]
    upsert?: ListUpsertWithWhereUniqueWithoutProjectInput | ListUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ListCreateManyProjectInputEnvelope
    set?: ListWhereUniqueInput | ListWhereUniqueInput[]
    disconnect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    delete?: ListWhereUniqueInput | ListWhereUniqueInput[]
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    update?: ListUpdateWithWhereUniqueWithoutProjectInput | ListUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ListUpdateManyWithWhereWithoutProjectInput | ListUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ListScalarWhereInput | ListScalarWhereInput[]
  }

  export type ProjectMembersUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectMembersCreateWithoutProjectInput, ProjectMembersUncheckedCreateWithoutProjectInput> | ProjectMembersCreateWithoutProjectInput[] | ProjectMembersUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMembersCreateOrConnectWithoutProjectInput | ProjectMembersCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectMembersUpsertWithWhereUniqueWithoutProjectInput | ProjectMembersUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectMembersCreateManyProjectInputEnvelope
    set?: ProjectMembersWhereUniqueInput | ProjectMembersWhereUniqueInput[]
    disconnect?: ProjectMembersWhereUniqueInput | ProjectMembersWhereUniqueInput[]
    delete?: ProjectMembersWhereUniqueInput | ProjectMembersWhereUniqueInput[]
    connect?: ProjectMembersWhereUniqueInput | ProjectMembersWhereUniqueInput[]
    update?: ProjectMembersUpdateWithWhereUniqueWithoutProjectInput | ProjectMembersUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectMembersUpdateManyWithWhereWithoutProjectInput | ProjectMembersUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectMembersScalarWhereInput | ProjectMembersScalarWhereInput[]
  }

  export type TasksUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TasksCreateWithoutProjectInput, TasksUncheckedCreateWithoutProjectInput> | TasksCreateWithoutProjectInput[] | TasksUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutProjectInput | TasksCreateOrConnectWithoutProjectInput[]
    upsert?: TasksUpsertWithWhereUniqueWithoutProjectInput | TasksUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TasksCreateManyProjectInputEnvelope
    set?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    disconnect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    delete?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    update?: TasksUpdateWithWhereUniqueWithoutProjectInput | TasksUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TasksUpdateManyWithWhereWithoutProjectInput | TasksUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TasksScalarWhereInput | TasksScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutProjectNestedInput = {
    create?: XOR<NotificationCreateWithoutProjectInput, NotificationUncheckedCreateWithoutProjectInput> | NotificationCreateWithoutProjectInput[] | NotificationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutProjectInput | NotificationCreateOrConnectWithoutProjectInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutProjectInput | NotificationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: NotificationCreateManyProjectInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutProjectInput | NotificationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutProjectInput | NotificationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ProjectInvitationUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectInvitationCreateWithoutProjectInput, ProjectInvitationUncheckedCreateWithoutProjectInput> | ProjectInvitationCreateWithoutProjectInput[] | ProjectInvitationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectInvitationCreateOrConnectWithoutProjectInput | ProjectInvitationCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectInvitationUpsertWithWhereUniqueWithoutProjectInput | ProjectInvitationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectInvitationCreateManyProjectInputEnvelope
    set?: ProjectInvitationWhereUniqueInput | ProjectInvitationWhereUniqueInput[]
    disconnect?: ProjectInvitationWhereUniqueInput | ProjectInvitationWhereUniqueInput[]
    delete?: ProjectInvitationWhereUniqueInput | ProjectInvitationWhereUniqueInput[]
    connect?: ProjectInvitationWhereUniqueInput | ProjectInvitationWhereUniqueInput[]
    update?: ProjectInvitationUpdateWithWhereUniqueWithoutProjectInput | ProjectInvitationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectInvitationUpdateManyWithWhereWithoutProjectInput | ProjectInvitationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectInvitationScalarWhereInput | ProjectInvitationScalarWhereInput[]
  }

  export type ListUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ListCreateWithoutProjectInput, ListUncheckedCreateWithoutProjectInput> | ListCreateWithoutProjectInput[] | ListUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ListCreateOrConnectWithoutProjectInput | ListCreateOrConnectWithoutProjectInput[]
    upsert?: ListUpsertWithWhereUniqueWithoutProjectInput | ListUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ListCreateManyProjectInputEnvelope
    set?: ListWhereUniqueInput | ListWhereUniqueInput[]
    disconnect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    delete?: ListWhereUniqueInput | ListWhereUniqueInput[]
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    update?: ListUpdateWithWhereUniqueWithoutProjectInput | ListUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ListUpdateManyWithWhereWithoutProjectInput | ListUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ListScalarWhereInput | ListScalarWhereInput[]
  }

  export type ProjectMembersUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectMembersCreateWithoutProjectInput, ProjectMembersUncheckedCreateWithoutProjectInput> | ProjectMembersCreateWithoutProjectInput[] | ProjectMembersUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMembersCreateOrConnectWithoutProjectInput | ProjectMembersCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectMembersUpsertWithWhereUniqueWithoutProjectInput | ProjectMembersUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectMembersCreateManyProjectInputEnvelope
    set?: ProjectMembersWhereUniqueInput | ProjectMembersWhereUniqueInput[]
    disconnect?: ProjectMembersWhereUniqueInput | ProjectMembersWhereUniqueInput[]
    delete?: ProjectMembersWhereUniqueInput | ProjectMembersWhereUniqueInput[]
    connect?: ProjectMembersWhereUniqueInput | ProjectMembersWhereUniqueInput[]
    update?: ProjectMembersUpdateWithWhereUniqueWithoutProjectInput | ProjectMembersUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectMembersUpdateManyWithWhereWithoutProjectInput | ProjectMembersUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectMembersScalarWhereInput | ProjectMembersScalarWhereInput[]
  }

  export type TasksUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TasksCreateWithoutProjectInput, TasksUncheckedCreateWithoutProjectInput> | TasksCreateWithoutProjectInput[] | TasksUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutProjectInput | TasksCreateOrConnectWithoutProjectInput[]
    upsert?: TasksUpsertWithWhereUniqueWithoutProjectInput | TasksUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TasksCreateManyProjectInputEnvelope
    set?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    disconnect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    delete?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    update?: TasksUpdateWithWhereUniqueWithoutProjectInput | TasksUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TasksUpdateManyWithWhereWithoutProjectInput | TasksUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TasksScalarWhereInput | TasksScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<NotificationCreateWithoutProjectInput, NotificationUncheckedCreateWithoutProjectInput> | NotificationCreateWithoutProjectInput[] | NotificationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutProjectInput | NotificationCreateOrConnectWithoutProjectInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutProjectInput | NotificationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: NotificationCreateManyProjectInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutProjectInput | NotificationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutProjectInput | NotificationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ProjectInvitationUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectInvitationCreateWithoutProjectInput, ProjectInvitationUncheckedCreateWithoutProjectInput> | ProjectInvitationCreateWithoutProjectInput[] | ProjectInvitationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectInvitationCreateOrConnectWithoutProjectInput | ProjectInvitationCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectInvitationUpsertWithWhereUniqueWithoutProjectInput | ProjectInvitationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectInvitationCreateManyProjectInputEnvelope
    set?: ProjectInvitationWhereUniqueInput | ProjectInvitationWhereUniqueInput[]
    disconnect?: ProjectInvitationWhereUniqueInput | ProjectInvitationWhereUniqueInput[]
    delete?: ProjectInvitationWhereUniqueInput | ProjectInvitationWhereUniqueInput[]
    connect?: ProjectInvitationWhereUniqueInput | ProjectInvitationWhereUniqueInput[]
    update?: ProjectInvitationUpdateWithWhereUniqueWithoutProjectInput | ProjectInvitationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectInvitationUpdateManyWithWhereWithoutProjectInput | ProjectInvitationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectInvitationScalarWhereInput | ProjectInvitationScalarWhereInput[]
  }

  export type ProjectsCreateNestedOneWithoutListsInput = {
    create?: XOR<ProjectsCreateWithoutListsInput, ProjectsUncheckedCreateWithoutListsInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutListsInput
    connect?: ProjectsWhereUniqueInput
  }

  export type TasksCreateNestedManyWithoutListInput = {
    create?: XOR<TasksCreateWithoutListInput, TasksUncheckedCreateWithoutListInput> | TasksCreateWithoutListInput[] | TasksUncheckedCreateWithoutListInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutListInput | TasksCreateOrConnectWithoutListInput[]
    createMany?: TasksCreateManyListInputEnvelope
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
  }

  export type TasksUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<TasksCreateWithoutListInput, TasksUncheckedCreateWithoutListInput> | TasksCreateWithoutListInput[] | TasksUncheckedCreateWithoutListInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutListInput | TasksCreateOrConnectWithoutListInput[]
    createMany?: TasksCreateManyListInputEnvelope
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
  }

  export type ProjectsUpdateOneRequiredWithoutListsNestedInput = {
    create?: XOR<ProjectsCreateWithoutListsInput, ProjectsUncheckedCreateWithoutListsInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutListsInput
    upsert?: ProjectsUpsertWithoutListsInput
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutListsInput, ProjectsUpdateWithoutListsInput>, ProjectsUncheckedUpdateWithoutListsInput>
  }

  export type TasksUpdateManyWithoutListNestedInput = {
    create?: XOR<TasksCreateWithoutListInput, TasksUncheckedCreateWithoutListInput> | TasksCreateWithoutListInput[] | TasksUncheckedCreateWithoutListInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutListInput | TasksCreateOrConnectWithoutListInput[]
    upsert?: TasksUpsertWithWhereUniqueWithoutListInput | TasksUpsertWithWhereUniqueWithoutListInput[]
    createMany?: TasksCreateManyListInputEnvelope
    set?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    disconnect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    delete?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    update?: TasksUpdateWithWhereUniqueWithoutListInput | TasksUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: TasksUpdateManyWithWhereWithoutListInput | TasksUpdateManyWithWhereWithoutListInput[]
    deleteMany?: TasksScalarWhereInput | TasksScalarWhereInput[]
  }

  export type TasksUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<TasksCreateWithoutListInput, TasksUncheckedCreateWithoutListInput> | TasksCreateWithoutListInput[] | TasksUncheckedCreateWithoutListInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutListInput | TasksCreateOrConnectWithoutListInput[]
    upsert?: TasksUpsertWithWhereUniqueWithoutListInput | TasksUpsertWithWhereUniqueWithoutListInput[]
    createMany?: TasksCreateManyListInputEnvelope
    set?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    disconnect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    delete?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    update?: TasksUpdateWithWhereUniqueWithoutListInput | TasksUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: TasksUpdateManyWithWhereWithoutListInput | TasksUpdateManyWithWhereWithoutListInput[]
    deleteMany?: TasksScalarWhereInput | TasksScalarWhereInput[]
  }

  export type ProjectsCreateNestedOneWithoutProjectmembersInput = {
    create?: XOR<ProjectsCreateWithoutProjectmembersInput, ProjectsUncheckedCreateWithoutProjectmembersInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutProjectmembersInput
    connect?: ProjectsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMemberofInput = {
    create?: XOR<UserCreateWithoutMemberofInput, UserUncheckedCreateWithoutMemberofInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemberofInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectsUpdateOneRequiredWithoutProjectmembersNestedInput = {
    create?: XOR<ProjectsCreateWithoutProjectmembersInput, ProjectsUncheckedCreateWithoutProjectmembersInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutProjectmembersInput
    upsert?: ProjectsUpsertWithoutProjectmembersInput
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutProjectmembersInput, ProjectsUpdateWithoutProjectmembersInput>, ProjectsUncheckedUpdateWithoutProjectmembersInput>
  }

  export type UserUpdateOneRequiredWithoutMemberofNestedInput = {
    create?: XOR<UserCreateWithoutMemberofInput, UserUncheckedCreateWithoutMemberofInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemberofInput
    upsert?: UserUpsertWithoutMemberofInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMemberofInput, UserUpdateWithoutMemberofInput>, UserUncheckedUpdateWithoutMemberofInput>
  }

  export type TasksCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<TasksCreateWithoutNotificationsInput, TasksUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: TasksCreateOrConnectWithoutNotificationsInput
    connect?: TasksWhereUniqueInput
  }

  export type ProjectsCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<ProjectsCreateWithoutNotificationsInput, ProjectsUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutNotificationsInput
    connect?: ProjectsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSentNotificationsInput = {
    create?: XOR<UserCreateWithoutSentNotificationsInput, UserUncheckedCreateWithoutSentNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedNotificationsInput = {
    create?: XOR<UserCreateWithoutReceivedNotificationsInput, UserUncheckedCreateWithoutReceivedNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type TasksUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<TasksCreateWithoutNotificationsInput, TasksUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: TasksCreateOrConnectWithoutNotificationsInput
    upsert?: TasksUpsertWithoutNotificationsInput
    connect?: TasksWhereUniqueInput
    update?: XOR<XOR<TasksUpdateToOneWithWhereWithoutNotificationsInput, TasksUpdateWithoutNotificationsInput>, TasksUncheckedUpdateWithoutNotificationsInput>
  }

  export type ProjectsUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<ProjectsCreateWithoutNotificationsInput, ProjectsUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutNotificationsInput
    upsert?: ProjectsUpsertWithoutNotificationsInput
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutNotificationsInput, ProjectsUpdateWithoutNotificationsInput>, ProjectsUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateOneRequiredWithoutSentNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutSentNotificationsInput, UserUncheckedCreateWithoutSentNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentNotificationsInput
    upsert?: UserUpsertWithoutSentNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentNotificationsInput, UserUpdateWithoutSentNotificationsInput>, UserUncheckedUpdateWithoutSentNotificationsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedNotificationsInput, UserUncheckedCreateWithoutReceivedNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedNotificationsInput
    upsert?: UserUpsertWithoutReceivedNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedNotificationsInput, UserUpdateWithoutReceivedNotificationsInput>, UserUncheckedUpdateWithoutReceivedNotificationsInput>
  }

  export type ProjectsCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<ProjectsCreateWithoutInvitationsInput, ProjectsUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutInvitationsInput
    connect?: ProjectsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectsUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<ProjectsCreateWithoutInvitationsInput, ProjectsUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutInvitationsInput
    upsert?: ProjectsUpsertWithoutInvitationsInput
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutInvitationsInput, ProjectsUpdateWithoutInvitationsInput>, ProjectsUncheckedUpdateWithoutInvitationsInput>
  }

  export type UserUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsInput
    upsert?: UserUpsertWithoutInvitationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvitationsInput, UserUpdateWithoutInvitationsInput>, UserUncheckedUpdateWithoutInvitationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesFilter<$PrismaModel> | $Enums.Roles
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesWithAggregatesFilter<$PrismaModel> | $Enums.Roles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolesFilter<$PrismaModel>
    _max?: NestedEnumRolesFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TasksCreateWithoutAssigneeInput = {
    id?: string
    position?: number
    title: string
    description?: string | null
    deadline?: Date | string | null
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    isComplete?: boolean
    comment?: CommentCreateNestedManyWithoutTaskInput
    attachments?: AttachmentsCreateNestedManyWithoutTaskInput
    list: ListCreateNestedOneWithoutTasksInput
    project: ProjectsCreateNestedOneWithoutTasksInput
    notifications?: NotificationCreateNestedManyWithoutTaskInput
  }

  export type TasksUncheckedCreateWithoutAssigneeInput = {
    id?: string
    position?: number
    title: string
    description?: string | null
    deadline?: Date | string | null
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    isComplete?: boolean
    listId: string
    projectId: string
    comment?: CommentUncheckedCreateNestedManyWithoutTaskInput
    attachments?: AttachmentsUncheckedCreateNestedManyWithoutTaskInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TasksCreateOrConnectWithoutAssigneeInput = {
    where: TasksWhereUniqueInput
    create: XOR<TasksCreateWithoutAssigneeInput, TasksUncheckedCreateWithoutAssigneeInput>
  }

  export type TasksCreateManyAssigneeInputEnvelope = {
    data: TasksCreateManyAssigneeInput | TasksCreateManyAssigneeInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutAuthorInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    task: TasksCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    taskId: string
  }

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentCreateManyAuthorInputEnvelope = {
    data: CommentCreateManyAuthorInput | CommentCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type AttachmentsCreateWithoutUploadedByInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    task: TasksCreateNestedOneWithoutAttachmentsInput
  }

  export type AttachmentsUncheckedCreateWithoutUploadedByInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    taskId: string
  }

  export type AttachmentsCreateOrConnectWithoutUploadedByInput = {
    where: AttachmentsWhereUniqueInput
    create: XOR<AttachmentsCreateWithoutUploadedByInput, AttachmentsUncheckedCreateWithoutUploadedByInput>
  }

  export type AttachmentsCreateManyUploadedByInputEnvelope = {
    data: AttachmentsCreateManyUploadedByInput | AttachmentsCreateManyUploadedByInput[]
    skipDuplicates?: boolean
  }

  export type ProjectsCreateWithoutCreatedByInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lists?: ListCreateNestedManyWithoutProjectInput
    projectmembers?: ProjectMembersCreateNestedManyWithoutProjectInput
    tasks?: TasksCreateNestedManyWithoutProjectInput
    notifications?: NotificationCreateNestedManyWithoutProjectInput
    invitations?: ProjectInvitationCreateNestedManyWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lists?: ListUncheckedCreateNestedManyWithoutProjectInput
    projectmembers?: ProjectMembersUncheckedCreateNestedManyWithoutProjectInput
    tasks?: TasksUncheckedCreateNestedManyWithoutProjectInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutProjectInput
    invitations?: ProjectInvitationUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutCreatedByInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutCreatedByInput, ProjectsUncheckedCreateWithoutCreatedByInput>
  }

  export type ProjectsCreateManyCreatedByInputEnvelope = {
    data: ProjectsCreateManyCreatedByInput | ProjectsCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutSenderInput = {
    id?: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    task: TasksCreateNestedOneWithoutNotificationsInput
    project: ProjectsCreateNestedOneWithoutNotificationsInput
    receiver: UserCreateNestedOneWithoutReceivedNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutSenderInput = {
    id?: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    taskId: string
    projectId: string
    receiverId: string
  }

  export type NotificationCreateOrConnectWithoutSenderInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutSenderInput, NotificationUncheckedCreateWithoutSenderInput>
  }

  export type NotificationCreateManySenderInputEnvelope = {
    data: NotificationCreateManySenderInput | NotificationCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutReceiverInput = {
    id?: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    task: TasksCreateNestedOneWithoutNotificationsInput
    project: ProjectsCreateNestedOneWithoutNotificationsInput
    sender: UserCreateNestedOneWithoutSentNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutReceiverInput = {
    id?: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    taskId: string
    projectId: string
    senderId: string
  }

  export type NotificationCreateOrConnectWithoutReceiverInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutReceiverInput, NotificationUncheckedCreateWithoutReceiverInput>
  }

  export type NotificationCreateManyReceiverInputEnvelope = {
    data: NotificationCreateManyReceiverInput | NotificationCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type ProjectMembersCreateWithoutUserInput = {
    id?: string
    role?: string
    project: ProjectsCreateNestedOneWithoutProjectmembersInput
  }

  export type ProjectMembersUncheckedCreateWithoutUserInput = {
    id?: string
    role?: string
    projectId: string
  }

  export type ProjectMembersCreateOrConnectWithoutUserInput = {
    where: ProjectMembersWhereUniqueInput
    create: XOR<ProjectMembersCreateWithoutUserInput, ProjectMembersUncheckedCreateWithoutUserInput>
  }

  export type ProjectMembersCreateManyUserInputEnvelope = {
    data: ProjectMembersCreateManyUserInput | ProjectMembersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectInvitationCreateWithoutInviterInput = {
    id?: string
    email: string
    role?: $Enums.Roles
    token: string
    status?: string
    expiresAt: Date | string
    project: ProjectsCreateNestedOneWithoutInvitationsInput
  }

  export type ProjectInvitationUncheckedCreateWithoutInviterInput = {
    id?: string
    email: string
    role?: $Enums.Roles
    token: string
    status?: string
    expiresAt: Date | string
    projectId: string
  }

  export type ProjectInvitationCreateOrConnectWithoutInviterInput = {
    where: ProjectInvitationWhereUniqueInput
    create: XOR<ProjectInvitationCreateWithoutInviterInput, ProjectInvitationUncheckedCreateWithoutInviterInput>
  }

  export type ProjectInvitationCreateManyInviterInputEnvelope = {
    data: ProjectInvitationCreateManyInviterInput | ProjectInvitationCreateManyInviterInput[]
    skipDuplicates?: boolean
  }

  export type TasksUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: TasksWhereUniqueInput
    update: XOR<TasksUpdateWithoutAssigneeInput, TasksUncheckedUpdateWithoutAssigneeInput>
    create: XOR<TasksCreateWithoutAssigneeInput, TasksUncheckedCreateWithoutAssigneeInput>
  }

  export type TasksUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: TasksWhereUniqueInput
    data: XOR<TasksUpdateWithoutAssigneeInput, TasksUncheckedUpdateWithoutAssigneeInput>
  }

  export type TasksUpdateManyWithWhereWithoutAssigneeInput = {
    where: TasksScalarWhereInput
    data: XOR<TasksUpdateManyMutationInput, TasksUncheckedUpdateManyWithoutAssigneeInput>
  }

  export type TasksScalarWhereInput = {
    AND?: TasksScalarWhereInput | TasksScalarWhereInput[]
    OR?: TasksScalarWhereInput[]
    NOT?: TasksScalarWhereInput | TasksScalarWhereInput[]
    id?: StringFilter<"Tasks"> | string
    position?: IntFilter<"Tasks"> | number
    title?: StringFilter<"Tasks"> | string
    description?: StringNullableFilter<"Tasks"> | string | null
    deadline?: DateTimeNullableFilter<"Tasks"> | Date | string | null
    priority?: EnumPriorityFilter<"Tasks"> | $Enums.Priority
    createdAt?: DateTimeFilter<"Tasks"> | Date | string
    updatedAt?: DateTimeFilter<"Tasks"> | Date | string
    assigneeId?: StringNullableFilter<"Tasks"> | string | null
    isComplete?: BoolFilter<"Tasks"> | boolean
    listId?: StringFilter<"Tasks"> | string
    projectId?: StringFilter<"Tasks"> | string
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
  }

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    taskId?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
  }

  export type AttachmentsUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: AttachmentsWhereUniqueInput
    update: XOR<AttachmentsUpdateWithoutUploadedByInput, AttachmentsUncheckedUpdateWithoutUploadedByInput>
    create: XOR<AttachmentsCreateWithoutUploadedByInput, AttachmentsUncheckedCreateWithoutUploadedByInput>
  }

  export type AttachmentsUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: AttachmentsWhereUniqueInput
    data: XOR<AttachmentsUpdateWithoutUploadedByInput, AttachmentsUncheckedUpdateWithoutUploadedByInput>
  }

  export type AttachmentsUpdateManyWithWhereWithoutUploadedByInput = {
    where: AttachmentsScalarWhereInput
    data: XOR<AttachmentsUpdateManyMutationInput, AttachmentsUncheckedUpdateManyWithoutUploadedByInput>
  }

  export type AttachmentsScalarWhereInput = {
    AND?: AttachmentsScalarWhereInput | AttachmentsScalarWhereInput[]
    OR?: AttachmentsScalarWhereInput[]
    NOT?: AttachmentsScalarWhereInput | AttachmentsScalarWhereInput[]
    id?: StringFilter<"Attachments"> | string
    url?: StringFilter<"Attachments"> | string
    createdAt?: DateTimeFilter<"Attachments"> | Date | string
    updatedAt?: DateTimeFilter<"Attachments"> | Date | string
    taskId?: StringFilter<"Attachments"> | string
    uploaderId?: StringFilter<"Attachments"> | string
  }

  export type ProjectsUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ProjectsWhereUniqueInput
    update: XOR<ProjectsUpdateWithoutCreatedByInput, ProjectsUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ProjectsCreateWithoutCreatedByInput, ProjectsUncheckedCreateWithoutCreatedByInput>
  }

  export type ProjectsUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ProjectsWhereUniqueInput
    data: XOR<ProjectsUpdateWithoutCreatedByInput, ProjectsUncheckedUpdateWithoutCreatedByInput>
  }

  export type ProjectsUpdateManyWithWhereWithoutCreatedByInput = {
    where: ProjectsScalarWhereInput
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ProjectsScalarWhereInput = {
    AND?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
    OR?: ProjectsScalarWhereInput[]
    NOT?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
    id?: StringFilter<"Projects"> | string
    title?: StringFilter<"Projects"> | string
    creatorId?: StringFilter<"Projects"> | string
    createdAt?: DateTimeFilter<"Projects"> | Date | string
    updatedAt?: DateTimeFilter<"Projects"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutSenderInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutSenderInput, NotificationUncheckedUpdateWithoutSenderInput>
    create: XOR<NotificationCreateWithoutSenderInput, NotificationUncheckedCreateWithoutSenderInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutSenderInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutSenderInput, NotificationUncheckedUpdateWithoutSenderInput>
  }

  export type NotificationUpdateManyWithWhereWithoutSenderInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutSenderInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    taskId?: StringFilter<"Notification"> | string
    projectId?: StringFilter<"Notification"> | string
    senderId?: StringFilter<"Notification"> | string
    receiverId?: StringFilter<"Notification"> | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutReceiverInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutReceiverInput, NotificationUncheckedUpdateWithoutReceiverInput>
    create: XOR<NotificationCreateWithoutReceiverInput, NotificationUncheckedCreateWithoutReceiverInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutReceiverInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutReceiverInput, NotificationUncheckedUpdateWithoutReceiverInput>
  }

  export type NotificationUpdateManyWithWhereWithoutReceiverInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutReceiverInput>
  }

  export type ProjectMembersUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectMembersWhereUniqueInput
    update: XOR<ProjectMembersUpdateWithoutUserInput, ProjectMembersUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectMembersCreateWithoutUserInput, ProjectMembersUncheckedCreateWithoutUserInput>
  }

  export type ProjectMembersUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectMembersWhereUniqueInput
    data: XOR<ProjectMembersUpdateWithoutUserInput, ProjectMembersUncheckedUpdateWithoutUserInput>
  }

  export type ProjectMembersUpdateManyWithWhereWithoutUserInput = {
    where: ProjectMembersScalarWhereInput
    data: XOR<ProjectMembersUpdateManyMutationInput, ProjectMembersUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectMembersScalarWhereInput = {
    AND?: ProjectMembersScalarWhereInput | ProjectMembersScalarWhereInput[]
    OR?: ProjectMembersScalarWhereInput[]
    NOT?: ProjectMembersScalarWhereInput | ProjectMembersScalarWhereInput[]
    id?: StringFilter<"ProjectMembers"> | string
    role?: StringFilter<"ProjectMembers"> | string
    projectId?: StringFilter<"ProjectMembers"> | string
    userId?: StringFilter<"ProjectMembers"> | string
  }

  export type ProjectInvitationUpsertWithWhereUniqueWithoutInviterInput = {
    where: ProjectInvitationWhereUniqueInput
    update: XOR<ProjectInvitationUpdateWithoutInviterInput, ProjectInvitationUncheckedUpdateWithoutInviterInput>
    create: XOR<ProjectInvitationCreateWithoutInviterInput, ProjectInvitationUncheckedCreateWithoutInviterInput>
  }

  export type ProjectInvitationUpdateWithWhereUniqueWithoutInviterInput = {
    where: ProjectInvitationWhereUniqueInput
    data: XOR<ProjectInvitationUpdateWithoutInviterInput, ProjectInvitationUncheckedUpdateWithoutInviterInput>
  }

  export type ProjectInvitationUpdateManyWithWhereWithoutInviterInput = {
    where: ProjectInvitationScalarWhereInput
    data: XOR<ProjectInvitationUpdateManyMutationInput, ProjectInvitationUncheckedUpdateManyWithoutInviterInput>
  }

  export type ProjectInvitationScalarWhereInput = {
    AND?: ProjectInvitationScalarWhereInput | ProjectInvitationScalarWhereInput[]
    OR?: ProjectInvitationScalarWhereInput[]
    NOT?: ProjectInvitationScalarWhereInput | ProjectInvitationScalarWhereInput[]
    id?: StringFilter<"ProjectInvitation"> | string
    email?: StringFilter<"ProjectInvitation"> | string
    role?: EnumRolesFilter<"ProjectInvitation"> | $Enums.Roles
    token?: StringFilter<"ProjectInvitation"> | string
    status?: StringFilter<"ProjectInvitation"> | string
    expiresAt?: DateTimeFilter<"ProjectInvitation"> | Date | string
    projectId?: StringFilter<"ProjectInvitation"> | string
    invitedBy?: StringFilter<"ProjectInvitation"> | string
  }

  export type UserCreateWithoutAssignedTasksInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Roles
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutAuthorInput
    attachments?: AttachmentsCreateNestedManyWithoutUploadedByInput
    ownedProjects?: ProjectsCreateNestedManyWithoutCreatedByInput
    sentNotifications?: NotificationCreateNestedManyWithoutSenderInput
    receivedNotifications?: NotificationCreateNestedManyWithoutReceiverInput
    memberof?: ProjectMembersCreateNestedManyWithoutUserInput
    invitations?: ProjectInvitationCreateNestedManyWithoutInviterInput
  }

  export type UserUncheckedCreateWithoutAssignedTasksInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Roles
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    attachments?: AttachmentsUncheckedCreateNestedManyWithoutUploadedByInput
    ownedProjects?: ProjectsUncheckedCreateNestedManyWithoutCreatedByInput
    sentNotifications?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    receivedNotifications?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    memberof?: ProjectMembersUncheckedCreateNestedManyWithoutUserInput
    invitations?: ProjectInvitationUncheckedCreateNestedManyWithoutInviterInput
  }

  export type UserCreateOrConnectWithoutAssignedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
  }

  export type CommentCreateWithoutTaskInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutTaskInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
  }

  export type CommentCreateOrConnectWithoutTaskInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput>
  }

  export type CommentCreateManyTaskInputEnvelope = {
    data: CommentCreateManyTaskInput | CommentCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type AttachmentsCreateWithoutTaskInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedBy: UserCreateNestedOneWithoutAttachmentsInput
  }

  export type AttachmentsUncheckedCreateWithoutTaskInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    uploaderId: string
  }

  export type AttachmentsCreateOrConnectWithoutTaskInput = {
    where: AttachmentsWhereUniqueInput
    create: XOR<AttachmentsCreateWithoutTaskInput, AttachmentsUncheckedCreateWithoutTaskInput>
  }

  export type AttachmentsCreateManyTaskInputEnvelope = {
    data: AttachmentsCreateManyTaskInput | AttachmentsCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type ListCreateWithoutTasksInput = {
    id?: string
    title: string
    position: number
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectsCreateNestedOneWithoutListsInput
  }

  export type ListUncheckedCreateWithoutTasksInput = {
    id?: string
    title: string
    position: number
    color?: string | null
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListCreateOrConnectWithoutTasksInput = {
    where: ListWhereUniqueInput
    create: XOR<ListCreateWithoutTasksInput, ListUncheckedCreateWithoutTasksInput>
  }

  export type ProjectsCreateWithoutTasksInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutOwnedProjectsInput
    lists?: ListCreateNestedManyWithoutProjectInput
    projectmembers?: ProjectMembersCreateNestedManyWithoutProjectInput
    notifications?: NotificationCreateNestedManyWithoutProjectInput
    invitations?: ProjectInvitationCreateNestedManyWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutTasksInput = {
    id?: string
    title: string
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lists?: ListUncheckedCreateNestedManyWithoutProjectInput
    projectmembers?: ProjectMembersUncheckedCreateNestedManyWithoutProjectInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutProjectInput
    invitations?: ProjectInvitationUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutTasksInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutTasksInput, ProjectsUncheckedCreateWithoutTasksInput>
  }

  export type NotificationCreateWithoutTaskInput = {
    id?: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    project: ProjectsCreateNestedOneWithoutNotificationsInput
    sender: UserCreateNestedOneWithoutSentNotificationsInput
    receiver: UserCreateNestedOneWithoutReceivedNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutTaskInput = {
    id?: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    projectId: string
    senderId: string
    receiverId: string
  }

  export type NotificationCreateOrConnectWithoutTaskInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutTaskInput, NotificationUncheckedCreateWithoutTaskInput>
  }

  export type NotificationCreateManyTaskInputEnvelope = {
    data: NotificationCreateManyTaskInput | NotificationCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAssignedTasksInput = {
    update: XOR<UserUpdateWithoutAssignedTasksInput, UserUncheckedUpdateWithoutAssignedTasksInput>
    create: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedTasksInput, UserUncheckedUpdateWithoutAssignedTasksInput>
  }

  export type UserUpdateWithoutAssignedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    attachments?: AttachmentsUpdateManyWithoutUploadedByNestedInput
    ownedProjects?: ProjectsUpdateManyWithoutCreatedByNestedInput
    sentNotifications?: NotificationUpdateManyWithoutSenderNestedInput
    receivedNotifications?: NotificationUpdateManyWithoutReceiverNestedInput
    memberof?: ProjectMembersUpdateManyWithoutUserNestedInput
    invitations?: ProjectInvitationUpdateManyWithoutInviterNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    attachments?: AttachmentsUncheckedUpdateManyWithoutUploadedByNestedInput
    ownedProjects?: ProjectsUncheckedUpdateManyWithoutCreatedByNestedInput
    sentNotifications?: NotificationUncheckedUpdateManyWithoutSenderNestedInput
    receivedNotifications?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    memberof?: ProjectMembersUncheckedUpdateManyWithoutUserNestedInput
    invitations?: ProjectInvitationUncheckedUpdateManyWithoutInviterNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutTaskInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutTaskInput, CommentUncheckedUpdateWithoutTaskInput>
    create: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutTaskInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutTaskInput, CommentUncheckedUpdateWithoutTaskInput>
  }

  export type CommentUpdateManyWithWhereWithoutTaskInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutTaskInput>
  }

  export type AttachmentsUpsertWithWhereUniqueWithoutTaskInput = {
    where: AttachmentsWhereUniqueInput
    update: XOR<AttachmentsUpdateWithoutTaskInput, AttachmentsUncheckedUpdateWithoutTaskInput>
    create: XOR<AttachmentsCreateWithoutTaskInput, AttachmentsUncheckedCreateWithoutTaskInput>
  }

  export type AttachmentsUpdateWithWhereUniqueWithoutTaskInput = {
    where: AttachmentsWhereUniqueInput
    data: XOR<AttachmentsUpdateWithoutTaskInput, AttachmentsUncheckedUpdateWithoutTaskInput>
  }

  export type AttachmentsUpdateManyWithWhereWithoutTaskInput = {
    where: AttachmentsScalarWhereInput
    data: XOR<AttachmentsUpdateManyMutationInput, AttachmentsUncheckedUpdateManyWithoutTaskInput>
  }

  export type ListUpsertWithoutTasksInput = {
    update: XOR<ListUpdateWithoutTasksInput, ListUncheckedUpdateWithoutTasksInput>
    create: XOR<ListCreateWithoutTasksInput, ListUncheckedCreateWithoutTasksInput>
    where?: ListWhereInput
  }

  export type ListUpdateToOneWithWhereWithoutTasksInput = {
    where?: ListWhereInput
    data: XOR<ListUpdateWithoutTasksInput, ListUncheckedUpdateWithoutTasksInput>
  }

  export type ListUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectsUpdateOneRequiredWithoutListsNestedInput
  }

  export type ListUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectsUpsertWithoutTasksInput = {
    update: XOR<ProjectsUpdateWithoutTasksInput, ProjectsUncheckedUpdateWithoutTasksInput>
    create: XOR<ProjectsCreateWithoutTasksInput, ProjectsUncheckedCreateWithoutTasksInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutTasksInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutTasksInput, ProjectsUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectsUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    lists?: ListUpdateManyWithoutProjectNestedInput
    projectmembers?: ProjectMembersUpdateManyWithoutProjectNestedInput
    notifications?: NotificationUpdateManyWithoutProjectNestedInput
    invitations?: ProjectInvitationUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ListUncheckedUpdateManyWithoutProjectNestedInput
    projectmembers?: ProjectMembersUncheckedUpdateManyWithoutProjectNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutProjectNestedInput
    invitations?: ProjectInvitationUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type NotificationUpsertWithWhereUniqueWithoutTaskInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutTaskInput, NotificationUncheckedUpdateWithoutTaskInput>
    create: XOR<NotificationCreateWithoutTaskInput, NotificationUncheckedCreateWithoutTaskInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutTaskInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutTaskInput, NotificationUncheckedUpdateWithoutTaskInput>
  }

  export type NotificationUpdateManyWithWhereWithoutTaskInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutTaskInput>
  }

  export type TasksCreateWithoutCommentInput = {
    id?: string
    position?: number
    title: string
    description?: string | null
    deadline?: Date | string | null
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    isComplete?: boolean
    assignee?: UserCreateNestedOneWithoutAssignedTasksInput
    attachments?: AttachmentsCreateNestedManyWithoutTaskInput
    list: ListCreateNestedOneWithoutTasksInput
    project: ProjectsCreateNestedOneWithoutTasksInput
    notifications?: NotificationCreateNestedManyWithoutTaskInput
  }

  export type TasksUncheckedCreateWithoutCommentInput = {
    id?: string
    position?: number
    title: string
    description?: string | null
    deadline?: Date | string | null
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    assigneeId?: string | null
    isComplete?: boolean
    listId: string
    projectId: string
    attachments?: AttachmentsUncheckedCreateNestedManyWithoutTaskInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TasksCreateOrConnectWithoutCommentInput = {
    where: TasksWhereUniqueInput
    create: XOR<TasksCreateWithoutCommentInput, TasksUncheckedCreateWithoutCommentInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Roles
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TasksCreateNestedManyWithoutAssigneeInput
    attachments?: AttachmentsCreateNestedManyWithoutUploadedByInput
    ownedProjects?: ProjectsCreateNestedManyWithoutCreatedByInput
    sentNotifications?: NotificationCreateNestedManyWithoutSenderInput
    receivedNotifications?: NotificationCreateNestedManyWithoutReceiverInput
    memberof?: ProjectMembersCreateNestedManyWithoutUserInput
    invitations?: ProjectInvitationCreateNestedManyWithoutInviterInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Roles
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TasksUncheckedCreateNestedManyWithoutAssigneeInput
    attachments?: AttachmentsUncheckedCreateNestedManyWithoutUploadedByInput
    ownedProjects?: ProjectsUncheckedCreateNestedManyWithoutCreatedByInput
    sentNotifications?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    receivedNotifications?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    memberof?: ProjectMembersUncheckedCreateNestedManyWithoutUserInput
    invitations?: ProjectInvitationUncheckedCreateNestedManyWithoutInviterInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type TasksUpsertWithoutCommentInput = {
    update: XOR<TasksUpdateWithoutCommentInput, TasksUncheckedUpdateWithoutCommentInput>
    create: XOR<TasksCreateWithoutCommentInput, TasksUncheckedCreateWithoutCommentInput>
    where?: TasksWhereInput
  }

  export type TasksUpdateToOneWithWhereWithoutCommentInput = {
    where?: TasksWhereInput
    data: XOR<TasksUpdateWithoutCommentInput, TasksUncheckedUpdateWithoutCommentInput>
  }

  export type TasksUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    assignee?: UserUpdateOneWithoutAssignedTasksNestedInput
    attachments?: AttachmentsUpdateManyWithoutTaskNestedInput
    list?: ListUpdateOneRequiredWithoutTasksNestedInput
    project?: ProjectsUpdateOneRequiredWithoutTasksNestedInput
    notifications?: NotificationUpdateManyWithoutTaskNestedInput
  }

  export type TasksUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    listId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    attachments?: AttachmentsUncheckedUpdateManyWithoutTaskNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TasksUpdateManyWithoutAssigneeNestedInput
    attachments?: AttachmentsUpdateManyWithoutUploadedByNestedInput
    ownedProjects?: ProjectsUpdateManyWithoutCreatedByNestedInput
    sentNotifications?: NotificationUpdateManyWithoutSenderNestedInput
    receivedNotifications?: NotificationUpdateManyWithoutReceiverNestedInput
    memberof?: ProjectMembersUpdateManyWithoutUserNestedInput
    invitations?: ProjectInvitationUpdateManyWithoutInviterNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TasksUncheckedUpdateManyWithoutAssigneeNestedInput
    attachments?: AttachmentsUncheckedUpdateManyWithoutUploadedByNestedInput
    ownedProjects?: ProjectsUncheckedUpdateManyWithoutCreatedByNestedInput
    sentNotifications?: NotificationUncheckedUpdateManyWithoutSenderNestedInput
    receivedNotifications?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    memberof?: ProjectMembersUncheckedUpdateManyWithoutUserNestedInput
    invitations?: ProjectInvitationUncheckedUpdateManyWithoutInviterNestedInput
  }

  export type TasksCreateWithoutAttachmentsInput = {
    id?: string
    position?: number
    title: string
    description?: string | null
    deadline?: Date | string | null
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    isComplete?: boolean
    assignee?: UserCreateNestedOneWithoutAssignedTasksInput
    comment?: CommentCreateNestedManyWithoutTaskInput
    list: ListCreateNestedOneWithoutTasksInput
    project: ProjectsCreateNestedOneWithoutTasksInput
    notifications?: NotificationCreateNestedManyWithoutTaskInput
  }

  export type TasksUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    position?: number
    title: string
    description?: string | null
    deadline?: Date | string | null
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    assigneeId?: string | null
    isComplete?: boolean
    listId: string
    projectId: string
    comment?: CommentUncheckedCreateNestedManyWithoutTaskInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TasksCreateOrConnectWithoutAttachmentsInput = {
    where: TasksWhereUniqueInput
    create: XOR<TasksCreateWithoutAttachmentsInput, TasksUncheckedCreateWithoutAttachmentsInput>
  }

  export type UserCreateWithoutAttachmentsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Roles
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TasksCreateNestedManyWithoutAssigneeInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    ownedProjects?: ProjectsCreateNestedManyWithoutCreatedByInput
    sentNotifications?: NotificationCreateNestedManyWithoutSenderInput
    receivedNotifications?: NotificationCreateNestedManyWithoutReceiverInput
    memberof?: ProjectMembersCreateNestedManyWithoutUserInput
    invitations?: ProjectInvitationCreateNestedManyWithoutInviterInput
  }

  export type UserUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Roles
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TasksUncheckedCreateNestedManyWithoutAssigneeInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    ownedProjects?: ProjectsUncheckedCreateNestedManyWithoutCreatedByInput
    sentNotifications?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    receivedNotifications?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    memberof?: ProjectMembersUncheckedCreateNestedManyWithoutUserInput
    invitations?: ProjectInvitationUncheckedCreateNestedManyWithoutInviterInput
  }

  export type UserCreateOrConnectWithoutAttachmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttachmentsInput, UserUncheckedCreateWithoutAttachmentsInput>
  }

  export type TasksUpsertWithoutAttachmentsInput = {
    update: XOR<TasksUpdateWithoutAttachmentsInput, TasksUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<TasksCreateWithoutAttachmentsInput, TasksUncheckedCreateWithoutAttachmentsInput>
    where?: TasksWhereInput
  }

  export type TasksUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: TasksWhereInput
    data: XOR<TasksUpdateWithoutAttachmentsInput, TasksUncheckedUpdateWithoutAttachmentsInput>
  }

  export type TasksUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    assignee?: UserUpdateOneWithoutAssignedTasksNestedInput
    comment?: CommentUpdateManyWithoutTaskNestedInput
    list?: ListUpdateOneRequiredWithoutTasksNestedInput
    project?: ProjectsUpdateOneRequiredWithoutTasksNestedInput
    notifications?: NotificationUpdateManyWithoutTaskNestedInput
  }

  export type TasksUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    listId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    comment?: CommentUncheckedUpdateManyWithoutTaskNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserUpsertWithoutAttachmentsInput = {
    update: XOR<UserUpdateWithoutAttachmentsInput, UserUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<UserCreateWithoutAttachmentsInput, UserUncheckedCreateWithoutAttachmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttachmentsInput, UserUncheckedUpdateWithoutAttachmentsInput>
  }

  export type UserUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TasksUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    ownedProjects?: ProjectsUpdateManyWithoutCreatedByNestedInput
    sentNotifications?: NotificationUpdateManyWithoutSenderNestedInput
    receivedNotifications?: NotificationUpdateManyWithoutReceiverNestedInput
    memberof?: ProjectMembersUpdateManyWithoutUserNestedInput
    invitations?: ProjectInvitationUpdateManyWithoutInviterNestedInput
  }

  export type UserUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TasksUncheckedUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    ownedProjects?: ProjectsUncheckedUpdateManyWithoutCreatedByNestedInput
    sentNotifications?: NotificationUncheckedUpdateManyWithoutSenderNestedInput
    receivedNotifications?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    memberof?: ProjectMembersUncheckedUpdateManyWithoutUserNestedInput
    invitations?: ProjectInvitationUncheckedUpdateManyWithoutInviterNestedInput
  }

  export type UserCreateWithoutOwnedProjectsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Roles
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TasksCreateNestedManyWithoutAssigneeInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    attachments?: AttachmentsCreateNestedManyWithoutUploadedByInput
    sentNotifications?: NotificationCreateNestedManyWithoutSenderInput
    receivedNotifications?: NotificationCreateNestedManyWithoutReceiverInput
    memberof?: ProjectMembersCreateNestedManyWithoutUserInput
    invitations?: ProjectInvitationCreateNestedManyWithoutInviterInput
  }

  export type UserUncheckedCreateWithoutOwnedProjectsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Roles
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TasksUncheckedCreateNestedManyWithoutAssigneeInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    attachments?: AttachmentsUncheckedCreateNestedManyWithoutUploadedByInput
    sentNotifications?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    receivedNotifications?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    memberof?: ProjectMembersUncheckedCreateNestedManyWithoutUserInput
    invitations?: ProjectInvitationUncheckedCreateNestedManyWithoutInviterInput
  }

  export type UserCreateOrConnectWithoutOwnedProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedProjectsInput, UserUncheckedCreateWithoutOwnedProjectsInput>
  }

  export type ListCreateWithoutProjectInput = {
    id?: string
    title: string
    position: number
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TasksCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateWithoutProjectInput = {
    id?: string
    title: string
    position: number
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TasksUncheckedCreateNestedManyWithoutListInput
  }

  export type ListCreateOrConnectWithoutProjectInput = {
    where: ListWhereUniqueInput
    create: XOR<ListCreateWithoutProjectInput, ListUncheckedCreateWithoutProjectInput>
  }

  export type ListCreateManyProjectInputEnvelope = {
    data: ListCreateManyProjectInput | ListCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectMembersCreateWithoutProjectInput = {
    id?: string
    role?: string
    user: UserCreateNestedOneWithoutMemberofInput
  }

  export type ProjectMembersUncheckedCreateWithoutProjectInput = {
    id?: string
    role?: string
    userId: string
  }

  export type ProjectMembersCreateOrConnectWithoutProjectInput = {
    where: ProjectMembersWhereUniqueInput
    create: XOR<ProjectMembersCreateWithoutProjectInput, ProjectMembersUncheckedCreateWithoutProjectInput>
  }

  export type ProjectMembersCreateManyProjectInputEnvelope = {
    data: ProjectMembersCreateManyProjectInput | ProjectMembersCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type TasksCreateWithoutProjectInput = {
    id?: string
    position?: number
    title: string
    description?: string | null
    deadline?: Date | string | null
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    isComplete?: boolean
    assignee?: UserCreateNestedOneWithoutAssignedTasksInput
    comment?: CommentCreateNestedManyWithoutTaskInput
    attachments?: AttachmentsCreateNestedManyWithoutTaskInput
    list: ListCreateNestedOneWithoutTasksInput
    notifications?: NotificationCreateNestedManyWithoutTaskInput
  }

  export type TasksUncheckedCreateWithoutProjectInput = {
    id?: string
    position?: number
    title: string
    description?: string | null
    deadline?: Date | string | null
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    assigneeId?: string | null
    isComplete?: boolean
    listId: string
    comment?: CommentUncheckedCreateNestedManyWithoutTaskInput
    attachments?: AttachmentsUncheckedCreateNestedManyWithoutTaskInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TasksCreateOrConnectWithoutProjectInput = {
    where: TasksWhereUniqueInput
    create: XOR<TasksCreateWithoutProjectInput, TasksUncheckedCreateWithoutProjectInput>
  }

  export type TasksCreateManyProjectInputEnvelope = {
    data: TasksCreateManyProjectInput | TasksCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutProjectInput = {
    id?: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    task: TasksCreateNestedOneWithoutNotificationsInput
    sender: UserCreateNestedOneWithoutSentNotificationsInput
    receiver: UserCreateNestedOneWithoutReceivedNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutProjectInput = {
    id?: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    taskId: string
    senderId: string
    receiverId: string
  }

  export type NotificationCreateOrConnectWithoutProjectInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutProjectInput, NotificationUncheckedCreateWithoutProjectInput>
  }

  export type NotificationCreateManyProjectInputEnvelope = {
    data: NotificationCreateManyProjectInput | NotificationCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectInvitationCreateWithoutProjectInput = {
    id?: string
    email: string
    role?: $Enums.Roles
    token: string
    status?: string
    expiresAt: Date | string
    inviter: UserCreateNestedOneWithoutInvitationsInput
  }

  export type ProjectInvitationUncheckedCreateWithoutProjectInput = {
    id?: string
    email: string
    role?: $Enums.Roles
    token: string
    status?: string
    expiresAt: Date | string
    invitedBy: string
  }

  export type ProjectInvitationCreateOrConnectWithoutProjectInput = {
    where: ProjectInvitationWhereUniqueInput
    create: XOR<ProjectInvitationCreateWithoutProjectInput, ProjectInvitationUncheckedCreateWithoutProjectInput>
  }

  export type ProjectInvitationCreateManyProjectInputEnvelope = {
    data: ProjectInvitationCreateManyProjectInput | ProjectInvitationCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedProjectsInput = {
    update: XOR<UserUpdateWithoutOwnedProjectsInput, UserUncheckedUpdateWithoutOwnedProjectsInput>
    create: XOR<UserCreateWithoutOwnedProjectsInput, UserUncheckedCreateWithoutOwnedProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedProjectsInput, UserUncheckedUpdateWithoutOwnedProjectsInput>
  }

  export type UserUpdateWithoutOwnedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TasksUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    attachments?: AttachmentsUpdateManyWithoutUploadedByNestedInput
    sentNotifications?: NotificationUpdateManyWithoutSenderNestedInput
    receivedNotifications?: NotificationUpdateManyWithoutReceiverNestedInput
    memberof?: ProjectMembersUpdateManyWithoutUserNestedInput
    invitations?: ProjectInvitationUpdateManyWithoutInviterNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TasksUncheckedUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    attachments?: AttachmentsUncheckedUpdateManyWithoutUploadedByNestedInput
    sentNotifications?: NotificationUncheckedUpdateManyWithoutSenderNestedInput
    receivedNotifications?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    memberof?: ProjectMembersUncheckedUpdateManyWithoutUserNestedInput
    invitations?: ProjectInvitationUncheckedUpdateManyWithoutInviterNestedInput
  }

  export type ListUpsertWithWhereUniqueWithoutProjectInput = {
    where: ListWhereUniqueInput
    update: XOR<ListUpdateWithoutProjectInput, ListUncheckedUpdateWithoutProjectInput>
    create: XOR<ListCreateWithoutProjectInput, ListUncheckedCreateWithoutProjectInput>
  }

  export type ListUpdateWithWhereUniqueWithoutProjectInput = {
    where: ListWhereUniqueInput
    data: XOR<ListUpdateWithoutProjectInput, ListUncheckedUpdateWithoutProjectInput>
  }

  export type ListUpdateManyWithWhereWithoutProjectInput = {
    where: ListScalarWhereInput
    data: XOR<ListUpdateManyMutationInput, ListUncheckedUpdateManyWithoutProjectInput>
  }

  export type ListScalarWhereInput = {
    AND?: ListScalarWhereInput | ListScalarWhereInput[]
    OR?: ListScalarWhereInput[]
    NOT?: ListScalarWhereInput | ListScalarWhereInput[]
    id?: StringFilter<"List"> | string
    title?: StringFilter<"List"> | string
    position?: IntFilter<"List"> | number
    color?: StringNullableFilter<"List"> | string | null
    projectId?: StringFilter<"List"> | string
    createdAt?: DateTimeFilter<"List"> | Date | string
    updatedAt?: DateTimeFilter<"List"> | Date | string
  }

  export type ProjectMembersUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectMembersWhereUniqueInput
    update: XOR<ProjectMembersUpdateWithoutProjectInput, ProjectMembersUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectMembersCreateWithoutProjectInput, ProjectMembersUncheckedCreateWithoutProjectInput>
  }

  export type ProjectMembersUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectMembersWhereUniqueInput
    data: XOR<ProjectMembersUpdateWithoutProjectInput, ProjectMembersUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectMembersUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectMembersScalarWhereInput
    data: XOR<ProjectMembersUpdateManyMutationInput, ProjectMembersUncheckedUpdateManyWithoutProjectInput>
  }

  export type TasksUpsertWithWhereUniqueWithoutProjectInput = {
    where: TasksWhereUniqueInput
    update: XOR<TasksUpdateWithoutProjectInput, TasksUncheckedUpdateWithoutProjectInput>
    create: XOR<TasksCreateWithoutProjectInput, TasksUncheckedCreateWithoutProjectInput>
  }

  export type TasksUpdateWithWhereUniqueWithoutProjectInput = {
    where: TasksWhereUniqueInput
    data: XOR<TasksUpdateWithoutProjectInput, TasksUncheckedUpdateWithoutProjectInput>
  }

  export type TasksUpdateManyWithWhereWithoutProjectInput = {
    where: TasksScalarWhereInput
    data: XOR<TasksUpdateManyMutationInput, TasksUncheckedUpdateManyWithoutProjectInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutProjectInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutProjectInput, NotificationUncheckedUpdateWithoutProjectInput>
    create: XOR<NotificationCreateWithoutProjectInput, NotificationUncheckedCreateWithoutProjectInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutProjectInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutProjectInput, NotificationUncheckedUpdateWithoutProjectInput>
  }

  export type NotificationUpdateManyWithWhereWithoutProjectInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectInvitationUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectInvitationWhereUniqueInput
    update: XOR<ProjectInvitationUpdateWithoutProjectInput, ProjectInvitationUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectInvitationCreateWithoutProjectInput, ProjectInvitationUncheckedCreateWithoutProjectInput>
  }

  export type ProjectInvitationUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectInvitationWhereUniqueInput
    data: XOR<ProjectInvitationUpdateWithoutProjectInput, ProjectInvitationUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectInvitationUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectInvitationScalarWhereInput
    data: XOR<ProjectInvitationUpdateManyMutationInput, ProjectInvitationUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectsCreateWithoutListsInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutOwnedProjectsInput
    projectmembers?: ProjectMembersCreateNestedManyWithoutProjectInput
    tasks?: TasksCreateNestedManyWithoutProjectInput
    notifications?: NotificationCreateNestedManyWithoutProjectInput
    invitations?: ProjectInvitationCreateNestedManyWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutListsInput = {
    id?: string
    title: string
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectmembers?: ProjectMembersUncheckedCreateNestedManyWithoutProjectInput
    tasks?: TasksUncheckedCreateNestedManyWithoutProjectInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutProjectInput
    invitations?: ProjectInvitationUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutListsInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutListsInput, ProjectsUncheckedCreateWithoutListsInput>
  }

  export type TasksCreateWithoutListInput = {
    id?: string
    position?: number
    title: string
    description?: string | null
    deadline?: Date | string | null
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    isComplete?: boolean
    assignee?: UserCreateNestedOneWithoutAssignedTasksInput
    comment?: CommentCreateNestedManyWithoutTaskInput
    attachments?: AttachmentsCreateNestedManyWithoutTaskInput
    project: ProjectsCreateNestedOneWithoutTasksInput
    notifications?: NotificationCreateNestedManyWithoutTaskInput
  }

  export type TasksUncheckedCreateWithoutListInput = {
    id?: string
    position?: number
    title: string
    description?: string | null
    deadline?: Date | string | null
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    assigneeId?: string | null
    isComplete?: boolean
    projectId: string
    comment?: CommentUncheckedCreateNestedManyWithoutTaskInput
    attachments?: AttachmentsUncheckedCreateNestedManyWithoutTaskInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TasksCreateOrConnectWithoutListInput = {
    where: TasksWhereUniqueInput
    create: XOR<TasksCreateWithoutListInput, TasksUncheckedCreateWithoutListInput>
  }

  export type TasksCreateManyListInputEnvelope = {
    data: TasksCreateManyListInput | TasksCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type ProjectsUpsertWithoutListsInput = {
    update: XOR<ProjectsUpdateWithoutListsInput, ProjectsUncheckedUpdateWithoutListsInput>
    create: XOR<ProjectsCreateWithoutListsInput, ProjectsUncheckedCreateWithoutListsInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutListsInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutListsInput, ProjectsUncheckedUpdateWithoutListsInput>
  }

  export type ProjectsUpdateWithoutListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    projectmembers?: ProjectMembersUpdateManyWithoutProjectNestedInput
    tasks?: TasksUpdateManyWithoutProjectNestedInput
    notifications?: NotificationUpdateManyWithoutProjectNestedInput
    invitations?: ProjectInvitationUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectmembers?: ProjectMembersUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: TasksUncheckedUpdateManyWithoutProjectNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutProjectNestedInput
    invitations?: ProjectInvitationUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type TasksUpsertWithWhereUniqueWithoutListInput = {
    where: TasksWhereUniqueInput
    update: XOR<TasksUpdateWithoutListInput, TasksUncheckedUpdateWithoutListInput>
    create: XOR<TasksCreateWithoutListInput, TasksUncheckedCreateWithoutListInput>
  }

  export type TasksUpdateWithWhereUniqueWithoutListInput = {
    where: TasksWhereUniqueInput
    data: XOR<TasksUpdateWithoutListInput, TasksUncheckedUpdateWithoutListInput>
  }

  export type TasksUpdateManyWithWhereWithoutListInput = {
    where: TasksScalarWhereInput
    data: XOR<TasksUpdateManyMutationInput, TasksUncheckedUpdateManyWithoutListInput>
  }

  export type ProjectsCreateWithoutProjectmembersInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutOwnedProjectsInput
    lists?: ListCreateNestedManyWithoutProjectInput
    tasks?: TasksCreateNestedManyWithoutProjectInput
    notifications?: NotificationCreateNestedManyWithoutProjectInput
    invitations?: ProjectInvitationCreateNestedManyWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutProjectmembersInput = {
    id?: string
    title: string
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lists?: ListUncheckedCreateNestedManyWithoutProjectInput
    tasks?: TasksUncheckedCreateNestedManyWithoutProjectInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutProjectInput
    invitations?: ProjectInvitationUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutProjectmembersInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutProjectmembersInput, ProjectsUncheckedCreateWithoutProjectmembersInput>
  }

  export type UserCreateWithoutMemberofInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Roles
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TasksCreateNestedManyWithoutAssigneeInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    attachments?: AttachmentsCreateNestedManyWithoutUploadedByInput
    ownedProjects?: ProjectsCreateNestedManyWithoutCreatedByInput
    sentNotifications?: NotificationCreateNestedManyWithoutSenderInput
    receivedNotifications?: NotificationCreateNestedManyWithoutReceiverInput
    invitations?: ProjectInvitationCreateNestedManyWithoutInviterInput
  }

  export type UserUncheckedCreateWithoutMemberofInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Roles
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TasksUncheckedCreateNestedManyWithoutAssigneeInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    attachments?: AttachmentsUncheckedCreateNestedManyWithoutUploadedByInput
    ownedProjects?: ProjectsUncheckedCreateNestedManyWithoutCreatedByInput
    sentNotifications?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    receivedNotifications?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    invitations?: ProjectInvitationUncheckedCreateNestedManyWithoutInviterInput
  }

  export type UserCreateOrConnectWithoutMemberofInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMemberofInput, UserUncheckedCreateWithoutMemberofInput>
  }

  export type ProjectsUpsertWithoutProjectmembersInput = {
    update: XOR<ProjectsUpdateWithoutProjectmembersInput, ProjectsUncheckedUpdateWithoutProjectmembersInput>
    create: XOR<ProjectsCreateWithoutProjectmembersInput, ProjectsUncheckedCreateWithoutProjectmembersInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutProjectmembersInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutProjectmembersInput, ProjectsUncheckedUpdateWithoutProjectmembersInput>
  }

  export type ProjectsUpdateWithoutProjectmembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    lists?: ListUpdateManyWithoutProjectNestedInput
    tasks?: TasksUpdateManyWithoutProjectNestedInput
    notifications?: NotificationUpdateManyWithoutProjectNestedInput
    invitations?: ProjectInvitationUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutProjectmembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ListUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: TasksUncheckedUpdateManyWithoutProjectNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutProjectNestedInput
    invitations?: ProjectInvitationUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutMemberofInput = {
    update: XOR<UserUpdateWithoutMemberofInput, UserUncheckedUpdateWithoutMemberofInput>
    create: XOR<UserCreateWithoutMemberofInput, UserUncheckedCreateWithoutMemberofInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMemberofInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMemberofInput, UserUncheckedUpdateWithoutMemberofInput>
  }

  export type UserUpdateWithoutMemberofInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TasksUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    attachments?: AttachmentsUpdateManyWithoutUploadedByNestedInput
    ownedProjects?: ProjectsUpdateManyWithoutCreatedByNestedInput
    sentNotifications?: NotificationUpdateManyWithoutSenderNestedInput
    receivedNotifications?: NotificationUpdateManyWithoutReceiverNestedInput
    invitations?: ProjectInvitationUpdateManyWithoutInviterNestedInput
  }

  export type UserUncheckedUpdateWithoutMemberofInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TasksUncheckedUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    attachments?: AttachmentsUncheckedUpdateManyWithoutUploadedByNestedInput
    ownedProjects?: ProjectsUncheckedUpdateManyWithoutCreatedByNestedInput
    sentNotifications?: NotificationUncheckedUpdateManyWithoutSenderNestedInput
    receivedNotifications?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    invitations?: ProjectInvitationUncheckedUpdateManyWithoutInviterNestedInput
  }

  export type TasksCreateWithoutNotificationsInput = {
    id?: string
    position?: number
    title: string
    description?: string | null
    deadline?: Date | string | null
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    isComplete?: boolean
    assignee?: UserCreateNestedOneWithoutAssignedTasksInput
    comment?: CommentCreateNestedManyWithoutTaskInput
    attachments?: AttachmentsCreateNestedManyWithoutTaskInput
    list: ListCreateNestedOneWithoutTasksInput
    project: ProjectsCreateNestedOneWithoutTasksInput
  }

  export type TasksUncheckedCreateWithoutNotificationsInput = {
    id?: string
    position?: number
    title: string
    description?: string | null
    deadline?: Date | string | null
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    assigneeId?: string | null
    isComplete?: boolean
    listId: string
    projectId: string
    comment?: CommentUncheckedCreateNestedManyWithoutTaskInput
    attachments?: AttachmentsUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TasksCreateOrConnectWithoutNotificationsInput = {
    where: TasksWhereUniqueInput
    create: XOR<TasksCreateWithoutNotificationsInput, TasksUncheckedCreateWithoutNotificationsInput>
  }

  export type ProjectsCreateWithoutNotificationsInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutOwnedProjectsInput
    lists?: ListCreateNestedManyWithoutProjectInput
    projectmembers?: ProjectMembersCreateNestedManyWithoutProjectInput
    tasks?: TasksCreateNestedManyWithoutProjectInput
    invitations?: ProjectInvitationCreateNestedManyWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutNotificationsInput = {
    id?: string
    title: string
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lists?: ListUncheckedCreateNestedManyWithoutProjectInput
    projectmembers?: ProjectMembersUncheckedCreateNestedManyWithoutProjectInput
    tasks?: TasksUncheckedCreateNestedManyWithoutProjectInput
    invitations?: ProjectInvitationUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutNotificationsInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutNotificationsInput, ProjectsUncheckedCreateWithoutNotificationsInput>
  }

  export type UserCreateWithoutSentNotificationsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Roles
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TasksCreateNestedManyWithoutAssigneeInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    attachments?: AttachmentsCreateNestedManyWithoutUploadedByInput
    ownedProjects?: ProjectsCreateNestedManyWithoutCreatedByInput
    receivedNotifications?: NotificationCreateNestedManyWithoutReceiverInput
    memberof?: ProjectMembersCreateNestedManyWithoutUserInput
    invitations?: ProjectInvitationCreateNestedManyWithoutInviterInput
  }

  export type UserUncheckedCreateWithoutSentNotificationsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Roles
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TasksUncheckedCreateNestedManyWithoutAssigneeInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    attachments?: AttachmentsUncheckedCreateNestedManyWithoutUploadedByInput
    ownedProjects?: ProjectsUncheckedCreateNestedManyWithoutCreatedByInput
    receivedNotifications?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    memberof?: ProjectMembersUncheckedCreateNestedManyWithoutUserInput
    invitations?: ProjectInvitationUncheckedCreateNestedManyWithoutInviterInput
  }

  export type UserCreateOrConnectWithoutSentNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentNotificationsInput, UserUncheckedCreateWithoutSentNotificationsInput>
  }

  export type UserCreateWithoutReceivedNotificationsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Roles
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TasksCreateNestedManyWithoutAssigneeInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    attachments?: AttachmentsCreateNestedManyWithoutUploadedByInput
    ownedProjects?: ProjectsCreateNestedManyWithoutCreatedByInput
    sentNotifications?: NotificationCreateNestedManyWithoutSenderInput
    memberof?: ProjectMembersCreateNestedManyWithoutUserInput
    invitations?: ProjectInvitationCreateNestedManyWithoutInviterInput
  }

  export type UserUncheckedCreateWithoutReceivedNotificationsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Roles
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TasksUncheckedCreateNestedManyWithoutAssigneeInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    attachments?: AttachmentsUncheckedCreateNestedManyWithoutUploadedByInput
    ownedProjects?: ProjectsUncheckedCreateNestedManyWithoutCreatedByInput
    sentNotifications?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    memberof?: ProjectMembersUncheckedCreateNestedManyWithoutUserInput
    invitations?: ProjectInvitationUncheckedCreateNestedManyWithoutInviterInput
  }

  export type UserCreateOrConnectWithoutReceivedNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedNotificationsInput, UserUncheckedCreateWithoutReceivedNotificationsInput>
  }

  export type TasksUpsertWithoutNotificationsInput = {
    update: XOR<TasksUpdateWithoutNotificationsInput, TasksUncheckedUpdateWithoutNotificationsInput>
    create: XOR<TasksCreateWithoutNotificationsInput, TasksUncheckedCreateWithoutNotificationsInput>
    where?: TasksWhereInput
  }

  export type TasksUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: TasksWhereInput
    data: XOR<TasksUpdateWithoutNotificationsInput, TasksUncheckedUpdateWithoutNotificationsInput>
  }

  export type TasksUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    assignee?: UserUpdateOneWithoutAssignedTasksNestedInput
    comment?: CommentUpdateManyWithoutTaskNestedInput
    attachments?: AttachmentsUpdateManyWithoutTaskNestedInput
    list?: ListUpdateOneRequiredWithoutTasksNestedInput
    project?: ProjectsUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TasksUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    listId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    comment?: CommentUncheckedUpdateManyWithoutTaskNestedInput
    attachments?: AttachmentsUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type ProjectsUpsertWithoutNotificationsInput = {
    update: XOR<ProjectsUpdateWithoutNotificationsInput, ProjectsUncheckedUpdateWithoutNotificationsInput>
    create: XOR<ProjectsCreateWithoutNotificationsInput, ProjectsUncheckedCreateWithoutNotificationsInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutNotificationsInput, ProjectsUncheckedUpdateWithoutNotificationsInput>
  }

  export type ProjectsUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    lists?: ListUpdateManyWithoutProjectNestedInput
    projectmembers?: ProjectMembersUpdateManyWithoutProjectNestedInput
    tasks?: TasksUpdateManyWithoutProjectNestedInput
    invitations?: ProjectInvitationUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ListUncheckedUpdateManyWithoutProjectNestedInput
    projectmembers?: ProjectMembersUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: TasksUncheckedUpdateManyWithoutProjectNestedInput
    invitations?: ProjectInvitationUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutSentNotificationsInput = {
    update: XOR<UserUpdateWithoutSentNotificationsInput, UserUncheckedUpdateWithoutSentNotificationsInput>
    create: XOR<UserCreateWithoutSentNotificationsInput, UserUncheckedCreateWithoutSentNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentNotificationsInput, UserUncheckedUpdateWithoutSentNotificationsInput>
  }

  export type UserUpdateWithoutSentNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TasksUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    attachments?: AttachmentsUpdateManyWithoutUploadedByNestedInput
    ownedProjects?: ProjectsUpdateManyWithoutCreatedByNestedInput
    receivedNotifications?: NotificationUpdateManyWithoutReceiverNestedInput
    memberof?: ProjectMembersUpdateManyWithoutUserNestedInput
    invitations?: ProjectInvitationUpdateManyWithoutInviterNestedInput
  }

  export type UserUncheckedUpdateWithoutSentNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TasksUncheckedUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    attachments?: AttachmentsUncheckedUpdateManyWithoutUploadedByNestedInput
    ownedProjects?: ProjectsUncheckedUpdateManyWithoutCreatedByNestedInput
    receivedNotifications?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    memberof?: ProjectMembersUncheckedUpdateManyWithoutUserNestedInput
    invitations?: ProjectInvitationUncheckedUpdateManyWithoutInviterNestedInput
  }

  export type UserUpsertWithoutReceivedNotificationsInput = {
    update: XOR<UserUpdateWithoutReceivedNotificationsInput, UserUncheckedUpdateWithoutReceivedNotificationsInput>
    create: XOR<UserCreateWithoutReceivedNotificationsInput, UserUncheckedCreateWithoutReceivedNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedNotificationsInput, UserUncheckedUpdateWithoutReceivedNotificationsInput>
  }

  export type UserUpdateWithoutReceivedNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TasksUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    attachments?: AttachmentsUpdateManyWithoutUploadedByNestedInput
    ownedProjects?: ProjectsUpdateManyWithoutCreatedByNestedInput
    sentNotifications?: NotificationUpdateManyWithoutSenderNestedInput
    memberof?: ProjectMembersUpdateManyWithoutUserNestedInput
    invitations?: ProjectInvitationUpdateManyWithoutInviterNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TasksUncheckedUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    attachments?: AttachmentsUncheckedUpdateManyWithoutUploadedByNestedInput
    ownedProjects?: ProjectsUncheckedUpdateManyWithoutCreatedByNestedInput
    sentNotifications?: NotificationUncheckedUpdateManyWithoutSenderNestedInput
    memberof?: ProjectMembersUncheckedUpdateManyWithoutUserNestedInput
    invitations?: ProjectInvitationUncheckedUpdateManyWithoutInviterNestedInput
  }

  export type ProjectsCreateWithoutInvitationsInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutOwnedProjectsInput
    lists?: ListCreateNestedManyWithoutProjectInput
    projectmembers?: ProjectMembersCreateNestedManyWithoutProjectInput
    tasks?: TasksCreateNestedManyWithoutProjectInput
    notifications?: NotificationCreateNestedManyWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutInvitationsInput = {
    id?: string
    title: string
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lists?: ListUncheckedCreateNestedManyWithoutProjectInput
    projectmembers?: ProjectMembersUncheckedCreateNestedManyWithoutProjectInput
    tasks?: TasksUncheckedCreateNestedManyWithoutProjectInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutInvitationsInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutInvitationsInput, ProjectsUncheckedCreateWithoutInvitationsInput>
  }

  export type UserCreateWithoutInvitationsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Roles
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TasksCreateNestedManyWithoutAssigneeInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    attachments?: AttachmentsCreateNestedManyWithoutUploadedByInput
    ownedProjects?: ProjectsCreateNestedManyWithoutCreatedByInput
    sentNotifications?: NotificationCreateNestedManyWithoutSenderInput
    receivedNotifications?: NotificationCreateNestedManyWithoutReceiverInput
    memberof?: ProjectMembersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvitationsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Roles
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TasksUncheckedCreateNestedManyWithoutAssigneeInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    attachments?: AttachmentsUncheckedCreateNestedManyWithoutUploadedByInput
    ownedProjects?: ProjectsUncheckedCreateNestedManyWithoutCreatedByInput
    sentNotifications?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    receivedNotifications?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    memberof?: ProjectMembersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvitationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
  }

  export type ProjectsUpsertWithoutInvitationsInput = {
    update: XOR<ProjectsUpdateWithoutInvitationsInput, ProjectsUncheckedUpdateWithoutInvitationsInput>
    create: XOR<ProjectsCreateWithoutInvitationsInput, ProjectsUncheckedCreateWithoutInvitationsInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutInvitationsInput, ProjectsUncheckedUpdateWithoutInvitationsInput>
  }

  export type ProjectsUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    lists?: ListUpdateManyWithoutProjectNestedInput
    projectmembers?: ProjectMembersUpdateManyWithoutProjectNestedInput
    tasks?: TasksUpdateManyWithoutProjectNestedInput
    notifications?: NotificationUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ListUncheckedUpdateManyWithoutProjectNestedInput
    projectmembers?: ProjectMembersUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: TasksUncheckedUpdateManyWithoutProjectNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutInvitationsInput = {
    update: XOR<UserUpdateWithoutInvitationsInput, UserUncheckedUpdateWithoutInvitationsInput>
    create: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvitationsInput, UserUncheckedUpdateWithoutInvitationsInput>
  }

  export type UserUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TasksUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    attachments?: AttachmentsUpdateManyWithoutUploadedByNestedInput
    ownedProjects?: ProjectsUpdateManyWithoutCreatedByNestedInput
    sentNotifications?: NotificationUpdateManyWithoutSenderNestedInput
    receivedNotifications?: NotificationUpdateManyWithoutReceiverNestedInput
    memberof?: ProjectMembersUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TasksUncheckedUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    attachments?: AttachmentsUncheckedUpdateManyWithoutUploadedByNestedInput
    ownedProjects?: ProjectsUncheckedUpdateManyWithoutCreatedByNestedInput
    sentNotifications?: NotificationUncheckedUpdateManyWithoutSenderNestedInput
    receivedNotifications?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    memberof?: ProjectMembersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TasksCreateManyAssigneeInput = {
    id?: string
    position?: number
    title: string
    description?: string | null
    deadline?: Date | string | null
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    isComplete?: boolean
    listId: string
    projectId: string
  }

  export type CommentCreateManyAuthorInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    taskId: string
  }

  export type AttachmentsCreateManyUploadedByInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    taskId: string
  }

  export type ProjectsCreateManyCreatedByInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManySenderInput = {
    id?: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    taskId: string
    projectId: string
    receiverId: string
  }

  export type NotificationCreateManyReceiverInput = {
    id?: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    taskId: string
    projectId: string
    senderId: string
  }

  export type ProjectMembersCreateManyUserInput = {
    id?: string
    role?: string
    projectId: string
  }

  export type ProjectInvitationCreateManyInviterInput = {
    id?: string
    email: string
    role?: $Enums.Roles
    token: string
    status?: string
    expiresAt: Date | string
    projectId: string
  }

  export type TasksUpdateWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    comment?: CommentUpdateManyWithoutTaskNestedInput
    attachments?: AttachmentsUpdateManyWithoutTaskNestedInput
    list?: ListUpdateOneRequiredWithoutTasksNestedInput
    project?: ProjectsUpdateOneRequiredWithoutTasksNestedInput
    notifications?: NotificationUpdateManyWithoutTaskNestedInput
  }

  export type TasksUncheckedUpdateWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    listId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    comment?: CommentUncheckedUpdateManyWithoutTaskNestedInput
    attachments?: AttachmentsUncheckedUpdateManyWithoutTaskNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TasksUncheckedUpdateManyWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    listId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TasksUpdateOneRequiredWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type AttachmentsUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TasksUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type AttachmentsUncheckedUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type AttachmentsUncheckedUpdateManyWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectsUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ListUpdateManyWithoutProjectNestedInput
    projectmembers?: ProjectMembersUpdateManyWithoutProjectNestedInput
    tasks?: TasksUpdateManyWithoutProjectNestedInput
    notifications?: NotificationUpdateManyWithoutProjectNestedInput
    invitations?: ProjectInvitationUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ListUncheckedUpdateManyWithoutProjectNestedInput
    projectmembers?: ProjectMembersUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: TasksUncheckedUpdateManyWithoutProjectNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutProjectNestedInput
    invitations?: ProjectInvitationUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TasksUpdateOneRequiredWithoutNotificationsNestedInput
    project?: ProjectsUpdateOneRequiredWithoutNotificationsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TasksUpdateOneRequiredWithoutNotificationsNestedInput
    project?: ProjectsUpdateOneRequiredWithoutNotificationsNestedInput
    sender?: UserUpdateOneRequiredWithoutSentNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectMembersUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    project?: ProjectsUpdateOneRequiredWithoutProjectmembersNestedInput
  }

  export type ProjectMembersUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectMembersUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectInvitationUpdateWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectsUpdateOneRequiredWithoutInvitationsNestedInput
  }

  export type ProjectInvitationUncheckedUpdateWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectInvitationUncheckedUpdateManyWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyTaskInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
  }

  export type AttachmentsCreateManyTaskInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    uploaderId: string
  }

  export type NotificationCreateManyTaskInput = {
    id?: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    projectId: string
    senderId: string
    receiverId: string
  }

  export type CommentUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type AttachmentsUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type AttachmentsUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploaderId?: StringFieldUpdateOperationsInput | string
  }

  export type AttachmentsUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploaderId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectsUpdateOneRequiredWithoutNotificationsNestedInput
    sender?: UserUpdateOneRequiredWithoutSentNotificationsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type ListCreateManyProjectInput = {
    id?: string
    title: string
    position: number
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectMembersCreateManyProjectInput = {
    id?: string
    role?: string
    userId: string
  }

  export type TasksCreateManyProjectInput = {
    id?: string
    position?: number
    title: string
    description?: string | null
    deadline?: Date | string | null
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    assigneeId?: string | null
    isComplete?: boolean
    listId: string
  }

  export type NotificationCreateManyProjectInput = {
    id?: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    taskId: string
    senderId: string
    receiverId: string
  }

  export type ProjectInvitationCreateManyProjectInput = {
    id?: string
    email: string
    role?: $Enums.Roles
    token: string
    status?: string
    expiresAt: Date | string
    invitedBy: string
  }

  export type ListUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TasksUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TasksUncheckedUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMembersUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMemberofNestedInput
  }

  export type ProjectMembersUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectMembersUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TasksUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    assignee?: UserUpdateOneWithoutAssignedTasksNestedInput
    comment?: CommentUpdateManyWithoutTaskNestedInput
    attachments?: AttachmentsUpdateManyWithoutTaskNestedInput
    list?: ListUpdateOneRequiredWithoutTasksNestedInput
    notifications?: NotificationUpdateManyWithoutTaskNestedInput
  }

  export type TasksUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    listId?: StringFieldUpdateOperationsInput | string
    comment?: CommentUncheckedUpdateManyWithoutTaskNestedInput
    attachments?: AttachmentsUncheckedUpdateManyWithoutTaskNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TasksUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    listId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TasksUpdateOneRequiredWithoutNotificationsNestedInput
    sender?: UserUpdateOneRequiredWithoutSentNotificationsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectInvitationUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: UserUpdateOneRequiredWithoutInvitationsNestedInput
  }

  export type ProjectInvitationUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectInvitationUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedBy?: StringFieldUpdateOperationsInput | string
  }

  export type TasksCreateManyListInput = {
    id?: string
    position?: number
    title: string
    description?: string | null
    deadline?: Date | string | null
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    assigneeId?: string | null
    isComplete?: boolean
    projectId: string
  }

  export type TasksUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    assignee?: UserUpdateOneWithoutAssignedTasksNestedInput
    comment?: CommentUpdateManyWithoutTaskNestedInput
    attachments?: AttachmentsUpdateManyWithoutTaskNestedInput
    project?: ProjectsUpdateOneRequiredWithoutTasksNestedInput
    notifications?: NotificationUpdateManyWithoutTaskNestedInput
  }

  export type TasksUncheckedUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    projectId?: StringFieldUpdateOperationsInput | string
    comment?: CommentUncheckedUpdateManyWithoutTaskNestedInput
    attachments?: AttachmentsUncheckedUpdateManyWithoutTaskNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TasksUncheckedUpdateManyWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    projectId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}