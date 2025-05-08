
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Site
 * 
 */
export type Site = $Result.DefaultSelection<Prisma.$SitePayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model UserSubscription
 * 
 */
export type UserSubscription = $Result.DefaultSelection<Prisma.$UserSubscriptionPayload>
/**
 * Model ApiCall
 * 
 */
export type ApiCall = $Result.DefaultSelection<Prisma.$ApiCallPayload>
/**
 * Model SubscriptionSite
 * 
 */
export type SubscriptionSite = $Result.DefaultSelection<Prisma.$SubscriptionSitePayload>
/**
 * Model ReferralTracking
 * 
 */
export type ReferralTracking = $Result.DefaultSelection<Prisma.$ReferralTrackingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.site`: Exposes CRUD operations for the **Site** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sites
    * const sites = await prisma.site.findMany()
    * ```
    */
  get site(): Prisma.SiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSubscription`: Exposes CRUD operations for the **UserSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSubscriptions
    * const userSubscriptions = await prisma.userSubscription.findMany()
    * ```
    */
  get userSubscription(): Prisma.UserSubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiCall`: Exposes CRUD operations for the **ApiCall** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiCalls
    * const apiCalls = await prisma.apiCall.findMany()
    * ```
    */
  get apiCall(): Prisma.ApiCallDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptionSite`: Exposes CRUD operations for the **SubscriptionSite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionSites
    * const subscriptionSites = await prisma.subscriptionSite.findMany()
    * ```
    */
  get subscriptionSite(): Prisma.SubscriptionSiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.referralTracking`: Exposes CRUD operations for the **ReferralTracking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReferralTrackings
    * const referralTrackings = await prisma.referralTracking.findMany()
    * ```
    */
  get referralTracking(): Prisma.ReferralTrackingDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Site: 'Site',
    Subscription: 'Subscription',
    UserSubscription: 'UserSubscription',
    ApiCall: 'ApiCall',
    SubscriptionSite: 'SubscriptionSite',
    ReferralTracking: 'ReferralTracking'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "site" | "subscription" | "userSubscription" | "apiCall" | "subscriptionSite" | "referralTracking"
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
      Site: {
        payload: Prisma.$SitePayload<ExtArgs>
        fields: Prisma.SiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findFirst: {
            args: Prisma.SiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findMany: {
            args: Prisma.SiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          create: {
            args: Prisma.SiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          createMany: {
            args: Prisma.SiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          delete: {
            args: Prisma.SiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          update: {
            args: Prisma.SiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          deleteMany: {
            args: Prisma.SiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          upsert: {
            args: Prisma.SiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          aggregate: {
            args: Prisma.SiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSite>
          }
          groupBy: {
            args: Prisma.SiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteCountArgs<ExtArgs>
            result: $Utils.Optional<SiteCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      UserSubscription: {
        payload: Prisma.$UserSubscriptionPayload<ExtArgs>
        fields: Prisma.UserSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.UserSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          findMany: {
            args: Prisma.UserSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          create: {
            args: Prisma.UserSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          createMany: {
            args: Prisma.UserSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.UserSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          update: {
            args: Prisma.UserSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.UserSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.UserSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.UserSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSubscription>
          }
          groupBy: {
            args: Prisma.UserSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<UserSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      ApiCall: {
        payload: Prisma.$ApiCallPayload<ExtArgs>
        fields: Prisma.ApiCallFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiCallFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiCallFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallPayload>
          }
          findFirst: {
            args: Prisma.ApiCallFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiCallFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallPayload>
          }
          findMany: {
            args: Prisma.ApiCallFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallPayload>[]
          }
          create: {
            args: Prisma.ApiCallCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallPayload>
          }
          createMany: {
            args: Prisma.ApiCallCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiCallCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallPayload>[]
          }
          delete: {
            args: Prisma.ApiCallDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallPayload>
          }
          update: {
            args: Prisma.ApiCallUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallPayload>
          }
          deleteMany: {
            args: Prisma.ApiCallDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiCallUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiCallUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallPayload>[]
          }
          upsert: {
            args: Prisma.ApiCallUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallPayload>
          }
          aggregate: {
            args: Prisma.ApiCallAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiCall>
          }
          groupBy: {
            args: Prisma.ApiCallGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiCallGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiCallCountArgs<ExtArgs>
            result: $Utils.Optional<ApiCallCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionSite: {
        payload: Prisma.$SubscriptionSitePayload<ExtArgs>
        fields: Prisma.SubscriptionSiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionSiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionSitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionSiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionSitePayload>
          }
          findFirst: {
            args: Prisma.SubscriptionSiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionSitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionSiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionSitePayload>
          }
          findMany: {
            args: Prisma.SubscriptionSiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionSitePayload>[]
          }
          create: {
            args: Prisma.SubscriptionSiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionSitePayload>
          }
          createMany: {
            args: Prisma.SubscriptionSiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionSiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionSitePayload>[]
          }
          delete: {
            args: Prisma.SubscriptionSiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionSitePayload>
          }
          update: {
            args: Prisma.SubscriptionSiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionSitePayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionSiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionSiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionSiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionSitePayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionSiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionSitePayload>
          }
          aggregate: {
            args: Prisma.SubscriptionSiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionSite>
          }
          groupBy: {
            args: Prisma.SubscriptionSiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionSiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionSiteCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionSiteCountAggregateOutputType> | number
          }
        }
      }
      ReferralTracking: {
        payload: Prisma.$ReferralTrackingPayload<ExtArgs>
        fields: Prisma.ReferralTrackingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferralTrackingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralTrackingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferralTrackingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralTrackingPayload>
          }
          findFirst: {
            args: Prisma.ReferralTrackingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralTrackingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferralTrackingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralTrackingPayload>
          }
          findMany: {
            args: Prisma.ReferralTrackingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralTrackingPayload>[]
          }
          create: {
            args: Prisma.ReferralTrackingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralTrackingPayload>
          }
          createMany: {
            args: Prisma.ReferralTrackingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferralTrackingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralTrackingPayload>[]
          }
          delete: {
            args: Prisma.ReferralTrackingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralTrackingPayload>
          }
          update: {
            args: Prisma.ReferralTrackingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralTrackingPayload>
          }
          deleteMany: {
            args: Prisma.ReferralTrackingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferralTrackingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReferralTrackingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralTrackingPayload>[]
          }
          upsert: {
            args: Prisma.ReferralTrackingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralTrackingPayload>
          }
          aggregate: {
            args: Prisma.ReferralTrackingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferralTracking>
          }
          groupBy: {
            args: Prisma.ReferralTrackingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferralTrackingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferralTrackingCountArgs<ExtArgs>
            result: $Utils.Optional<ReferralTrackingCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    site?: SiteOmit
    subscription?: SubscriptionOmit
    userSubscription?: UserSubscriptionOmit
    apiCall?: ApiCallOmit
    subscriptionSite?: SubscriptionSiteOmit
    referralTracking?: ReferralTrackingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    referrals: number
    sites: number
    userSubscriptions: number
    apiCalls: number
    referralTracking: number
    referredTracking: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrals?: boolean | UserCountOutputTypeCountReferralsArgs
    sites?: boolean | UserCountOutputTypeCountSitesArgs
    userSubscriptions?: boolean | UserCountOutputTypeCountUserSubscriptionsArgs
    apiCalls?: boolean | UserCountOutputTypeCountApiCallsArgs
    referralTracking?: boolean | UserCountOutputTypeCountReferralTrackingArgs
    referredTracking?: boolean | UserCountOutputTypeCountReferredTrackingArgs
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
  export type UserCountOutputTypeCountReferralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApiCallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiCallWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferralTrackingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralTrackingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferredTrackingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralTrackingWhereInput
  }


  /**
   * Count Type SiteCountOutputType
   */

  export type SiteCountOutputType = {
    apiCalls: number
    subscriptionSites: number
  }

  export type SiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiCalls?: boolean | SiteCountOutputTypeCountApiCallsArgs
    subscriptionSites?: boolean | SiteCountOutputTypeCountSubscriptionSitesArgs
  }

  // Custom InputTypes
  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteCountOutputType
     */
    select?: SiteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountApiCallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiCallWhereInput
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountSubscriptionSitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionSiteWhereInput
  }


  /**
   * Count Type SubscriptionCountOutputType
   */

  export type SubscriptionCountOutputType = {
    userSubscriptions: number
    subscriptionSites: number
  }

  export type SubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSubscriptions?: boolean | SubscriptionCountOutputTypeCountUserSubscriptionsArgs
    subscriptionSites?: boolean | SubscriptionCountOutputTypeCountSubscriptionSitesArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCountOutputType
     */
    select?: SubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountUserSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubscriptionWhereInput
  }

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountSubscriptionSitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionSiteWhereInput
  }


  /**
   * Count Type UserSubscriptionCountOutputType
   */

  export type UserSubscriptionCountOutputType = {
    apiCalls: number
  }

  export type UserSubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiCalls?: boolean | UserSubscriptionCountOutputTypeCountApiCallsArgs
  }

  // Custom InputTypes
  /**
   * UserSubscriptionCountOutputType without action
   */
  export type UserSubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscriptionCountOutputType
     */
    select?: UserSubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserSubscriptionCountOutputType without action
   */
  export type UserSubscriptionCountOutputTypeCountApiCallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiCallWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    remainingFreeRequest: number | null
    loginCount: number | null
  }

  export type UserSumAggregateOutputType = {
    remainingFreeRequest: number | null
    loginCount: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    mobile: string | null
    email: string | null
    referralCode: string | null
    referredByUser: string | null
    remainingFreeRequest: number | null
    signupDate: Date | null
    lastLogin: Date | null
    loginCount: number | null
    marketingTag: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    mobile: string | null
    email: string | null
    referralCode: string | null
    referredByUser: string | null
    remainingFreeRequest: number | null
    signupDate: Date | null
    lastLogin: Date | null
    loginCount: number | null
    marketingTag: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    mobile: number
    email: number
    referralCode: number
    referredByUser: number
    remainingFreeRequest: number
    signupDate: number
    lastLogin: number
    loginCount: number
    marketingTag: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    remainingFreeRequest?: true
    loginCount?: true
  }

  export type UserSumAggregateInputType = {
    remainingFreeRequest?: true
    loginCount?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    mobile?: true
    email?: true
    referralCode?: true
    referredByUser?: true
    remainingFreeRequest?: true
    signupDate?: true
    lastLogin?: true
    loginCount?: true
    marketingTag?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    mobile?: true
    email?: true
    referralCode?: true
    referredByUser?: true
    remainingFreeRequest?: true
    signupDate?: true
    lastLogin?: true
    loginCount?: true
    marketingTag?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    mobile?: true
    email?: true
    referralCode?: true
    referredByUser?: true
    remainingFreeRequest?: true
    signupDate?: true
    lastLogin?: true
    loginCount?: true
    marketingTag?: true
    role?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    mobile: string
    email: string
    referralCode: string
    referredByUser: string | null
    remainingFreeRequest: number
    signupDate: Date
    lastLogin: Date | null
    loginCount: number
    marketingTag: string | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    firstName?: boolean
    lastName?: boolean
    mobile?: boolean
    email?: boolean
    referralCode?: boolean
    referredByUser?: boolean
    remainingFreeRequest?: boolean
    signupDate?: boolean
    lastLogin?: boolean
    loginCount?: boolean
    marketingTag?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referredBy?: boolean | User$referredByArgs<ExtArgs>
    referrals?: boolean | User$referralsArgs<ExtArgs>
    sites?: boolean | User$sitesArgs<ExtArgs>
    userSubscriptions?: boolean | User$userSubscriptionsArgs<ExtArgs>
    apiCalls?: boolean | User$apiCallsArgs<ExtArgs>
    referralTracking?: boolean | User$referralTrackingArgs<ExtArgs>
    referredTracking?: boolean | User$referredTrackingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    mobile?: boolean
    email?: boolean
    referralCode?: boolean
    referredByUser?: boolean
    remainingFreeRequest?: boolean
    signupDate?: boolean
    lastLogin?: boolean
    loginCount?: boolean
    marketingTag?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referredBy?: boolean | User$referredByArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    mobile?: boolean
    email?: boolean
    referralCode?: boolean
    referredByUser?: boolean
    remainingFreeRequest?: boolean
    signupDate?: boolean
    lastLogin?: boolean
    loginCount?: boolean
    marketingTag?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referredBy?: boolean | User$referredByArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    mobile?: boolean
    email?: boolean
    referralCode?: boolean
    referredByUser?: boolean
    remainingFreeRequest?: boolean
    signupDate?: boolean
    lastLogin?: boolean
    loginCount?: boolean
    marketingTag?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "mobile" | "email" | "referralCode" | "referredByUser" | "remainingFreeRequest" | "signupDate" | "lastLogin" | "loginCount" | "marketingTag" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referredBy?: boolean | User$referredByArgs<ExtArgs>
    referrals?: boolean | User$referralsArgs<ExtArgs>
    sites?: boolean | User$sitesArgs<ExtArgs>
    userSubscriptions?: boolean | User$userSubscriptionsArgs<ExtArgs>
    apiCalls?: boolean | User$apiCallsArgs<ExtArgs>
    referralTracking?: boolean | User$referralTrackingArgs<ExtArgs>
    referredTracking?: boolean | User$referredTrackingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referredBy?: boolean | User$referredByArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referredBy?: boolean | User$referredByArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      referredBy: Prisma.$UserPayload<ExtArgs> | null
      referrals: Prisma.$UserPayload<ExtArgs>[]
      sites: Prisma.$SitePayload<ExtArgs>[]
      userSubscriptions: Prisma.$UserSubscriptionPayload<ExtArgs>[]
      apiCalls: Prisma.$ApiCallPayload<ExtArgs>[]
      referralTracking: Prisma.$ReferralTrackingPayload<ExtArgs>[]
      referredTracking: Prisma.$ReferralTrackingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      mobile: string
      email: string
      referralCode: string
      referredByUser: string | null
      remainingFreeRequest: number
      signupDate: Date
      lastLogin: Date | null
      loginCount: number
      marketingTag: string | null
      role: $Enums.UserRole
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
    referredBy<T extends User$referredByArgs<ExtArgs> = {}>(args?: Subset<T, User$referredByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    referrals<T extends User$referralsArgs<ExtArgs> = {}>(args?: Subset<T, User$referralsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sites<T extends User$sitesArgs<ExtArgs> = {}>(args?: Subset<T, User$sitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userSubscriptions<T extends User$userSubscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$userSubscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiCalls<T extends User$apiCallsArgs<ExtArgs> = {}>(args?: Subset<T, User$apiCallsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referralTracking<T extends User$referralTrackingArgs<ExtArgs> = {}>(args?: Subset<T, User$referralTrackingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralTrackingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referredTracking<T extends User$referredTrackingArgs<ExtArgs> = {}>(args?: Subset<T, User$referredTrackingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralTrackingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly mobile: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly referralCode: FieldRef<"User", 'String'>
    readonly referredByUser: FieldRef<"User", 'String'>
    readonly remainingFreeRequest: FieldRef<"User", 'Int'>
    readonly signupDate: FieldRef<"User", 'DateTime'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly loginCount: FieldRef<"User", 'Int'>
    readonly marketingTag: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.referredBy
   */
  export type User$referredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.referrals
   */
  export type User$referralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.sites
   */
  export type User$sitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    cursor?: SiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * User.userSubscriptions
   */
  export type User$userSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    where?: UserSubscriptionWhereInput
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    cursor?: UserSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * User.apiCalls
   */
  export type User$apiCallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallInclude<ExtArgs> | null
    where?: ApiCallWhereInput
    orderBy?: ApiCallOrderByWithRelationInput | ApiCallOrderByWithRelationInput[]
    cursor?: ApiCallWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiCallScalarFieldEnum | ApiCallScalarFieldEnum[]
  }

  /**
   * User.referralTracking
   */
  export type User$referralTrackingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralTracking
     */
    select?: ReferralTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralTracking
     */
    omit?: ReferralTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralTrackingInclude<ExtArgs> | null
    where?: ReferralTrackingWhereInput
    orderBy?: ReferralTrackingOrderByWithRelationInput | ReferralTrackingOrderByWithRelationInput[]
    cursor?: ReferralTrackingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralTrackingScalarFieldEnum | ReferralTrackingScalarFieldEnum[]
  }

  /**
   * User.referredTracking
   */
  export type User$referredTrackingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralTracking
     */
    select?: ReferralTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralTracking
     */
    omit?: ReferralTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralTrackingInclude<ExtArgs> | null
    where?: ReferralTrackingWhereInput
    orderBy?: ReferralTrackingOrderByWithRelationInput | ReferralTrackingOrderByWithRelationInput[]
    cursor?: ReferralTrackingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralTrackingScalarFieldEnum | ReferralTrackingScalarFieldEnum[]
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
   * Model Site
   */

  export type AggregateSite = {
    _count: SiteCountAggregateOutputType | null
    _avg: SiteAvgAggregateOutputType | null
    _sum: SiteSumAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  export type SiteAvgAggregateOutputType = {
    status: number | null
  }

  export type SiteSumAggregateOutputType = {
    status: number | null
  }

  export type SiteMinAggregateOutputType = {
    id: string | null
    name: string | null
    baseURL: string | null
    description: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type SiteMaxAggregateOutputType = {
    id: string | null
    name: string | null
    baseURL: string | null
    description: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type SiteCountAggregateOutputType = {
    id: number
    name: number
    baseURL: number
    description: number
    status: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type SiteAvgAggregateInputType = {
    status?: true
  }

  export type SiteSumAggregateInputType = {
    status?: true
  }

  export type SiteMinAggregateInputType = {
    id?: true
    name?: true
    baseURL?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type SiteMaxAggregateInputType = {
    id?: true
    name?: true
    baseURL?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type SiteCountAggregateInputType = {
    id?: true
    name?: true
    baseURL?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type SiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Site to aggregate.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sites
    **/
    _count?: true | SiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SiteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SiteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteMaxAggregateInputType
  }

  export type GetSiteAggregateType<T extends SiteAggregateArgs> = {
        [P in keyof T & keyof AggregateSite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSite[P]>
      : GetScalarType<T[P], AggregateSite[P]>
  }




  export type SiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithAggregationInput | SiteOrderByWithAggregationInput[]
    by: SiteScalarFieldEnum[] | SiteScalarFieldEnum
    having?: SiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteCountAggregateInputType | true
    _avg?: SiteAvgAggregateInputType
    _sum?: SiteSumAggregateInputType
    _min?: SiteMinAggregateInputType
    _max?: SiteMaxAggregateInputType
  }

  export type SiteGroupByOutputType = {
    id: string
    name: string
    baseURL: string
    description: string | null
    status: number | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: SiteCountAggregateOutputType | null
    _avg: SiteAvgAggregateOutputType | null
    _sum: SiteSumAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  type GetSiteGroupByPayload<T extends SiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteGroupByOutputType[P]>
            : GetScalarType<T[P], SiteGroupByOutputType[P]>
        }
      >
    >


  export type SiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    baseURL?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    apiCalls?: boolean | Site$apiCallsArgs<ExtArgs>
    subscriptionSites?: boolean | Site$subscriptionSitesArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    baseURL?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    baseURL?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectScalar = {
    id?: boolean
    name?: boolean
    baseURL?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type SiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "baseURL" | "description" | "status" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["site"]>
  export type SiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    apiCalls?: boolean | Site$apiCallsArgs<ExtArgs>
    subscriptionSites?: boolean | Site$subscriptionSitesArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Site"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      apiCalls: Prisma.$ApiCallPayload<ExtArgs>[]
      subscriptionSites: Prisma.$SubscriptionSitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      baseURL: string
      description: string | null
      status: number | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["site"]>
    composites: {}
  }

  type SiteGetPayload<S extends boolean | null | undefined | SiteDefaultArgs> = $Result.GetResult<Prisma.$SitePayload, S>

  type SiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteCountAggregateInputType | true
    }

  export interface SiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Site'], meta: { name: 'Site' } }
    /**
     * Find zero or one Site that matches the filter.
     * @param {SiteFindUniqueArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteFindUniqueArgs>(args: SelectSubset<T, SiteFindUniqueArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Site that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteFindUniqueOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteFindFirstArgs>(args?: SelectSubset<T, SiteFindFirstArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sites
     * const sites = await prisma.site.findMany()
     * 
     * // Get first 10 Sites
     * const sites = await prisma.site.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteWithIdOnly = await prisma.site.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteFindManyArgs>(args?: SelectSubset<T, SiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Site.
     * @param {SiteCreateArgs} args - Arguments to create a Site.
     * @example
     * // Create one Site
     * const Site = await prisma.site.create({
     *   data: {
     *     // ... data to create a Site
     *   }
     * })
     * 
     */
    create<T extends SiteCreateArgs>(args: SelectSubset<T, SiteCreateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sites.
     * @param {SiteCreateManyArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteCreateManyArgs>(args?: SelectSubset<T, SiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sites and returns the data saved in the database.
     * @param {SiteCreateManyAndReturnArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Site.
     * @param {SiteDeleteArgs} args - Arguments to delete one Site.
     * @example
     * // Delete one Site
     * const Site = await prisma.site.delete({
     *   where: {
     *     // ... filter to delete one Site
     *   }
     * })
     * 
     */
    delete<T extends SiteDeleteArgs>(args: SelectSubset<T, SiteDeleteArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Site.
     * @param {SiteUpdateArgs} args - Arguments to update one Site.
     * @example
     * // Update one Site
     * const site = await prisma.site.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteUpdateArgs>(args: SelectSubset<T, SiteUpdateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sites.
     * @param {SiteDeleteManyArgs} args - Arguments to filter Sites to delete.
     * @example
     * // Delete a few Sites
     * const { count } = await prisma.site.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteDeleteManyArgs>(args?: SelectSubset<T, SiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteUpdateManyArgs>(args: SelectSubset<T, SiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites and returns the data updated in the database.
     * @param {SiteUpdateManyAndReturnArgs} args - Arguments to update many Sites.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.updateManyAndReturn({
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
    updateManyAndReturn<T extends SiteUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Site.
     * @param {SiteUpsertArgs} args - Arguments to update or create a Site.
     * @example
     * // Update or create a Site
     * const site = await prisma.site.upsert({
     *   create: {
     *     // ... data to create a Site
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Site we want to update
     *   }
     * })
     */
    upsert<T extends SiteUpsertArgs>(args: SelectSubset<T, SiteUpsertArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteCountArgs} args - Arguments to filter Sites to count.
     * @example
     * // Count the number of Sites
     * const count = await prisma.site.count({
     *   where: {
     *     // ... the filter for the Sites we want to count
     *   }
     * })
    **/
    count<T extends SiteCountArgs>(
      args?: Subset<T, SiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SiteAggregateArgs>(args: Subset<T, SiteAggregateArgs>): Prisma.PrismaPromise<GetSiteAggregateType<T>>

    /**
     * Group by Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteGroupByArgs} args - Group by arguments.
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
      T extends SiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteGroupByArgs['orderBy'] }
        : { orderBy?: SiteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Site model
   */
  readonly fields: SiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Site.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    apiCalls<T extends Site$apiCallsArgs<ExtArgs> = {}>(args?: Subset<T, Site$apiCallsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptionSites<T extends Site$subscriptionSitesArgs<ExtArgs> = {}>(args?: Subset<T, Site$subscriptionSitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionSitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Site model
   */
  interface SiteFieldRefs {
    readonly id: FieldRef<"Site", 'String'>
    readonly name: FieldRef<"Site", 'String'>
    readonly baseURL: FieldRef<"Site", 'String'>
    readonly description: FieldRef<"Site", 'String'>
    readonly status: FieldRef<"Site", 'Int'>
    readonly createdAt: FieldRef<"Site", 'DateTime'>
    readonly updatedAt: FieldRef<"Site", 'DateTime'>
    readonly userId: FieldRef<"Site", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Site findUnique
   */
  export type SiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findUniqueOrThrow
   */
  export type SiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findFirst
   */
  export type SiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findFirstOrThrow
   */
  export type SiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findMany
   */
  export type SiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Sites to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site create
   */
  export type SiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Site.
     */
    data: XOR<SiteCreateInput, SiteUncheckedCreateInput>
  }

  /**
   * Site createMany
   */
  export type SiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Site createManyAndReturn
   */
  export type SiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Site update
   */
  export type SiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Site.
     */
    data: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
    /**
     * Choose, which Site to update.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site updateMany
   */
  export type SiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
  }

  /**
   * Site updateManyAndReturn
   */
  export type SiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Site upsert
   */
  export type SiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Site to update in case it exists.
     */
    where: SiteWhereUniqueInput
    /**
     * In case the Site found by the `where` argument doesn't exist, create a new Site with this data.
     */
    create: XOR<SiteCreateInput, SiteUncheckedCreateInput>
    /**
     * In case the Site was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
  }

  /**
   * Site delete
   */
  export type SiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter which Site to delete.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site deleteMany
   */
  export type SiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sites to delete
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to delete.
     */
    limit?: number
  }

  /**
   * Site.apiCalls
   */
  export type Site$apiCallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallInclude<ExtArgs> | null
    where?: ApiCallWhereInput
    orderBy?: ApiCallOrderByWithRelationInput | ApiCallOrderByWithRelationInput[]
    cursor?: ApiCallWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiCallScalarFieldEnum | ApiCallScalarFieldEnum[]
  }

  /**
   * Site.subscriptionSites
   */
  export type Site$subscriptionSitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionSite
     */
    select?: SubscriptionSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionSite
     */
    omit?: SubscriptionSiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionSiteInclude<ExtArgs> | null
    where?: SubscriptionSiteWhereInput
    orderBy?: SubscriptionSiteOrderByWithRelationInput | SubscriptionSiteOrderByWithRelationInput[]
    cursor?: SubscriptionSiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionSiteScalarFieldEnum | SubscriptionSiteScalarFieldEnum[]
  }

  /**
   * Site without action
   */
  export type SiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    requestLimit: number | null
    price: number | null
    durationDays: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    requestLimit: number | null
    price: number | null
    durationDays: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    name: string | null
    requestLimit: number | null
    price: number | null
    durationDays: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    requestLimit: number | null
    price: number | null
    durationDays: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    name: number
    requestLimit: number
    price: number
    durationDays: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    requestLimit?: true
    price?: true
    durationDays?: true
  }

  export type SubscriptionSumAggregateInputType = {
    requestLimit?: true
    price?: true
    durationDays?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    name?: true
    requestLimit?: true
    price?: true
    durationDays?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    name?: true
    requestLimit?: true
    price?: true
    durationDays?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    name?: true
    requestLimit?: true
    price?: true
    durationDays?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    name: string
    requestLimit: number
    price: number
    durationDays: number
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    requestLimit?: boolean
    price?: boolean
    durationDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userSubscriptions?: boolean | Subscription$userSubscriptionsArgs<ExtArgs>
    subscriptionSites?: boolean | Subscription$subscriptionSitesArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    requestLimit?: boolean
    price?: boolean
    durationDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    requestLimit?: boolean
    price?: boolean
    durationDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    name?: boolean
    requestLimit?: boolean
    price?: boolean
    durationDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "requestLimit" | "price" | "durationDays" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSubscriptions?: boolean | Subscription$userSubscriptionsArgs<ExtArgs>
    subscriptionSites?: boolean | Subscription$subscriptionSitesArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      userSubscriptions: Prisma.$UserSubscriptionPayload<ExtArgs>[]
      subscriptionSites: Prisma.$SubscriptionSitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      requestLimit: number
      price: number
      durationDays: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userSubscriptions<T extends Subscription$userSubscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$userSubscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptionSites<T extends Subscription$subscriptionSitesArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$subscriptionSitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionSitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly name: FieldRef<"Subscription", 'String'>
    readonly requestLimit: FieldRef<"Subscription", 'Int'>
    readonly price: FieldRef<"Subscription", 'Float'>
    readonly durationDays: FieldRef<"Subscription", 'Int'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription.userSubscriptions
   */
  export type Subscription$userSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    where?: UserSubscriptionWhereInput
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    cursor?: UserSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription.subscriptionSites
   */
  export type Subscription$subscriptionSitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionSite
     */
    select?: SubscriptionSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionSite
     */
    omit?: SubscriptionSiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionSiteInclude<ExtArgs> | null
    where?: SubscriptionSiteWhereInput
    orderBy?: SubscriptionSiteOrderByWithRelationInput | SubscriptionSiteOrderByWithRelationInput[]
    cursor?: SubscriptionSiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionSiteScalarFieldEnum | SubscriptionSiteScalarFieldEnum[]
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model UserSubscription
   */

  export type AggregateUserSubscription = {
    _count: UserSubscriptionCountAggregateOutputType | null
    _avg: UserSubscriptionAvgAggregateOutputType | null
    _sum: UserSubscriptionSumAggregateOutputType | null
    _min: UserSubscriptionMinAggregateOutputType | null
    _max: UserSubscriptionMaxAggregateOutputType | null
  }

  export type UserSubscriptionAvgAggregateOutputType = {
    requestLimitAtPurchase: number | null
    remainingRequest: number | null
  }

  export type UserSubscriptionSumAggregateOutputType = {
    requestLimitAtPurchase: number | null
    remainingRequest: number | null
  }

  export type UserSubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    subscriptionId: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    requestLimitAtPurchase: number | null
    remainingRequest: number | null
    updatedAt: Date | null
  }

  export type UserSubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    subscriptionId: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    requestLimitAtPurchase: number | null
    remainingRequest: number | null
    updatedAt: Date | null
  }

  export type UserSubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    subscriptionId: number
    startDate: number
    endDate: number
    isActive: number
    requestLimitAtPurchase: number
    remainingRequest: number
    updatedAt: number
    _all: number
  }


  export type UserSubscriptionAvgAggregateInputType = {
    requestLimitAtPurchase?: true
    remainingRequest?: true
  }

  export type UserSubscriptionSumAggregateInputType = {
    requestLimitAtPurchase?: true
    remainingRequest?: true
  }

  export type UserSubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    subscriptionId?: true
    startDate?: true
    endDate?: true
    isActive?: true
    requestLimitAtPurchase?: true
    remainingRequest?: true
    updatedAt?: true
  }

  export type UserSubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    subscriptionId?: true
    startDate?: true
    endDate?: true
    isActive?: true
    requestLimitAtPurchase?: true
    remainingRequest?: true
    updatedAt?: true
  }

  export type UserSubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    subscriptionId?: true
    startDate?: true
    endDate?: true
    isActive?: true
    requestLimitAtPurchase?: true
    remainingRequest?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSubscription to aggregate.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSubscriptions
    **/
    _count?: true | UserSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSubscriptionMaxAggregateInputType
  }

  export type GetUserSubscriptionAggregateType<T extends UserSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSubscription[P]>
      : GetScalarType<T[P], AggregateUserSubscription[P]>
  }




  export type UserSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubscriptionWhereInput
    orderBy?: UserSubscriptionOrderByWithAggregationInput | UserSubscriptionOrderByWithAggregationInput[]
    by: UserSubscriptionScalarFieldEnum[] | UserSubscriptionScalarFieldEnum
    having?: UserSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSubscriptionCountAggregateInputType | true
    _avg?: UserSubscriptionAvgAggregateInputType
    _sum?: UserSubscriptionSumAggregateInputType
    _min?: UserSubscriptionMinAggregateInputType
    _max?: UserSubscriptionMaxAggregateInputType
  }

  export type UserSubscriptionGroupByOutputType = {
    id: string
    userId: string
    subscriptionId: string
    startDate: Date
    endDate: Date
    isActive: boolean
    requestLimitAtPurchase: number
    remainingRequest: number
    updatedAt: Date
    _count: UserSubscriptionCountAggregateOutputType | null
    _avg: UserSubscriptionAvgAggregateOutputType | null
    _sum: UserSubscriptionSumAggregateOutputType | null
    _min: UserSubscriptionMinAggregateOutputType | null
    _max: UserSubscriptionMaxAggregateOutputType | null
  }

  type GetUserSubscriptionGroupByPayload<T extends UserSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], UserSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type UserSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subscriptionId?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    requestLimitAtPurchase?: boolean
    remainingRequest?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
    apiCalls?: boolean | UserSubscription$apiCallsArgs<ExtArgs>
    _count?: boolean | UserSubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>

  export type UserSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subscriptionId?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    requestLimitAtPurchase?: boolean
    remainingRequest?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>

  export type UserSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subscriptionId?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    requestLimitAtPurchase?: boolean
    remainingRequest?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>

  export type UserSubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    subscriptionId?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    requestLimitAtPurchase?: boolean
    remainingRequest?: boolean
    updatedAt?: boolean
  }

  export type UserSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "subscriptionId" | "startDate" | "endDate" | "isActive" | "requestLimitAtPurchase" | "remainingRequest" | "updatedAt", ExtArgs["result"]["userSubscription"]>
  export type UserSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
    apiCalls?: boolean | UserSubscription$apiCallsArgs<ExtArgs>
    _count?: boolean | UserSubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserSubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }
  export type UserSubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }

  export type $UserSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSubscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      subscription: Prisma.$SubscriptionPayload<ExtArgs>
      apiCalls: Prisma.$ApiCallPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      subscriptionId: string
      startDate: Date
      endDate: Date
      isActive: boolean
      requestLimitAtPurchase: number
      remainingRequest: number
      updatedAt: Date
    }, ExtArgs["result"]["userSubscription"]>
    composites: {}
  }

  type UserSubscriptionGetPayload<S extends boolean | null | undefined | UserSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$UserSubscriptionPayload, S>

  type UserSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSubscriptionCountAggregateInputType | true
    }

  export interface UserSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSubscription'], meta: { name: 'UserSubscription' } }
    /**
     * Find zero or one UserSubscription that matches the filter.
     * @param {UserSubscriptionFindUniqueArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSubscriptionFindUniqueArgs>(args: SelectSubset<T, UserSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindFirstArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSubscriptionFindFirstArgs>(args?: SelectSubset<T, UserSubscriptionFindFirstArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindFirstOrThrowArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSubscriptions
     * const userSubscriptions = await prisma.userSubscription.findMany()
     * 
     * // Get first 10 UserSubscriptions
     * const userSubscriptions = await prisma.userSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSubscriptionFindManyArgs>(args?: SelectSubset<T, UserSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSubscription.
     * @param {UserSubscriptionCreateArgs} args - Arguments to create a UserSubscription.
     * @example
     * // Create one UserSubscription
     * const UserSubscription = await prisma.userSubscription.create({
     *   data: {
     *     // ... data to create a UserSubscription
     *   }
     * })
     * 
     */
    create<T extends UserSubscriptionCreateArgs>(args: SelectSubset<T, UserSubscriptionCreateArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSubscriptions.
     * @param {UserSubscriptionCreateManyArgs} args - Arguments to create many UserSubscriptions.
     * @example
     * // Create many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSubscriptionCreateManyArgs>(args?: SelectSubset<T, UserSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSubscriptions and returns the data saved in the database.
     * @param {UserSubscriptionCreateManyAndReturnArgs} args - Arguments to create many UserSubscriptions.
     * @example
     * // Create many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSubscriptions and only return the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSubscription.
     * @param {UserSubscriptionDeleteArgs} args - Arguments to delete one UserSubscription.
     * @example
     * // Delete one UserSubscription
     * const UserSubscription = await prisma.userSubscription.delete({
     *   where: {
     *     // ... filter to delete one UserSubscription
     *   }
     * })
     * 
     */
    delete<T extends UserSubscriptionDeleteArgs>(args: SelectSubset<T, UserSubscriptionDeleteArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSubscription.
     * @param {UserSubscriptionUpdateArgs} args - Arguments to update one UserSubscription.
     * @example
     * // Update one UserSubscription
     * const userSubscription = await prisma.userSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSubscriptionUpdateArgs>(args: SelectSubset<T, UserSubscriptionUpdateArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSubscriptions.
     * @param {UserSubscriptionDeleteManyArgs} args - Arguments to filter UserSubscriptions to delete.
     * @example
     * // Delete a few UserSubscriptions
     * const { count } = await prisma.userSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSubscriptionDeleteManyArgs>(args?: SelectSubset<T, UserSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSubscriptionUpdateManyArgs>(args: SelectSubset<T, UserSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSubscriptions and returns the data updated in the database.
     * @param {UserSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many UserSubscriptions.
     * @example
     * // Update many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSubscriptions and only return the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSubscription.
     * @param {UserSubscriptionUpsertArgs} args - Arguments to update or create a UserSubscription.
     * @example
     * // Update or create a UserSubscription
     * const userSubscription = await prisma.userSubscription.upsert({
     *   create: {
     *     // ... data to create a UserSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSubscription we want to update
     *   }
     * })
     */
    upsert<T extends UserSubscriptionUpsertArgs>(args: SelectSubset<T, UserSubscriptionUpsertArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionCountArgs} args - Arguments to filter UserSubscriptions to count.
     * @example
     * // Count the number of UserSubscriptions
     * const count = await prisma.userSubscription.count({
     *   where: {
     *     // ... the filter for the UserSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends UserSubscriptionCountArgs>(
      args?: Subset<T, UserSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSubscriptionAggregateArgs>(args: Subset<T, UserSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetUserSubscriptionAggregateType<T>>

    /**
     * Group by UserSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionGroupByArgs} args - Group by arguments.
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
      T extends UserSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: UserSubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSubscription model
   */
  readonly fields: UserSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subscription<T extends SubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionDefaultArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    apiCalls<T extends UserSubscription$apiCallsArgs<ExtArgs> = {}>(args?: Subset<T, UserSubscription$apiCallsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserSubscription model
   */
  interface UserSubscriptionFieldRefs {
    readonly id: FieldRef<"UserSubscription", 'String'>
    readonly userId: FieldRef<"UserSubscription", 'String'>
    readonly subscriptionId: FieldRef<"UserSubscription", 'String'>
    readonly startDate: FieldRef<"UserSubscription", 'DateTime'>
    readonly endDate: FieldRef<"UserSubscription", 'DateTime'>
    readonly isActive: FieldRef<"UserSubscription", 'Boolean'>
    readonly requestLimitAtPurchase: FieldRef<"UserSubscription", 'Int'>
    readonly remainingRequest: FieldRef<"UserSubscription", 'Int'>
    readonly updatedAt: FieldRef<"UserSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSubscription findUnique
   */
  export type UserSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription findUniqueOrThrow
   */
  export type UserSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription findFirst
   */
  export type UserSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSubscriptions.
     */
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription findFirstOrThrow
   */
  export type UserSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSubscriptions.
     */
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription findMany
   */
  export type UserSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscriptions to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription create
   */
  export type UserSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSubscription.
     */
    data: XOR<UserSubscriptionCreateInput, UserSubscriptionUncheckedCreateInput>
  }

  /**
   * UserSubscription createMany
   */
  export type UserSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSubscriptions.
     */
    data: UserSubscriptionCreateManyInput | UserSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSubscription createManyAndReturn
   */
  export type UserSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many UserSubscriptions.
     */
    data: UserSubscriptionCreateManyInput | UserSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSubscription update
   */
  export type UserSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSubscription.
     */
    data: XOR<UserSubscriptionUpdateInput, UserSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which UserSubscription to update.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription updateMany
   */
  export type UserSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSubscriptions.
     */
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which UserSubscriptions to update
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to update.
     */
    limit?: number
  }

  /**
   * UserSubscription updateManyAndReturn
   */
  export type UserSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update UserSubscriptions.
     */
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which UserSubscriptions to update
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSubscription upsert
   */
  export type UserSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSubscription to update in case it exists.
     */
    where: UserSubscriptionWhereUniqueInput
    /**
     * In case the UserSubscription found by the `where` argument doesn't exist, create a new UserSubscription with this data.
     */
    create: XOR<UserSubscriptionCreateInput, UserSubscriptionUncheckedCreateInput>
    /**
     * In case the UserSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSubscriptionUpdateInput, UserSubscriptionUncheckedUpdateInput>
  }

  /**
   * UserSubscription delete
   */
  export type UserSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which UserSubscription to delete.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription deleteMany
   */
  export type UserSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSubscriptions to delete
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * UserSubscription.apiCalls
   */
  export type UserSubscription$apiCallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallInclude<ExtArgs> | null
    where?: ApiCallWhereInput
    orderBy?: ApiCallOrderByWithRelationInput | ApiCallOrderByWithRelationInput[]
    cursor?: ApiCallWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiCallScalarFieldEnum | ApiCallScalarFieldEnum[]
  }

  /**
   * UserSubscription without action
   */
  export type UserSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model ApiCall
   */

  export type AggregateApiCall = {
    _count: ApiCallCountAggregateOutputType | null
    _avg: ApiCallAvgAggregateOutputType | null
    _sum: ApiCallSumAggregateOutputType | null
    _min: ApiCallMinAggregateOutputType | null
    _max: ApiCallMaxAggregateOutputType | null
  }

  export type ApiCallAvgAggregateOutputType = {
    responseStatus: number | null
    responseTimeMs: number | null
  }

  export type ApiCallSumAggregateOutputType = {
    responseStatus: number | null
    responseTimeMs: number | null
  }

  export type ApiCallMinAggregateOutputType = {
    id: string | null
    userId: string | null
    userSubscriptionId: string | null
    siteId: string | null
    endpoint: string | null
    timestamp: Date | null
    responseStatus: number | null
    responseTimeMs: number | null
    createdAt: Date | null
  }

  export type ApiCallMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    userSubscriptionId: string | null
    siteId: string | null
    endpoint: string | null
    timestamp: Date | null
    responseStatus: number | null
    responseTimeMs: number | null
    createdAt: Date | null
  }

  export type ApiCallCountAggregateOutputType = {
    id: number
    userId: number
    userSubscriptionId: number
    siteId: number
    endpoint: number
    timestamp: number
    responseStatus: number
    responseTimeMs: number
    createdAt: number
    _all: number
  }


  export type ApiCallAvgAggregateInputType = {
    responseStatus?: true
    responseTimeMs?: true
  }

  export type ApiCallSumAggregateInputType = {
    responseStatus?: true
    responseTimeMs?: true
  }

  export type ApiCallMinAggregateInputType = {
    id?: true
    userId?: true
    userSubscriptionId?: true
    siteId?: true
    endpoint?: true
    timestamp?: true
    responseStatus?: true
    responseTimeMs?: true
    createdAt?: true
  }

  export type ApiCallMaxAggregateInputType = {
    id?: true
    userId?: true
    userSubscriptionId?: true
    siteId?: true
    endpoint?: true
    timestamp?: true
    responseStatus?: true
    responseTimeMs?: true
    createdAt?: true
  }

  export type ApiCallCountAggregateInputType = {
    id?: true
    userId?: true
    userSubscriptionId?: true
    siteId?: true
    endpoint?: true
    timestamp?: true
    responseStatus?: true
    responseTimeMs?: true
    createdAt?: true
    _all?: true
  }

  export type ApiCallAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiCall to aggregate.
     */
    where?: ApiCallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiCalls to fetch.
     */
    orderBy?: ApiCallOrderByWithRelationInput | ApiCallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiCallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiCalls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiCalls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiCalls
    **/
    _count?: true | ApiCallCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiCallAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiCallSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiCallMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiCallMaxAggregateInputType
  }

  export type GetApiCallAggregateType<T extends ApiCallAggregateArgs> = {
        [P in keyof T & keyof AggregateApiCall]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiCall[P]>
      : GetScalarType<T[P], AggregateApiCall[P]>
  }




  export type ApiCallGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiCallWhereInput
    orderBy?: ApiCallOrderByWithAggregationInput | ApiCallOrderByWithAggregationInput[]
    by: ApiCallScalarFieldEnum[] | ApiCallScalarFieldEnum
    having?: ApiCallScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiCallCountAggregateInputType | true
    _avg?: ApiCallAvgAggregateInputType
    _sum?: ApiCallSumAggregateInputType
    _min?: ApiCallMinAggregateInputType
    _max?: ApiCallMaxAggregateInputType
  }

  export type ApiCallGroupByOutputType = {
    id: string
    userId: string
    userSubscriptionId: string
    siteId: string
    endpoint: string
    timestamp: Date
    responseStatus: number
    responseTimeMs: number
    createdAt: Date
    _count: ApiCallCountAggregateOutputType | null
    _avg: ApiCallAvgAggregateOutputType | null
    _sum: ApiCallSumAggregateOutputType | null
    _min: ApiCallMinAggregateOutputType | null
    _max: ApiCallMaxAggregateOutputType | null
  }

  type GetApiCallGroupByPayload<T extends ApiCallGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiCallGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiCallGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiCallGroupByOutputType[P]>
            : GetScalarType<T[P], ApiCallGroupByOutputType[P]>
        }
      >
    >


  export type ApiCallSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userSubscriptionId?: boolean
    siteId?: boolean
    endpoint?: boolean
    timestamp?: boolean
    responseStatus?: boolean
    responseTimeMs?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    userSubscription?: boolean | UserSubscriptionDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiCall"]>

  export type ApiCallSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userSubscriptionId?: boolean
    siteId?: boolean
    endpoint?: boolean
    timestamp?: boolean
    responseStatus?: boolean
    responseTimeMs?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    userSubscription?: boolean | UserSubscriptionDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiCall"]>

  export type ApiCallSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userSubscriptionId?: boolean
    siteId?: boolean
    endpoint?: boolean
    timestamp?: boolean
    responseStatus?: boolean
    responseTimeMs?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    userSubscription?: boolean | UserSubscriptionDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiCall"]>

  export type ApiCallSelectScalar = {
    id?: boolean
    userId?: boolean
    userSubscriptionId?: boolean
    siteId?: boolean
    endpoint?: boolean
    timestamp?: boolean
    responseStatus?: boolean
    responseTimeMs?: boolean
    createdAt?: boolean
  }

  export type ApiCallOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "userSubscriptionId" | "siteId" | "endpoint" | "timestamp" | "responseStatus" | "responseTimeMs" | "createdAt", ExtArgs["result"]["apiCall"]>
  export type ApiCallInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    userSubscription?: boolean | UserSubscriptionDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }
  export type ApiCallIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    userSubscription?: boolean | UserSubscriptionDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }
  export type ApiCallIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    userSubscription?: boolean | UserSubscriptionDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }

  export type $ApiCallPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiCall"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      userSubscription: Prisma.$UserSubscriptionPayload<ExtArgs>
      site: Prisma.$SitePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      userSubscriptionId: string
      siteId: string
      endpoint: string
      timestamp: Date
      responseStatus: number
      responseTimeMs: number
      createdAt: Date
    }, ExtArgs["result"]["apiCall"]>
    composites: {}
  }

  type ApiCallGetPayload<S extends boolean | null | undefined | ApiCallDefaultArgs> = $Result.GetResult<Prisma.$ApiCallPayload, S>

  type ApiCallCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiCallFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiCallCountAggregateInputType | true
    }

  export interface ApiCallDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiCall'], meta: { name: 'ApiCall' } }
    /**
     * Find zero or one ApiCall that matches the filter.
     * @param {ApiCallFindUniqueArgs} args - Arguments to find a ApiCall
     * @example
     * // Get one ApiCall
     * const apiCall = await prisma.apiCall.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiCallFindUniqueArgs>(args: SelectSubset<T, ApiCallFindUniqueArgs<ExtArgs>>): Prisma__ApiCallClient<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiCall that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiCallFindUniqueOrThrowArgs} args - Arguments to find a ApiCall
     * @example
     * // Get one ApiCall
     * const apiCall = await prisma.apiCall.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiCallFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiCallFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiCallClient<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiCall that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCallFindFirstArgs} args - Arguments to find a ApiCall
     * @example
     * // Get one ApiCall
     * const apiCall = await prisma.apiCall.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiCallFindFirstArgs>(args?: SelectSubset<T, ApiCallFindFirstArgs<ExtArgs>>): Prisma__ApiCallClient<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiCall that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCallFindFirstOrThrowArgs} args - Arguments to find a ApiCall
     * @example
     * // Get one ApiCall
     * const apiCall = await prisma.apiCall.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiCallFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiCallFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiCallClient<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiCalls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCallFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiCalls
     * const apiCalls = await prisma.apiCall.findMany()
     * 
     * // Get first 10 ApiCalls
     * const apiCalls = await prisma.apiCall.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiCallWithIdOnly = await prisma.apiCall.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiCallFindManyArgs>(args?: SelectSubset<T, ApiCallFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiCall.
     * @param {ApiCallCreateArgs} args - Arguments to create a ApiCall.
     * @example
     * // Create one ApiCall
     * const ApiCall = await prisma.apiCall.create({
     *   data: {
     *     // ... data to create a ApiCall
     *   }
     * })
     * 
     */
    create<T extends ApiCallCreateArgs>(args: SelectSubset<T, ApiCallCreateArgs<ExtArgs>>): Prisma__ApiCallClient<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiCalls.
     * @param {ApiCallCreateManyArgs} args - Arguments to create many ApiCalls.
     * @example
     * // Create many ApiCalls
     * const apiCall = await prisma.apiCall.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiCallCreateManyArgs>(args?: SelectSubset<T, ApiCallCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiCalls and returns the data saved in the database.
     * @param {ApiCallCreateManyAndReturnArgs} args - Arguments to create many ApiCalls.
     * @example
     * // Create many ApiCalls
     * const apiCall = await prisma.apiCall.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiCalls and only return the `id`
     * const apiCallWithIdOnly = await prisma.apiCall.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiCallCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiCallCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiCall.
     * @param {ApiCallDeleteArgs} args - Arguments to delete one ApiCall.
     * @example
     * // Delete one ApiCall
     * const ApiCall = await prisma.apiCall.delete({
     *   where: {
     *     // ... filter to delete one ApiCall
     *   }
     * })
     * 
     */
    delete<T extends ApiCallDeleteArgs>(args: SelectSubset<T, ApiCallDeleteArgs<ExtArgs>>): Prisma__ApiCallClient<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiCall.
     * @param {ApiCallUpdateArgs} args - Arguments to update one ApiCall.
     * @example
     * // Update one ApiCall
     * const apiCall = await prisma.apiCall.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiCallUpdateArgs>(args: SelectSubset<T, ApiCallUpdateArgs<ExtArgs>>): Prisma__ApiCallClient<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiCalls.
     * @param {ApiCallDeleteManyArgs} args - Arguments to filter ApiCalls to delete.
     * @example
     * // Delete a few ApiCalls
     * const { count } = await prisma.apiCall.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiCallDeleteManyArgs>(args?: SelectSubset<T, ApiCallDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiCalls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCallUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiCalls
     * const apiCall = await prisma.apiCall.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiCallUpdateManyArgs>(args: SelectSubset<T, ApiCallUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiCalls and returns the data updated in the database.
     * @param {ApiCallUpdateManyAndReturnArgs} args - Arguments to update many ApiCalls.
     * @example
     * // Update many ApiCalls
     * const apiCall = await prisma.apiCall.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiCalls and only return the `id`
     * const apiCallWithIdOnly = await prisma.apiCall.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApiCallUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiCallUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiCall.
     * @param {ApiCallUpsertArgs} args - Arguments to update or create a ApiCall.
     * @example
     * // Update or create a ApiCall
     * const apiCall = await prisma.apiCall.upsert({
     *   create: {
     *     // ... data to create a ApiCall
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiCall we want to update
     *   }
     * })
     */
    upsert<T extends ApiCallUpsertArgs>(args: SelectSubset<T, ApiCallUpsertArgs<ExtArgs>>): Prisma__ApiCallClient<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiCalls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCallCountArgs} args - Arguments to filter ApiCalls to count.
     * @example
     * // Count the number of ApiCalls
     * const count = await prisma.apiCall.count({
     *   where: {
     *     // ... the filter for the ApiCalls we want to count
     *   }
     * })
    **/
    count<T extends ApiCallCountArgs>(
      args?: Subset<T, ApiCallCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiCallCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiCall.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCallAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiCallAggregateArgs>(args: Subset<T, ApiCallAggregateArgs>): Prisma.PrismaPromise<GetApiCallAggregateType<T>>

    /**
     * Group by ApiCall.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCallGroupByArgs} args - Group by arguments.
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
      T extends ApiCallGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiCallGroupByArgs['orderBy'] }
        : { orderBy?: ApiCallGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApiCallGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiCallGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiCall model
   */
  readonly fields: ApiCallFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiCall.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiCallClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userSubscription<T extends UserSubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserSubscriptionDefaultArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ApiCall model
   */
  interface ApiCallFieldRefs {
    readonly id: FieldRef<"ApiCall", 'String'>
    readonly userId: FieldRef<"ApiCall", 'String'>
    readonly userSubscriptionId: FieldRef<"ApiCall", 'String'>
    readonly siteId: FieldRef<"ApiCall", 'String'>
    readonly endpoint: FieldRef<"ApiCall", 'String'>
    readonly timestamp: FieldRef<"ApiCall", 'DateTime'>
    readonly responseStatus: FieldRef<"ApiCall", 'Int'>
    readonly responseTimeMs: FieldRef<"ApiCall", 'Int'>
    readonly createdAt: FieldRef<"ApiCall", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiCall findUnique
   */
  export type ApiCallFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallInclude<ExtArgs> | null
    /**
     * Filter, which ApiCall to fetch.
     */
    where: ApiCallWhereUniqueInput
  }

  /**
   * ApiCall findUniqueOrThrow
   */
  export type ApiCallFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallInclude<ExtArgs> | null
    /**
     * Filter, which ApiCall to fetch.
     */
    where: ApiCallWhereUniqueInput
  }

  /**
   * ApiCall findFirst
   */
  export type ApiCallFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallInclude<ExtArgs> | null
    /**
     * Filter, which ApiCall to fetch.
     */
    where?: ApiCallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiCalls to fetch.
     */
    orderBy?: ApiCallOrderByWithRelationInput | ApiCallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiCalls.
     */
    cursor?: ApiCallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiCalls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiCalls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiCalls.
     */
    distinct?: ApiCallScalarFieldEnum | ApiCallScalarFieldEnum[]
  }

  /**
   * ApiCall findFirstOrThrow
   */
  export type ApiCallFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallInclude<ExtArgs> | null
    /**
     * Filter, which ApiCall to fetch.
     */
    where?: ApiCallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiCalls to fetch.
     */
    orderBy?: ApiCallOrderByWithRelationInput | ApiCallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiCalls.
     */
    cursor?: ApiCallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiCalls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiCalls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiCalls.
     */
    distinct?: ApiCallScalarFieldEnum | ApiCallScalarFieldEnum[]
  }

  /**
   * ApiCall findMany
   */
  export type ApiCallFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallInclude<ExtArgs> | null
    /**
     * Filter, which ApiCalls to fetch.
     */
    where?: ApiCallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiCalls to fetch.
     */
    orderBy?: ApiCallOrderByWithRelationInput | ApiCallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiCalls.
     */
    cursor?: ApiCallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiCalls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiCalls.
     */
    skip?: number
    distinct?: ApiCallScalarFieldEnum | ApiCallScalarFieldEnum[]
  }

  /**
   * ApiCall create
   */
  export type ApiCallCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiCall.
     */
    data: XOR<ApiCallCreateInput, ApiCallUncheckedCreateInput>
  }

  /**
   * ApiCall createMany
   */
  export type ApiCallCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiCalls.
     */
    data: ApiCallCreateManyInput | ApiCallCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiCall createManyAndReturn
   */
  export type ApiCallCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * The data used to create many ApiCalls.
     */
    data: ApiCallCreateManyInput | ApiCallCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiCall update
   */
  export type ApiCallUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiCall.
     */
    data: XOR<ApiCallUpdateInput, ApiCallUncheckedUpdateInput>
    /**
     * Choose, which ApiCall to update.
     */
    where: ApiCallWhereUniqueInput
  }

  /**
   * ApiCall updateMany
   */
  export type ApiCallUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiCalls.
     */
    data: XOR<ApiCallUpdateManyMutationInput, ApiCallUncheckedUpdateManyInput>
    /**
     * Filter which ApiCalls to update
     */
    where?: ApiCallWhereInput
    /**
     * Limit how many ApiCalls to update.
     */
    limit?: number
  }

  /**
   * ApiCall updateManyAndReturn
   */
  export type ApiCallUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * The data used to update ApiCalls.
     */
    data: XOR<ApiCallUpdateManyMutationInput, ApiCallUncheckedUpdateManyInput>
    /**
     * Filter which ApiCalls to update
     */
    where?: ApiCallWhereInput
    /**
     * Limit how many ApiCalls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiCall upsert
   */
  export type ApiCallUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiCall to update in case it exists.
     */
    where: ApiCallWhereUniqueInput
    /**
     * In case the ApiCall found by the `where` argument doesn't exist, create a new ApiCall with this data.
     */
    create: XOR<ApiCallCreateInput, ApiCallUncheckedCreateInput>
    /**
     * In case the ApiCall was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiCallUpdateInput, ApiCallUncheckedUpdateInput>
  }

  /**
   * ApiCall delete
   */
  export type ApiCallDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallInclude<ExtArgs> | null
    /**
     * Filter which ApiCall to delete.
     */
    where: ApiCallWhereUniqueInput
  }

  /**
   * ApiCall deleteMany
   */
  export type ApiCallDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiCalls to delete
     */
    where?: ApiCallWhereInput
    /**
     * Limit how many ApiCalls to delete.
     */
    limit?: number
  }

  /**
   * ApiCall without action
   */
  export type ApiCallDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiCallInclude<ExtArgs> | null
  }


  /**
   * Model SubscriptionSite
   */

  export type AggregateSubscriptionSite = {
    _count: SubscriptionSiteCountAggregateOutputType | null
    _min: SubscriptionSiteMinAggregateOutputType | null
    _max: SubscriptionSiteMaxAggregateOutputType | null
  }

  export type SubscriptionSiteMinAggregateOutputType = {
    id: string | null
    subscriptionId: string | null
    siteId: string | null
    createdAt: Date | null
  }

  export type SubscriptionSiteMaxAggregateOutputType = {
    id: string | null
    subscriptionId: string | null
    siteId: string | null
    createdAt: Date | null
  }

  export type SubscriptionSiteCountAggregateOutputType = {
    id: number
    subscriptionId: number
    siteId: number
    createdAt: number
    _all: number
  }


  export type SubscriptionSiteMinAggregateInputType = {
    id?: true
    subscriptionId?: true
    siteId?: true
    createdAt?: true
  }

  export type SubscriptionSiteMaxAggregateInputType = {
    id?: true
    subscriptionId?: true
    siteId?: true
    createdAt?: true
  }

  export type SubscriptionSiteCountAggregateInputType = {
    id?: true
    subscriptionId?: true
    siteId?: true
    createdAt?: true
    _all?: true
  }

  export type SubscriptionSiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionSite to aggregate.
     */
    where?: SubscriptionSiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionSites to fetch.
     */
    orderBy?: SubscriptionSiteOrderByWithRelationInput | SubscriptionSiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionSiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionSites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionSites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionSites
    **/
    _count?: true | SubscriptionSiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionSiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionSiteMaxAggregateInputType
  }

  export type GetSubscriptionSiteAggregateType<T extends SubscriptionSiteAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionSite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionSite[P]>
      : GetScalarType<T[P], AggregateSubscriptionSite[P]>
  }




  export type SubscriptionSiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionSiteWhereInput
    orderBy?: SubscriptionSiteOrderByWithAggregationInput | SubscriptionSiteOrderByWithAggregationInput[]
    by: SubscriptionSiteScalarFieldEnum[] | SubscriptionSiteScalarFieldEnum
    having?: SubscriptionSiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionSiteCountAggregateInputType | true
    _min?: SubscriptionSiteMinAggregateInputType
    _max?: SubscriptionSiteMaxAggregateInputType
  }

  export type SubscriptionSiteGroupByOutputType = {
    id: string
    subscriptionId: string
    siteId: string
    createdAt: Date
    _count: SubscriptionSiteCountAggregateOutputType | null
    _min: SubscriptionSiteMinAggregateOutputType | null
    _max: SubscriptionSiteMaxAggregateOutputType | null
  }

  type GetSubscriptionSiteGroupByPayload<T extends SubscriptionSiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionSiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionSiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionSiteGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionSiteGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    siteId?: boolean
    createdAt?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionSite"]>

  export type SubscriptionSiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    siteId?: boolean
    createdAt?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionSite"]>

  export type SubscriptionSiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    siteId?: boolean
    createdAt?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionSite"]>

  export type SubscriptionSiteSelectScalar = {
    id?: boolean
    subscriptionId?: boolean
    siteId?: boolean
    createdAt?: boolean
  }

  export type SubscriptionSiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subscriptionId" | "siteId" | "createdAt", ExtArgs["result"]["subscriptionSite"]>
  export type SubscriptionSiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }
  export type SubscriptionSiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }
  export type SubscriptionSiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }

  export type $SubscriptionSitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionSite"
    objects: {
      subscription: Prisma.$SubscriptionPayload<ExtArgs>
      site: Prisma.$SitePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subscriptionId: string
      siteId: string
      createdAt: Date
    }, ExtArgs["result"]["subscriptionSite"]>
    composites: {}
  }

  type SubscriptionSiteGetPayload<S extends boolean | null | undefined | SubscriptionSiteDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionSitePayload, S>

  type SubscriptionSiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionSiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionSiteCountAggregateInputType | true
    }

  export interface SubscriptionSiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionSite'], meta: { name: 'SubscriptionSite' } }
    /**
     * Find zero or one SubscriptionSite that matches the filter.
     * @param {SubscriptionSiteFindUniqueArgs} args - Arguments to find a SubscriptionSite
     * @example
     * // Get one SubscriptionSite
     * const subscriptionSite = await prisma.subscriptionSite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionSiteFindUniqueArgs>(args: SelectSubset<T, SubscriptionSiteFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionSiteClient<$Result.GetResult<Prisma.$SubscriptionSitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubscriptionSite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionSiteFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionSite
     * @example
     * // Get one SubscriptionSite
     * const subscriptionSite = await prisma.subscriptionSite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionSiteFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionSiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionSiteClient<$Result.GetResult<Prisma.$SubscriptionSitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionSite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionSiteFindFirstArgs} args - Arguments to find a SubscriptionSite
     * @example
     * // Get one SubscriptionSite
     * const subscriptionSite = await prisma.subscriptionSite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionSiteFindFirstArgs>(args?: SelectSubset<T, SubscriptionSiteFindFirstArgs<ExtArgs>>): Prisma__SubscriptionSiteClient<$Result.GetResult<Prisma.$SubscriptionSitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionSite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionSiteFindFirstOrThrowArgs} args - Arguments to find a SubscriptionSite
     * @example
     * // Get one SubscriptionSite
     * const subscriptionSite = await prisma.subscriptionSite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionSiteFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionSiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionSiteClient<$Result.GetResult<Prisma.$SubscriptionSitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubscriptionSites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionSiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionSites
     * const subscriptionSites = await prisma.subscriptionSite.findMany()
     * 
     * // Get first 10 SubscriptionSites
     * const subscriptionSites = await prisma.subscriptionSite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionSiteWithIdOnly = await prisma.subscriptionSite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionSiteFindManyArgs>(args?: SelectSubset<T, SubscriptionSiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionSitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubscriptionSite.
     * @param {SubscriptionSiteCreateArgs} args - Arguments to create a SubscriptionSite.
     * @example
     * // Create one SubscriptionSite
     * const SubscriptionSite = await prisma.subscriptionSite.create({
     *   data: {
     *     // ... data to create a SubscriptionSite
     *   }
     * })
     * 
     */
    create<T extends SubscriptionSiteCreateArgs>(args: SelectSubset<T, SubscriptionSiteCreateArgs<ExtArgs>>): Prisma__SubscriptionSiteClient<$Result.GetResult<Prisma.$SubscriptionSitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubscriptionSites.
     * @param {SubscriptionSiteCreateManyArgs} args - Arguments to create many SubscriptionSites.
     * @example
     * // Create many SubscriptionSites
     * const subscriptionSite = await prisma.subscriptionSite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionSiteCreateManyArgs>(args?: SelectSubset<T, SubscriptionSiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubscriptionSites and returns the data saved in the database.
     * @param {SubscriptionSiteCreateManyAndReturnArgs} args - Arguments to create many SubscriptionSites.
     * @example
     * // Create many SubscriptionSites
     * const subscriptionSite = await prisma.subscriptionSite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubscriptionSites and only return the `id`
     * const subscriptionSiteWithIdOnly = await prisma.subscriptionSite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionSiteCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionSiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionSitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubscriptionSite.
     * @param {SubscriptionSiteDeleteArgs} args - Arguments to delete one SubscriptionSite.
     * @example
     * // Delete one SubscriptionSite
     * const SubscriptionSite = await prisma.subscriptionSite.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionSite
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionSiteDeleteArgs>(args: SelectSubset<T, SubscriptionSiteDeleteArgs<ExtArgs>>): Prisma__SubscriptionSiteClient<$Result.GetResult<Prisma.$SubscriptionSitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubscriptionSite.
     * @param {SubscriptionSiteUpdateArgs} args - Arguments to update one SubscriptionSite.
     * @example
     * // Update one SubscriptionSite
     * const subscriptionSite = await prisma.subscriptionSite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionSiteUpdateArgs>(args: SelectSubset<T, SubscriptionSiteUpdateArgs<ExtArgs>>): Prisma__SubscriptionSiteClient<$Result.GetResult<Prisma.$SubscriptionSitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubscriptionSites.
     * @param {SubscriptionSiteDeleteManyArgs} args - Arguments to filter SubscriptionSites to delete.
     * @example
     * // Delete a few SubscriptionSites
     * const { count } = await prisma.subscriptionSite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionSiteDeleteManyArgs>(args?: SelectSubset<T, SubscriptionSiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionSites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionSiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionSites
     * const subscriptionSite = await prisma.subscriptionSite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionSiteUpdateManyArgs>(args: SelectSubset<T, SubscriptionSiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionSites and returns the data updated in the database.
     * @param {SubscriptionSiteUpdateManyAndReturnArgs} args - Arguments to update many SubscriptionSites.
     * @example
     * // Update many SubscriptionSites
     * const subscriptionSite = await prisma.subscriptionSite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubscriptionSites and only return the `id`
     * const subscriptionSiteWithIdOnly = await prisma.subscriptionSite.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriptionSiteUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionSiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionSitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubscriptionSite.
     * @param {SubscriptionSiteUpsertArgs} args - Arguments to update or create a SubscriptionSite.
     * @example
     * // Update or create a SubscriptionSite
     * const subscriptionSite = await prisma.subscriptionSite.upsert({
     *   create: {
     *     // ... data to create a SubscriptionSite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionSite we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionSiteUpsertArgs>(args: SelectSubset<T, SubscriptionSiteUpsertArgs<ExtArgs>>): Prisma__SubscriptionSiteClient<$Result.GetResult<Prisma.$SubscriptionSitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubscriptionSites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionSiteCountArgs} args - Arguments to filter SubscriptionSites to count.
     * @example
     * // Count the number of SubscriptionSites
     * const count = await prisma.subscriptionSite.count({
     *   where: {
     *     // ... the filter for the SubscriptionSites we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionSiteCountArgs>(
      args?: Subset<T, SubscriptionSiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionSiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionSite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionSiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionSiteAggregateArgs>(args: Subset<T, SubscriptionSiteAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionSiteAggregateType<T>>

    /**
     * Group by SubscriptionSite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionSiteGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionSiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionSiteGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionSiteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionSiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionSiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionSite model
   */
  readonly fields: SubscriptionSiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionSite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionSiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscription<T extends SubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionDefaultArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SubscriptionSite model
   */
  interface SubscriptionSiteFieldRefs {
    readonly id: FieldRef<"SubscriptionSite", 'String'>
    readonly subscriptionId: FieldRef<"SubscriptionSite", 'String'>
    readonly siteId: FieldRef<"SubscriptionSite", 'String'>
    readonly createdAt: FieldRef<"SubscriptionSite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionSite findUnique
   */
  export type SubscriptionSiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionSite
     */
    select?: SubscriptionSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionSite
     */
    omit?: SubscriptionSiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionSiteInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionSite to fetch.
     */
    where: SubscriptionSiteWhereUniqueInput
  }

  /**
   * SubscriptionSite findUniqueOrThrow
   */
  export type SubscriptionSiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionSite
     */
    select?: SubscriptionSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionSite
     */
    omit?: SubscriptionSiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionSiteInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionSite to fetch.
     */
    where: SubscriptionSiteWhereUniqueInput
  }

  /**
   * SubscriptionSite findFirst
   */
  export type SubscriptionSiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionSite
     */
    select?: SubscriptionSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionSite
     */
    omit?: SubscriptionSiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionSiteInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionSite to fetch.
     */
    where?: SubscriptionSiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionSites to fetch.
     */
    orderBy?: SubscriptionSiteOrderByWithRelationInput | SubscriptionSiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionSites.
     */
    cursor?: SubscriptionSiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionSites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionSites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionSites.
     */
    distinct?: SubscriptionSiteScalarFieldEnum | SubscriptionSiteScalarFieldEnum[]
  }

  /**
   * SubscriptionSite findFirstOrThrow
   */
  export type SubscriptionSiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionSite
     */
    select?: SubscriptionSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionSite
     */
    omit?: SubscriptionSiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionSiteInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionSite to fetch.
     */
    where?: SubscriptionSiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionSites to fetch.
     */
    orderBy?: SubscriptionSiteOrderByWithRelationInput | SubscriptionSiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionSites.
     */
    cursor?: SubscriptionSiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionSites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionSites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionSites.
     */
    distinct?: SubscriptionSiteScalarFieldEnum | SubscriptionSiteScalarFieldEnum[]
  }

  /**
   * SubscriptionSite findMany
   */
  export type SubscriptionSiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionSite
     */
    select?: SubscriptionSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionSite
     */
    omit?: SubscriptionSiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionSiteInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionSites to fetch.
     */
    where?: SubscriptionSiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionSites to fetch.
     */
    orderBy?: SubscriptionSiteOrderByWithRelationInput | SubscriptionSiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionSites.
     */
    cursor?: SubscriptionSiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionSites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionSites.
     */
    skip?: number
    distinct?: SubscriptionSiteScalarFieldEnum | SubscriptionSiteScalarFieldEnum[]
  }

  /**
   * SubscriptionSite create
   */
  export type SubscriptionSiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionSite
     */
    select?: SubscriptionSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionSite
     */
    omit?: SubscriptionSiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionSiteInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionSite.
     */
    data: XOR<SubscriptionSiteCreateInput, SubscriptionSiteUncheckedCreateInput>
  }

  /**
   * SubscriptionSite createMany
   */
  export type SubscriptionSiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionSites.
     */
    data: SubscriptionSiteCreateManyInput | SubscriptionSiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionSite createManyAndReturn
   */
  export type SubscriptionSiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionSite
     */
    select?: SubscriptionSiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionSite
     */
    omit?: SubscriptionSiteOmit<ExtArgs> | null
    /**
     * The data used to create many SubscriptionSites.
     */
    data: SubscriptionSiteCreateManyInput | SubscriptionSiteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionSiteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubscriptionSite update
   */
  export type SubscriptionSiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionSite
     */
    select?: SubscriptionSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionSite
     */
    omit?: SubscriptionSiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionSiteInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionSite.
     */
    data: XOR<SubscriptionSiteUpdateInput, SubscriptionSiteUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionSite to update.
     */
    where: SubscriptionSiteWhereUniqueInput
  }

  /**
   * SubscriptionSite updateMany
   */
  export type SubscriptionSiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionSites.
     */
    data: XOR<SubscriptionSiteUpdateManyMutationInput, SubscriptionSiteUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionSites to update
     */
    where?: SubscriptionSiteWhereInput
    /**
     * Limit how many SubscriptionSites to update.
     */
    limit?: number
  }

  /**
   * SubscriptionSite updateManyAndReturn
   */
  export type SubscriptionSiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionSite
     */
    select?: SubscriptionSiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionSite
     */
    omit?: SubscriptionSiteOmit<ExtArgs> | null
    /**
     * The data used to update SubscriptionSites.
     */
    data: XOR<SubscriptionSiteUpdateManyMutationInput, SubscriptionSiteUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionSites to update
     */
    where?: SubscriptionSiteWhereInput
    /**
     * Limit how many SubscriptionSites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionSiteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubscriptionSite upsert
   */
  export type SubscriptionSiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionSite
     */
    select?: SubscriptionSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionSite
     */
    omit?: SubscriptionSiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionSiteInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionSite to update in case it exists.
     */
    where: SubscriptionSiteWhereUniqueInput
    /**
     * In case the SubscriptionSite found by the `where` argument doesn't exist, create a new SubscriptionSite with this data.
     */
    create: XOR<SubscriptionSiteCreateInput, SubscriptionSiteUncheckedCreateInput>
    /**
     * In case the SubscriptionSite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionSiteUpdateInput, SubscriptionSiteUncheckedUpdateInput>
  }

  /**
   * SubscriptionSite delete
   */
  export type SubscriptionSiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionSite
     */
    select?: SubscriptionSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionSite
     */
    omit?: SubscriptionSiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionSiteInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionSite to delete.
     */
    where: SubscriptionSiteWhereUniqueInput
  }

  /**
   * SubscriptionSite deleteMany
   */
  export type SubscriptionSiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionSites to delete
     */
    where?: SubscriptionSiteWhereInput
    /**
     * Limit how many SubscriptionSites to delete.
     */
    limit?: number
  }

  /**
   * SubscriptionSite without action
   */
  export type SubscriptionSiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionSite
     */
    select?: SubscriptionSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionSite
     */
    omit?: SubscriptionSiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionSiteInclude<ExtArgs> | null
  }


  /**
   * Model ReferralTracking
   */

  export type AggregateReferralTracking = {
    _count: ReferralTrackingCountAggregateOutputType | null
    _avg: ReferralTrackingAvgAggregateOutputType | null
    _sum: ReferralTrackingSumAggregateOutputType | null
    _min: ReferralTrackingMinAggregateOutputType | null
    _max: ReferralTrackingMaxAggregateOutputType | null
  }

  export type ReferralTrackingAvgAggregateOutputType = {
    rewardCount: number | null
  }

  export type ReferralTrackingSumAggregateOutputType = {
    rewardCount: number | null
  }

  export type ReferralTrackingMinAggregateOutputType = {
    id: string | null
    referrerId: string | null
    referredId: string | null
    rewardCount: number | null
    createdAt: Date | null
  }

  export type ReferralTrackingMaxAggregateOutputType = {
    id: string | null
    referrerId: string | null
    referredId: string | null
    rewardCount: number | null
    createdAt: Date | null
  }

  export type ReferralTrackingCountAggregateOutputType = {
    id: number
    referrerId: number
    referredId: number
    rewardCount: number
    createdAt: number
    _all: number
  }


  export type ReferralTrackingAvgAggregateInputType = {
    rewardCount?: true
  }

  export type ReferralTrackingSumAggregateInputType = {
    rewardCount?: true
  }

  export type ReferralTrackingMinAggregateInputType = {
    id?: true
    referrerId?: true
    referredId?: true
    rewardCount?: true
    createdAt?: true
  }

  export type ReferralTrackingMaxAggregateInputType = {
    id?: true
    referrerId?: true
    referredId?: true
    rewardCount?: true
    createdAt?: true
  }

  export type ReferralTrackingCountAggregateInputType = {
    id?: true
    referrerId?: true
    referredId?: true
    rewardCount?: true
    createdAt?: true
    _all?: true
  }

  export type ReferralTrackingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferralTracking to aggregate.
     */
    where?: ReferralTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralTrackings to fetch.
     */
    orderBy?: ReferralTrackingOrderByWithRelationInput | ReferralTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferralTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReferralTrackings
    **/
    _count?: true | ReferralTrackingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReferralTrackingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReferralTrackingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferralTrackingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferralTrackingMaxAggregateInputType
  }

  export type GetReferralTrackingAggregateType<T extends ReferralTrackingAggregateArgs> = {
        [P in keyof T & keyof AggregateReferralTracking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferralTracking[P]>
      : GetScalarType<T[P], AggregateReferralTracking[P]>
  }




  export type ReferralTrackingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralTrackingWhereInput
    orderBy?: ReferralTrackingOrderByWithAggregationInput | ReferralTrackingOrderByWithAggregationInput[]
    by: ReferralTrackingScalarFieldEnum[] | ReferralTrackingScalarFieldEnum
    having?: ReferralTrackingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferralTrackingCountAggregateInputType | true
    _avg?: ReferralTrackingAvgAggregateInputType
    _sum?: ReferralTrackingSumAggregateInputType
    _min?: ReferralTrackingMinAggregateInputType
    _max?: ReferralTrackingMaxAggregateInputType
  }

  export type ReferralTrackingGroupByOutputType = {
    id: string
    referrerId: string
    referredId: string
    rewardCount: number
    createdAt: Date
    _count: ReferralTrackingCountAggregateOutputType | null
    _avg: ReferralTrackingAvgAggregateOutputType | null
    _sum: ReferralTrackingSumAggregateOutputType | null
    _min: ReferralTrackingMinAggregateOutputType | null
    _max: ReferralTrackingMaxAggregateOutputType | null
  }

  type GetReferralTrackingGroupByPayload<T extends ReferralTrackingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferralTrackingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferralTrackingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferralTrackingGroupByOutputType[P]>
            : GetScalarType<T[P], ReferralTrackingGroupByOutputType[P]>
        }
      >
    >


  export type ReferralTrackingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referrerId?: boolean
    referredId?: boolean
    rewardCount?: boolean
    createdAt?: boolean
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referred?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referralTracking"]>

  export type ReferralTrackingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referrerId?: boolean
    referredId?: boolean
    rewardCount?: boolean
    createdAt?: boolean
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referred?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referralTracking"]>

  export type ReferralTrackingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referrerId?: boolean
    referredId?: boolean
    rewardCount?: boolean
    createdAt?: boolean
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referred?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referralTracking"]>

  export type ReferralTrackingSelectScalar = {
    id?: boolean
    referrerId?: boolean
    referredId?: boolean
    rewardCount?: boolean
    createdAt?: boolean
  }

  export type ReferralTrackingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "referrerId" | "referredId" | "rewardCount" | "createdAt", ExtArgs["result"]["referralTracking"]>
  export type ReferralTrackingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referred?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReferralTrackingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referred?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReferralTrackingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referred?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReferralTrackingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReferralTracking"
    objects: {
      referrer: Prisma.$UserPayload<ExtArgs>
      referred: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      referrerId: string
      referredId: string
      rewardCount: number
      createdAt: Date
    }, ExtArgs["result"]["referralTracking"]>
    composites: {}
  }

  type ReferralTrackingGetPayload<S extends boolean | null | undefined | ReferralTrackingDefaultArgs> = $Result.GetResult<Prisma.$ReferralTrackingPayload, S>

  type ReferralTrackingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReferralTrackingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferralTrackingCountAggregateInputType | true
    }

  export interface ReferralTrackingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReferralTracking'], meta: { name: 'ReferralTracking' } }
    /**
     * Find zero or one ReferralTracking that matches the filter.
     * @param {ReferralTrackingFindUniqueArgs} args - Arguments to find a ReferralTracking
     * @example
     * // Get one ReferralTracking
     * const referralTracking = await prisma.referralTracking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferralTrackingFindUniqueArgs>(args: SelectSubset<T, ReferralTrackingFindUniqueArgs<ExtArgs>>): Prisma__ReferralTrackingClient<$Result.GetResult<Prisma.$ReferralTrackingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReferralTracking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReferralTrackingFindUniqueOrThrowArgs} args - Arguments to find a ReferralTracking
     * @example
     * // Get one ReferralTracking
     * const referralTracking = await prisma.referralTracking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferralTrackingFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferralTrackingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferralTrackingClient<$Result.GetResult<Prisma.$ReferralTrackingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReferralTracking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralTrackingFindFirstArgs} args - Arguments to find a ReferralTracking
     * @example
     * // Get one ReferralTracking
     * const referralTracking = await prisma.referralTracking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferralTrackingFindFirstArgs>(args?: SelectSubset<T, ReferralTrackingFindFirstArgs<ExtArgs>>): Prisma__ReferralTrackingClient<$Result.GetResult<Prisma.$ReferralTrackingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReferralTracking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralTrackingFindFirstOrThrowArgs} args - Arguments to find a ReferralTracking
     * @example
     * // Get one ReferralTracking
     * const referralTracking = await prisma.referralTracking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferralTrackingFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferralTrackingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferralTrackingClient<$Result.GetResult<Prisma.$ReferralTrackingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReferralTrackings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralTrackingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReferralTrackings
     * const referralTrackings = await prisma.referralTracking.findMany()
     * 
     * // Get first 10 ReferralTrackings
     * const referralTrackings = await prisma.referralTracking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referralTrackingWithIdOnly = await prisma.referralTracking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferralTrackingFindManyArgs>(args?: SelectSubset<T, ReferralTrackingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralTrackingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReferralTracking.
     * @param {ReferralTrackingCreateArgs} args - Arguments to create a ReferralTracking.
     * @example
     * // Create one ReferralTracking
     * const ReferralTracking = await prisma.referralTracking.create({
     *   data: {
     *     // ... data to create a ReferralTracking
     *   }
     * })
     * 
     */
    create<T extends ReferralTrackingCreateArgs>(args: SelectSubset<T, ReferralTrackingCreateArgs<ExtArgs>>): Prisma__ReferralTrackingClient<$Result.GetResult<Prisma.$ReferralTrackingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReferralTrackings.
     * @param {ReferralTrackingCreateManyArgs} args - Arguments to create many ReferralTrackings.
     * @example
     * // Create many ReferralTrackings
     * const referralTracking = await prisma.referralTracking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferralTrackingCreateManyArgs>(args?: SelectSubset<T, ReferralTrackingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReferralTrackings and returns the data saved in the database.
     * @param {ReferralTrackingCreateManyAndReturnArgs} args - Arguments to create many ReferralTrackings.
     * @example
     * // Create many ReferralTrackings
     * const referralTracking = await prisma.referralTracking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReferralTrackings and only return the `id`
     * const referralTrackingWithIdOnly = await prisma.referralTracking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferralTrackingCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferralTrackingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralTrackingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReferralTracking.
     * @param {ReferralTrackingDeleteArgs} args - Arguments to delete one ReferralTracking.
     * @example
     * // Delete one ReferralTracking
     * const ReferralTracking = await prisma.referralTracking.delete({
     *   where: {
     *     // ... filter to delete one ReferralTracking
     *   }
     * })
     * 
     */
    delete<T extends ReferralTrackingDeleteArgs>(args: SelectSubset<T, ReferralTrackingDeleteArgs<ExtArgs>>): Prisma__ReferralTrackingClient<$Result.GetResult<Prisma.$ReferralTrackingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReferralTracking.
     * @param {ReferralTrackingUpdateArgs} args - Arguments to update one ReferralTracking.
     * @example
     * // Update one ReferralTracking
     * const referralTracking = await prisma.referralTracking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferralTrackingUpdateArgs>(args: SelectSubset<T, ReferralTrackingUpdateArgs<ExtArgs>>): Prisma__ReferralTrackingClient<$Result.GetResult<Prisma.$ReferralTrackingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReferralTrackings.
     * @param {ReferralTrackingDeleteManyArgs} args - Arguments to filter ReferralTrackings to delete.
     * @example
     * // Delete a few ReferralTrackings
     * const { count } = await prisma.referralTracking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferralTrackingDeleteManyArgs>(args?: SelectSubset<T, ReferralTrackingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReferralTrackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralTrackingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReferralTrackings
     * const referralTracking = await prisma.referralTracking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferralTrackingUpdateManyArgs>(args: SelectSubset<T, ReferralTrackingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReferralTrackings and returns the data updated in the database.
     * @param {ReferralTrackingUpdateManyAndReturnArgs} args - Arguments to update many ReferralTrackings.
     * @example
     * // Update many ReferralTrackings
     * const referralTracking = await prisma.referralTracking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReferralTrackings and only return the `id`
     * const referralTrackingWithIdOnly = await prisma.referralTracking.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReferralTrackingUpdateManyAndReturnArgs>(args: SelectSubset<T, ReferralTrackingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralTrackingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReferralTracking.
     * @param {ReferralTrackingUpsertArgs} args - Arguments to update or create a ReferralTracking.
     * @example
     * // Update or create a ReferralTracking
     * const referralTracking = await prisma.referralTracking.upsert({
     *   create: {
     *     // ... data to create a ReferralTracking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReferralTracking we want to update
     *   }
     * })
     */
    upsert<T extends ReferralTrackingUpsertArgs>(args: SelectSubset<T, ReferralTrackingUpsertArgs<ExtArgs>>): Prisma__ReferralTrackingClient<$Result.GetResult<Prisma.$ReferralTrackingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReferralTrackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralTrackingCountArgs} args - Arguments to filter ReferralTrackings to count.
     * @example
     * // Count the number of ReferralTrackings
     * const count = await prisma.referralTracking.count({
     *   where: {
     *     // ... the filter for the ReferralTrackings we want to count
     *   }
     * })
    **/
    count<T extends ReferralTrackingCountArgs>(
      args?: Subset<T, ReferralTrackingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferralTrackingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReferralTracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralTrackingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReferralTrackingAggregateArgs>(args: Subset<T, ReferralTrackingAggregateArgs>): Prisma.PrismaPromise<GetReferralTrackingAggregateType<T>>

    /**
     * Group by ReferralTracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralTrackingGroupByArgs} args - Group by arguments.
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
      T extends ReferralTrackingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferralTrackingGroupByArgs['orderBy'] }
        : { orderBy?: ReferralTrackingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReferralTrackingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralTrackingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReferralTracking model
   */
  readonly fields: ReferralTrackingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReferralTracking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferralTrackingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referrer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    referred<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReferralTracking model
   */
  interface ReferralTrackingFieldRefs {
    readonly id: FieldRef<"ReferralTracking", 'String'>
    readonly referrerId: FieldRef<"ReferralTracking", 'String'>
    readonly referredId: FieldRef<"ReferralTracking", 'String'>
    readonly rewardCount: FieldRef<"ReferralTracking", 'Int'>
    readonly createdAt: FieldRef<"ReferralTracking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReferralTracking findUnique
   */
  export type ReferralTrackingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralTracking
     */
    select?: ReferralTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralTracking
     */
    omit?: ReferralTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralTrackingInclude<ExtArgs> | null
    /**
     * Filter, which ReferralTracking to fetch.
     */
    where: ReferralTrackingWhereUniqueInput
  }

  /**
   * ReferralTracking findUniqueOrThrow
   */
  export type ReferralTrackingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralTracking
     */
    select?: ReferralTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralTracking
     */
    omit?: ReferralTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralTrackingInclude<ExtArgs> | null
    /**
     * Filter, which ReferralTracking to fetch.
     */
    where: ReferralTrackingWhereUniqueInput
  }

  /**
   * ReferralTracking findFirst
   */
  export type ReferralTrackingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralTracking
     */
    select?: ReferralTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralTracking
     */
    omit?: ReferralTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralTrackingInclude<ExtArgs> | null
    /**
     * Filter, which ReferralTracking to fetch.
     */
    where?: ReferralTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralTrackings to fetch.
     */
    orderBy?: ReferralTrackingOrderByWithRelationInput | ReferralTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferralTrackings.
     */
    cursor?: ReferralTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferralTrackings.
     */
    distinct?: ReferralTrackingScalarFieldEnum | ReferralTrackingScalarFieldEnum[]
  }

  /**
   * ReferralTracking findFirstOrThrow
   */
  export type ReferralTrackingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralTracking
     */
    select?: ReferralTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralTracking
     */
    omit?: ReferralTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralTrackingInclude<ExtArgs> | null
    /**
     * Filter, which ReferralTracking to fetch.
     */
    where?: ReferralTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralTrackings to fetch.
     */
    orderBy?: ReferralTrackingOrderByWithRelationInput | ReferralTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferralTrackings.
     */
    cursor?: ReferralTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferralTrackings.
     */
    distinct?: ReferralTrackingScalarFieldEnum | ReferralTrackingScalarFieldEnum[]
  }

  /**
   * ReferralTracking findMany
   */
  export type ReferralTrackingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralTracking
     */
    select?: ReferralTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralTracking
     */
    omit?: ReferralTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralTrackingInclude<ExtArgs> | null
    /**
     * Filter, which ReferralTrackings to fetch.
     */
    where?: ReferralTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralTrackings to fetch.
     */
    orderBy?: ReferralTrackingOrderByWithRelationInput | ReferralTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReferralTrackings.
     */
    cursor?: ReferralTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralTrackings.
     */
    skip?: number
    distinct?: ReferralTrackingScalarFieldEnum | ReferralTrackingScalarFieldEnum[]
  }

  /**
   * ReferralTracking create
   */
  export type ReferralTrackingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralTracking
     */
    select?: ReferralTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralTracking
     */
    omit?: ReferralTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralTrackingInclude<ExtArgs> | null
    /**
     * The data needed to create a ReferralTracking.
     */
    data: XOR<ReferralTrackingCreateInput, ReferralTrackingUncheckedCreateInput>
  }

  /**
   * ReferralTracking createMany
   */
  export type ReferralTrackingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReferralTrackings.
     */
    data: ReferralTrackingCreateManyInput | ReferralTrackingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReferralTracking createManyAndReturn
   */
  export type ReferralTrackingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralTracking
     */
    select?: ReferralTrackingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralTracking
     */
    omit?: ReferralTrackingOmit<ExtArgs> | null
    /**
     * The data used to create many ReferralTrackings.
     */
    data: ReferralTrackingCreateManyInput | ReferralTrackingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralTrackingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReferralTracking update
   */
  export type ReferralTrackingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralTracking
     */
    select?: ReferralTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralTracking
     */
    omit?: ReferralTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralTrackingInclude<ExtArgs> | null
    /**
     * The data needed to update a ReferralTracking.
     */
    data: XOR<ReferralTrackingUpdateInput, ReferralTrackingUncheckedUpdateInput>
    /**
     * Choose, which ReferralTracking to update.
     */
    where: ReferralTrackingWhereUniqueInput
  }

  /**
   * ReferralTracking updateMany
   */
  export type ReferralTrackingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReferralTrackings.
     */
    data: XOR<ReferralTrackingUpdateManyMutationInput, ReferralTrackingUncheckedUpdateManyInput>
    /**
     * Filter which ReferralTrackings to update
     */
    where?: ReferralTrackingWhereInput
    /**
     * Limit how many ReferralTrackings to update.
     */
    limit?: number
  }

  /**
   * ReferralTracking updateManyAndReturn
   */
  export type ReferralTrackingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralTracking
     */
    select?: ReferralTrackingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralTracking
     */
    omit?: ReferralTrackingOmit<ExtArgs> | null
    /**
     * The data used to update ReferralTrackings.
     */
    data: XOR<ReferralTrackingUpdateManyMutationInput, ReferralTrackingUncheckedUpdateManyInput>
    /**
     * Filter which ReferralTrackings to update
     */
    where?: ReferralTrackingWhereInput
    /**
     * Limit how many ReferralTrackings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralTrackingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReferralTracking upsert
   */
  export type ReferralTrackingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralTracking
     */
    select?: ReferralTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralTracking
     */
    omit?: ReferralTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralTrackingInclude<ExtArgs> | null
    /**
     * The filter to search for the ReferralTracking to update in case it exists.
     */
    where: ReferralTrackingWhereUniqueInput
    /**
     * In case the ReferralTracking found by the `where` argument doesn't exist, create a new ReferralTracking with this data.
     */
    create: XOR<ReferralTrackingCreateInput, ReferralTrackingUncheckedCreateInput>
    /**
     * In case the ReferralTracking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferralTrackingUpdateInput, ReferralTrackingUncheckedUpdateInput>
  }

  /**
   * ReferralTracking delete
   */
  export type ReferralTrackingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralTracking
     */
    select?: ReferralTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralTracking
     */
    omit?: ReferralTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralTrackingInclude<ExtArgs> | null
    /**
     * Filter which ReferralTracking to delete.
     */
    where: ReferralTrackingWhereUniqueInput
  }

  /**
   * ReferralTracking deleteMany
   */
  export type ReferralTrackingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferralTrackings to delete
     */
    where?: ReferralTrackingWhereInput
    /**
     * Limit how many ReferralTrackings to delete.
     */
    limit?: number
  }

  /**
   * ReferralTracking without action
   */
  export type ReferralTrackingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralTracking
     */
    select?: ReferralTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralTracking
     */
    omit?: ReferralTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralTrackingInclude<ExtArgs> | null
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
    firstName: 'firstName',
    lastName: 'lastName',
    mobile: 'mobile',
    email: 'email',
    referralCode: 'referralCode',
    referredByUser: 'referredByUser',
    remainingFreeRequest: 'remainingFreeRequest',
    signupDate: 'signupDate',
    lastLogin: 'lastLogin',
    loginCount: 'loginCount',
    marketingTag: 'marketingTag',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SiteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    baseURL: 'baseURL',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type SiteScalarFieldEnum = (typeof SiteScalarFieldEnum)[keyof typeof SiteScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    requestLimit: 'requestLimit',
    price: 'price',
    durationDays: 'durationDays',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const UserSubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    subscriptionId: 'subscriptionId',
    startDate: 'startDate',
    endDate: 'endDate',
    isActive: 'isActive',
    requestLimitAtPurchase: 'requestLimitAtPurchase',
    remainingRequest: 'remainingRequest',
    updatedAt: 'updatedAt'
  };

  export type UserSubscriptionScalarFieldEnum = (typeof UserSubscriptionScalarFieldEnum)[keyof typeof UserSubscriptionScalarFieldEnum]


  export const ApiCallScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    userSubscriptionId: 'userSubscriptionId',
    siteId: 'siteId',
    endpoint: 'endpoint',
    timestamp: 'timestamp',
    responseStatus: 'responseStatus',
    responseTimeMs: 'responseTimeMs',
    createdAt: 'createdAt'
  };

  export type ApiCallScalarFieldEnum = (typeof ApiCallScalarFieldEnum)[keyof typeof ApiCallScalarFieldEnum]


  export const SubscriptionSiteScalarFieldEnum: {
    id: 'id',
    subscriptionId: 'subscriptionId',
    siteId: 'siteId',
    createdAt: 'createdAt'
  };

  export type SubscriptionSiteScalarFieldEnum = (typeof SubscriptionSiteScalarFieldEnum)[keyof typeof SubscriptionSiteScalarFieldEnum]


  export const ReferralTrackingScalarFieldEnum: {
    id: 'id',
    referrerId: 'referrerId',
    referredId: 'referredId',
    rewardCount: 'rewardCount',
    createdAt: 'createdAt'
  };

  export type ReferralTrackingScalarFieldEnum = (typeof ReferralTrackingScalarFieldEnum)[keyof typeof ReferralTrackingScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    mobile?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    referralCode?: StringFilter<"User"> | string
    referredByUser?: StringNullableFilter<"User"> | string | null
    remainingFreeRequest?: IntFilter<"User"> | number
    signupDate?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    loginCount?: IntFilter<"User"> | number
    marketingTag?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    referredBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    referrals?: UserListRelationFilter
    sites?: SiteListRelationFilter
    userSubscriptions?: UserSubscriptionListRelationFilter
    apiCalls?: ApiCallListRelationFilter
    referralTracking?: ReferralTrackingListRelationFilter
    referredTracking?: ReferralTrackingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    referralCode?: SortOrder
    referredByUser?: SortOrderInput | SortOrder
    remainingFreeRequest?: SortOrder
    signupDate?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    loginCount?: SortOrder
    marketingTag?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    referredBy?: UserOrderByWithRelationInput
    referrals?: UserOrderByRelationAggregateInput
    sites?: SiteOrderByRelationAggregateInput
    userSubscriptions?: UserSubscriptionOrderByRelationAggregateInput
    apiCalls?: ApiCallOrderByRelationAggregateInput
    referralTracking?: ReferralTrackingOrderByRelationAggregateInput
    referredTracking?: ReferralTrackingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    mobile?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    referralCode?: StringFilter<"User"> | string
    referredByUser?: StringNullableFilter<"User"> | string | null
    remainingFreeRequest?: IntFilter<"User"> | number
    signupDate?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    loginCount?: IntFilter<"User"> | number
    marketingTag?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    referredBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    referrals?: UserListRelationFilter
    sites?: SiteListRelationFilter
    userSubscriptions?: UserSubscriptionListRelationFilter
    apiCalls?: ApiCallListRelationFilter
    referralTracking?: ReferralTrackingListRelationFilter
    referredTracking?: ReferralTrackingListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    referralCode?: SortOrder
    referredByUser?: SortOrderInput | SortOrder
    remainingFreeRequest?: SortOrder
    signupDate?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    loginCount?: SortOrder
    marketingTag?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    mobile?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    referralCode?: StringWithAggregatesFilter<"User"> | string
    referredByUser?: StringNullableWithAggregatesFilter<"User"> | string | null
    remainingFreeRequest?: IntWithAggregatesFilter<"User"> | number
    signupDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    loginCount?: IntWithAggregatesFilter<"User"> | number
    marketingTag?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SiteWhereInput = {
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    id?: StringFilter<"Site"> | string
    name?: StringFilter<"Site"> | string
    baseURL?: StringFilter<"Site"> | string
    description?: StringNullableFilter<"Site"> | string | null
    status?: IntNullableFilter<"Site"> | number | null
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
    userId?: StringFilter<"Site"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    apiCalls?: ApiCallListRelationFilter
    subscriptionSites?: SubscriptionSiteListRelationFilter
  }

  export type SiteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    baseURL?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    apiCalls?: ApiCallOrderByRelationAggregateInput
    subscriptionSites?: SubscriptionSiteOrderByRelationAggregateInput
  }

  export type SiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    name?: StringFilter<"Site"> | string
    baseURL?: StringFilter<"Site"> | string
    description?: StringNullableFilter<"Site"> | string | null
    status?: IntNullableFilter<"Site"> | number | null
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
    userId?: StringFilter<"Site"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    apiCalls?: ApiCallListRelationFilter
    subscriptionSites?: SubscriptionSiteListRelationFilter
  }, "id">

  export type SiteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    baseURL?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: SiteCountOrderByAggregateInput
    _avg?: SiteAvgOrderByAggregateInput
    _max?: SiteMaxOrderByAggregateInput
    _min?: SiteMinOrderByAggregateInput
    _sum?: SiteSumOrderByAggregateInput
  }

  export type SiteScalarWhereWithAggregatesInput = {
    AND?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    OR?: SiteScalarWhereWithAggregatesInput[]
    NOT?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Site"> | string
    name?: StringWithAggregatesFilter<"Site"> | string
    baseURL?: StringWithAggregatesFilter<"Site"> | string
    description?: StringNullableWithAggregatesFilter<"Site"> | string | null
    status?: IntNullableWithAggregatesFilter<"Site"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Site"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Site"> | Date | string
    userId?: StringWithAggregatesFilter<"Site"> | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    name?: StringFilter<"Subscription"> | string
    requestLimit?: IntFilter<"Subscription"> | number
    price?: FloatFilter<"Subscription"> | number
    durationDays?: IntFilter<"Subscription"> | number
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    userSubscriptions?: UserSubscriptionListRelationFilter
    subscriptionSites?: SubscriptionSiteListRelationFilter
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    requestLimit?: SortOrder
    price?: SortOrder
    durationDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userSubscriptions?: UserSubscriptionOrderByRelationAggregateInput
    subscriptionSites?: SubscriptionSiteOrderByRelationAggregateInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    name?: StringFilter<"Subscription"> | string
    requestLimit?: IntFilter<"Subscription"> | number
    price?: FloatFilter<"Subscription"> | number
    durationDays?: IntFilter<"Subscription"> | number
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    userSubscriptions?: UserSubscriptionListRelationFilter
    subscriptionSites?: SubscriptionSiteListRelationFilter
  }, "id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    requestLimit?: SortOrder
    price?: SortOrder
    durationDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    name?: StringWithAggregatesFilter<"Subscription"> | string
    requestLimit?: IntWithAggregatesFilter<"Subscription"> | number
    price?: FloatWithAggregatesFilter<"Subscription"> | number
    durationDays?: IntWithAggregatesFilter<"Subscription"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type UserSubscriptionWhereInput = {
    AND?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    OR?: UserSubscriptionWhereInput[]
    NOT?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    id?: StringFilter<"UserSubscription"> | string
    userId?: StringFilter<"UserSubscription"> | string
    subscriptionId?: StringFilter<"UserSubscription"> | string
    startDate?: DateTimeFilter<"UserSubscription"> | Date | string
    endDate?: DateTimeFilter<"UserSubscription"> | Date | string
    isActive?: BoolFilter<"UserSubscription"> | boolean
    requestLimitAtPurchase?: IntFilter<"UserSubscription"> | number
    remainingRequest?: IntFilter<"UserSubscription"> | number
    updatedAt?: DateTimeFilter<"UserSubscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
    apiCalls?: ApiCallListRelationFilter
  }

  export type UserSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    requestLimitAtPurchase?: SortOrder
    remainingRequest?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    subscription?: SubscriptionOrderByWithRelationInput
    apiCalls?: ApiCallOrderByRelationAggregateInput
  }

  export type UserSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    OR?: UserSubscriptionWhereInput[]
    NOT?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    userId?: StringFilter<"UserSubscription"> | string
    subscriptionId?: StringFilter<"UserSubscription"> | string
    startDate?: DateTimeFilter<"UserSubscription"> | Date | string
    endDate?: DateTimeFilter<"UserSubscription"> | Date | string
    isActive?: BoolFilter<"UserSubscription"> | boolean
    requestLimitAtPurchase?: IntFilter<"UserSubscription"> | number
    remainingRequest?: IntFilter<"UserSubscription"> | number
    updatedAt?: DateTimeFilter<"UserSubscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
    apiCalls?: ApiCallListRelationFilter
  }, "id">

  export type UserSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    requestLimitAtPurchase?: SortOrder
    remainingRequest?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSubscriptionCountOrderByAggregateInput
    _avg?: UserSubscriptionAvgOrderByAggregateInput
    _max?: UserSubscriptionMaxOrderByAggregateInput
    _min?: UserSubscriptionMinOrderByAggregateInput
    _sum?: UserSubscriptionSumOrderByAggregateInput
  }

  export type UserSubscriptionScalarWhereWithAggregatesInput = {
    AND?: UserSubscriptionScalarWhereWithAggregatesInput | UserSubscriptionScalarWhereWithAggregatesInput[]
    OR?: UserSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: UserSubscriptionScalarWhereWithAggregatesInput | UserSubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSubscription"> | string
    userId?: StringWithAggregatesFilter<"UserSubscription"> | string
    subscriptionId?: StringWithAggregatesFilter<"UserSubscription"> | string
    startDate?: DateTimeWithAggregatesFilter<"UserSubscription"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"UserSubscription"> | Date | string
    isActive?: BoolWithAggregatesFilter<"UserSubscription"> | boolean
    requestLimitAtPurchase?: IntWithAggregatesFilter<"UserSubscription"> | number
    remainingRequest?: IntWithAggregatesFilter<"UserSubscription"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"UserSubscription"> | Date | string
  }

  export type ApiCallWhereInput = {
    AND?: ApiCallWhereInput | ApiCallWhereInput[]
    OR?: ApiCallWhereInput[]
    NOT?: ApiCallWhereInput | ApiCallWhereInput[]
    id?: StringFilter<"ApiCall"> | string
    userId?: StringFilter<"ApiCall"> | string
    userSubscriptionId?: StringFilter<"ApiCall"> | string
    siteId?: StringFilter<"ApiCall"> | string
    endpoint?: StringFilter<"ApiCall"> | string
    timestamp?: DateTimeFilter<"ApiCall"> | Date | string
    responseStatus?: IntFilter<"ApiCall"> | number
    responseTimeMs?: IntFilter<"ApiCall"> | number
    createdAt?: DateTimeFilter<"ApiCall"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    userSubscription?: XOR<UserSubscriptionScalarRelationFilter, UserSubscriptionWhereInput>
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
  }

  export type ApiCallOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    userSubscriptionId?: SortOrder
    siteId?: SortOrder
    endpoint?: SortOrder
    timestamp?: SortOrder
    responseStatus?: SortOrder
    responseTimeMs?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    userSubscription?: UserSubscriptionOrderByWithRelationInput
    site?: SiteOrderByWithRelationInput
  }

  export type ApiCallWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApiCallWhereInput | ApiCallWhereInput[]
    OR?: ApiCallWhereInput[]
    NOT?: ApiCallWhereInput | ApiCallWhereInput[]
    userId?: StringFilter<"ApiCall"> | string
    userSubscriptionId?: StringFilter<"ApiCall"> | string
    siteId?: StringFilter<"ApiCall"> | string
    endpoint?: StringFilter<"ApiCall"> | string
    timestamp?: DateTimeFilter<"ApiCall"> | Date | string
    responseStatus?: IntFilter<"ApiCall"> | number
    responseTimeMs?: IntFilter<"ApiCall"> | number
    createdAt?: DateTimeFilter<"ApiCall"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    userSubscription?: XOR<UserSubscriptionScalarRelationFilter, UserSubscriptionWhereInput>
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
  }, "id">

  export type ApiCallOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    userSubscriptionId?: SortOrder
    siteId?: SortOrder
    endpoint?: SortOrder
    timestamp?: SortOrder
    responseStatus?: SortOrder
    responseTimeMs?: SortOrder
    createdAt?: SortOrder
    _count?: ApiCallCountOrderByAggregateInput
    _avg?: ApiCallAvgOrderByAggregateInput
    _max?: ApiCallMaxOrderByAggregateInput
    _min?: ApiCallMinOrderByAggregateInput
    _sum?: ApiCallSumOrderByAggregateInput
  }

  export type ApiCallScalarWhereWithAggregatesInput = {
    AND?: ApiCallScalarWhereWithAggregatesInput | ApiCallScalarWhereWithAggregatesInput[]
    OR?: ApiCallScalarWhereWithAggregatesInput[]
    NOT?: ApiCallScalarWhereWithAggregatesInput | ApiCallScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiCall"> | string
    userId?: StringWithAggregatesFilter<"ApiCall"> | string
    userSubscriptionId?: StringWithAggregatesFilter<"ApiCall"> | string
    siteId?: StringWithAggregatesFilter<"ApiCall"> | string
    endpoint?: StringWithAggregatesFilter<"ApiCall"> | string
    timestamp?: DateTimeWithAggregatesFilter<"ApiCall"> | Date | string
    responseStatus?: IntWithAggregatesFilter<"ApiCall"> | number
    responseTimeMs?: IntWithAggregatesFilter<"ApiCall"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ApiCall"> | Date | string
  }

  export type SubscriptionSiteWhereInput = {
    AND?: SubscriptionSiteWhereInput | SubscriptionSiteWhereInput[]
    OR?: SubscriptionSiteWhereInput[]
    NOT?: SubscriptionSiteWhereInput | SubscriptionSiteWhereInput[]
    id?: StringFilter<"SubscriptionSite"> | string
    subscriptionId?: StringFilter<"SubscriptionSite"> | string
    siteId?: StringFilter<"SubscriptionSite"> | string
    createdAt?: DateTimeFilter<"SubscriptionSite"> | Date | string
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
  }

  export type SubscriptionSiteOrderByWithRelationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    siteId?: SortOrder
    createdAt?: SortOrder
    subscription?: SubscriptionOrderByWithRelationInput
    site?: SiteOrderByWithRelationInput
  }

  export type SubscriptionSiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionSiteWhereInput | SubscriptionSiteWhereInput[]
    OR?: SubscriptionSiteWhereInput[]
    NOT?: SubscriptionSiteWhereInput | SubscriptionSiteWhereInput[]
    subscriptionId?: StringFilter<"SubscriptionSite"> | string
    siteId?: StringFilter<"SubscriptionSite"> | string
    createdAt?: DateTimeFilter<"SubscriptionSite"> | Date | string
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
  }, "id">

  export type SubscriptionSiteOrderByWithAggregationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    siteId?: SortOrder
    createdAt?: SortOrder
    _count?: SubscriptionSiteCountOrderByAggregateInput
    _max?: SubscriptionSiteMaxOrderByAggregateInput
    _min?: SubscriptionSiteMinOrderByAggregateInput
  }

  export type SubscriptionSiteScalarWhereWithAggregatesInput = {
    AND?: SubscriptionSiteScalarWhereWithAggregatesInput | SubscriptionSiteScalarWhereWithAggregatesInput[]
    OR?: SubscriptionSiteScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionSiteScalarWhereWithAggregatesInput | SubscriptionSiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubscriptionSite"> | string
    subscriptionId?: StringWithAggregatesFilter<"SubscriptionSite"> | string
    siteId?: StringWithAggregatesFilter<"SubscriptionSite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SubscriptionSite"> | Date | string
  }

  export type ReferralTrackingWhereInput = {
    AND?: ReferralTrackingWhereInput | ReferralTrackingWhereInput[]
    OR?: ReferralTrackingWhereInput[]
    NOT?: ReferralTrackingWhereInput | ReferralTrackingWhereInput[]
    id?: StringFilter<"ReferralTracking"> | string
    referrerId?: StringFilter<"ReferralTracking"> | string
    referredId?: StringFilter<"ReferralTracking"> | string
    rewardCount?: IntFilter<"ReferralTracking"> | number
    createdAt?: DateTimeFilter<"ReferralTracking"> | Date | string
    referrer?: XOR<UserScalarRelationFilter, UserWhereInput>
    referred?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReferralTrackingOrderByWithRelationInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredId?: SortOrder
    rewardCount?: SortOrder
    createdAt?: SortOrder
    referrer?: UserOrderByWithRelationInput
    referred?: UserOrderByWithRelationInput
  }

  export type ReferralTrackingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReferralTrackingWhereInput | ReferralTrackingWhereInput[]
    OR?: ReferralTrackingWhereInput[]
    NOT?: ReferralTrackingWhereInput | ReferralTrackingWhereInput[]
    referrerId?: StringFilter<"ReferralTracking"> | string
    referredId?: StringFilter<"ReferralTracking"> | string
    rewardCount?: IntFilter<"ReferralTracking"> | number
    createdAt?: DateTimeFilter<"ReferralTracking"> | Date | string
    referrer?: XOR<UserScalarRelationFilter, UserWhereInput>
    referred?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReferralTrackingOrderByWithAggregationInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredId?: SortOrder
    rewardCount?: SortOrder
    createdAt?: SortOrder
    _count?: ReferralTrackingCountOrderByAggregateInput
    _avg?: ReferralTrackingAvgOrderByAggregateInput
    _max?: ReferralTrackingMaxOrderByAggregateInput
    _min?: ReferralTrackingMinOrderByAggregateInput
    _sum?: ReferralTrackingSumOrderByAggregateInput
  }

  export type ReferralTrackingScalarWhereWithAggregatesInput = {
    AND?: ReferralTrackingScalarWhereWithAggregatesInput | ReferralTrackingScalarWhereWithAggregatesInput[]
    OR?: ReferralTrackingScalarWhereWithAggregatesInput[]
    NOT?: ReferralTrackingScalarWhereWithAggregatesInput | ReferralTrackingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReferralTracking"> | string
    referrerId?: StringWithAggregatesFilter<"ReferralTracking"> | string
    referredId?: StringWithAggregatesFilter<"ReferralTracking"> | string
    rewardCount?: IntWithAggregatesFilter<"ReferralTracking"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ReferralTracking"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    mobile: string
    email: string
    referralCode: string
    remainingFreeRequest?: number
    signupDate?: Date | string
    lastLogin?: Date | string | null
    loginCount?: number
    marketingTag?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    sites?: SiteCreateNestedManyWithoutUserInput
    userSubscriptions?: UserSubscriptionCreateNestedManyWithoutUserInput
    apiCalls?: ApiCallCreateNestedManyWithoutUserInput
    referralTracking?: ReferralTrackingCreateNestedManyWithoutReferrerInput
    referredTracking?: ReferralTrackingCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    mobile: string
    email: string
    referralCode: string
    referredByUser?: string | null
    remainingFreeRequest?: number
    signupDate?: Date | string
    lastLogin?: Date | string | null
    loginCount?: number
    marketingTag?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    sites?: SiteUncheckedCreateNestedManyWithoutUserInput
    userSubscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
    apiCalls?: ApiCallUncheckedCreateNestedManyWithoutUserInput
    referralTracking?: ReferralTrackingUncheckedCreateNestedManyWithoutReferrerInput
    referredTracking?: ReferralTrackingUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    remainingFreeRequest?: IntFieldUpdateOperationsInput | number
    signupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    marketingTag?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    sites?: SiteUpdateManyWithoutUserNestedInput
    userSubscriptions?: UserSubscriptionUpdateManyWithoutUserNestedInput
    apiCalls?: ApiCallUpdateManyWithoutUserNestedInput
    referralTracking?: ReferralTrackingUpdateManyWithoutReferrerNestedInput
    referredTracking?: ReferralTrackingUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredByUser?: NullableStringFieldUpdateOperationsInput | string | null
    remainingFreeRequest?: IntFieldUpdateOperationsInput | number
    signupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    marketingTag?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    sites?: SiteUncheckedUpdateManyWithoutUserNestedInput
    userSubscriptions?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    apiCalls?: ApiCallUncheckedUpdateManyWithoutUserNestedInput
    referralTracking?: ReferralTrackingUncheckedUpdateManyWithoutReferrerNestedInput
    referredTracking?: ReferralTrackingUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    mobile: string
    email: string
    referralCode: string
    referredByUser?: string | null
    remainingFreeRequest?: number
    signupDate?: Date | string
    lastLogin?: Date | string | null
    loginCount?: number
    marketingTag?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    remainingFreeRequest?: IntFieldUpdateOperationsInput | number
    signupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    marketingTag?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredByUser?: NullableStringFieldUpdateOperationsInput | string | null
    remainingFreeRequest?: IntFieldUpdateOperationsInput | number
    signupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    marketingTag?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteCreateInput = {
    id?: string
    name: string
    baseURL: string
    description?: string | null
    status?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSitesInput
    apiCalls?: ApiCallCreateNestedManyWithoutSiteInput
    subscriptionSites?: SubscriptionSiteCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateInput = {
    id?: string
    name: string
    baseURL: string
    description?: string | null
    status?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    apiCalls?: ApiCallUncheckedCreateNestedManyWithoutSiteInput
    subscriptionSites?: SubscriptionSiteUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseURL?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSitesNestedInput
    apiCalls?: ApiCallUpdateManyWithoutSiteNestedInput
    subscriptionSites?: SubscriptionSiteUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseURL?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    apiCalls?: ApiCallUncheckedUpdateManyWithoutSiteNestedInput
    subscriptionSites?: SubscriptionSiteUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteCreateManyInput = {
    id?: string
    name: string
    baseURL: string
    description?: string | null
    status?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type SiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseURL?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseURL?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    name: string
    requestLimit: number
    price: number
    durationDays: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userSubscriptions?: UserSubscriptionCreateNestedManyWithoutSubscriptionInput
    subscriptionSites?: SubscriptionSiteCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    name: string
    requestLimit: number
    price: number
    durationDays: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userSubscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutSubscriptionInput
    subscriptionSites?: SubscriptionSiteUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requestLimit?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSubscriptions?: UserSubscriptionUpdateManyWithoutSubscriptionNestedInput
    subscriptionSites?: SubscriptionSiteUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requestLimit?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSubscriptions?: UserSubscriptionUncheckedUpdateManyWithoutSubscriptionNestedInput
    subscriptionSites?: SubscriptionSiteUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    name: string
    requestLimit: number
    price: number
    durationDays: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requestLimit?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requestLimit?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionCreateInput = {
    id?: string
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    requestLimitAtPurchase?: number
    remainingRequest: number
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserSubscriptionsInput
    subscription: SubscriptionCreateNestedOneWithoutUserSubscriptionsInput
    apiCalls?: ApiCallCreateNestedManyWithoutUserSubscriptionInput
  }

  export type UserSubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    subscriptionId: string
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    requestLimitAtPurchase?: number
    remainingRequest: number
    updatedAt?: Date | string
    apiCalls?: ApiCallUncheckedCreateNestedManyWithoutUserSubscriptionInput
  }

  export type UserSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    requestLimitAtPurchase?: IntFieldUpdateOperationsInput | number
    remainingRequest?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserSubscriptionsNestedInput
    subscription?: SubscriptionUpdateOneRequiredWithoutUserSubscriptionsNestedInput
    apiCalls?: ApiCallUpdateManyWithoutUserSubscriptionNestedInput
  }

  export type UserSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    requestLimitAtPurchase?: IntFieldUpdateOperationsInput | number
    remainingRequest?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiCalls?: ApiCallUncheckedUpdateManyWithoutUserSubscriptionNestedInput
  }

  export type UserSubscriptionCreateManyInput = {
    id?: string
    userId: string
    subscriptionId: string
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    requestLimitAtPurchase?: number
    remainingRequest: number
    updatedAt?: Date | string
  }

  export type UserSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    requestLimitAtPurchase?: IntFieldUpdateOperationsInput | number
    remainingRequest?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    requestLimitAtPurchase?: IntFieldUpdateOperationsInput | number
    remainingRequest?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCallCreateInput = {
    id?: string
    endpoint: string
    timestamp?: Date | string
    responseStatus: number
    responseTimeMs: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutApiCallsInput
    userSubscription: UserSubscriptionCreateNestedOneWithoutApiCallsInput
    site: SiteCreateNestedOneWithoutApiCallsInput
  }

  export type ApiCallUncheckedCreateInput = {
    id?: string
    userId: string
    userSubscriptionId: string
    siteId: string
    endpoint: string
    timestamp?: Date | string
    responseStatus: number
    responseTimeMs: number
    createdAt?: Date | string
  }

  export type ApiCallUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApiCallsNestedInput
    userSubscription?: UserSubscriptionUpdateOneRequiredWithoutApiCallsNestedInput
    site?: SiteUpdateOneRequiredWithoutApiCallsNestedInput
  }

  export type ApiCallUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userSubscriptionId?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCallCreateManyInput = {
    id?: string
    userId: string
    userSubscriptionId: string
    siteId: string
    endpoint: string
    timestamp?: Date | string
    responseStatus: number
    responseTimeMs: number
    createdAt?: Date | string
  }

  export type ApiCallUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCallUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userSubscriptionId?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionSiteCreateInput = {
    id?: string
    createdAt?: Date | string
    subscription: SubscriptionCreateNestedOneWithoutSubscriptionSitesInput
    site: SiteCreateNestedOneWithoutSubscriptionSitesInput
  }

  export type SubscriptionSiteUncheckedCreateInput = {
    id?: string
    subscriptionId: string
    siteId: string
    createdAt?: Date | string
  }

  export type SubscriptionSiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneRequiredWithoutSubscriptionSitesNestedInput
    site?: SiteUpdateOneRequiredWithoutSubscriptionSitesNestedInput
  }

  export type SubscriptionSiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionSiteCreateManyInput = {
    id?: string
    subscriptionId: string
    siteId: string
    createdAt?: Date | string
  }

  export type SubscriptionSiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionSiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralTrackingCreateInput = {
    id?: string
    rewardCount: number
    createdAt?: Date | string
    referrer: UserCreateNestedOneWithoutReferralTrackingInput
    referred: UserCreateNestedOneWithoutReferredTrackingInput
  }

  export type ReferralTrackingUncheckedCreateInput = {
    id?: string
    referrerId: string
    referredId: string
    rewardCount: number
    createdAt?: Date | string
  }

  export type ReferralTrackingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rewardCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: UserUpdateOneRequiredWithoutReferralTrackingNestedInput
    referred?: UserUpdateOneRequiredWithoutReferredTrackingNestedInput
  }

  export type ReferralTrackingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    referredId?: StringFieldUpdateOperationsInput | string
    rewardCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralTrackingCreateManyInput = {
    id?: string
    referrerId: string
    referredId: string
    rewardCount: number
    createdAt?: Date | string
  }

  export type ReferralTrackingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rewardCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralTrackingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    referredId?: StringFieldUpdateOperationsInput | string
    rewardCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SiteListRelationFilter = {
    every?: SiteWhereInput
    some?: SiteWhereInput
    none?: SiteWhereInput
  }

  export type UserSubscriptionListRelationFilter = {
    every?: UserSubscriptionWhereInput
    some?: UserSubscriptionWhereInput
    none?: UserSubscriptionWhereInput
  }

  export type ApiCallListRelationFilter = {
    every?: ApiCallWhereInput
    some?: ApiCallWhereInput
    none?: ApiCallWhereInput
  }

  export type ReferralTrackingListRelationFilter = {
    every?: ReferralTrackingWhereInput
    some?: ReferralTrackingWhereInput
    none?: ReferralTrackingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiCallOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReferralTrackingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    referralCode?: SortOrder
    referredByUser?: SortOrder
    remainingFreeRequest?: SortOrder
    signupDate?: SortOrder
    lastLogin?: SortOrder
    loginCount?: SortOrder
    marketingTag?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    remainingFreeRequest?: SortOrder
    loginCount?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    referralCode?: SortOrder
    referredByUser?: SortOrder
    remainingFreeRequest?: SortOrder
    signupDate?: SortOrder
    lastLogin?: SortOrder
    loginCount?: SortOrder
    marketingTag?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    referralCode?: SortOrder
    referredByUser?: SortOrder
    remainingFreeRequest?: SortOrder
    signupDate?: SortOrder
    lastLogin?: SortOrder
    loginCount?: SortOrder
    marketingTag?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    remainingFreeRequest?: SortOrder
    loginCount?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SubscriptionSiteListRelationFilter = {
    every?: SubscriptionSiteWhereInput
    some?: SubscriptionSiteWhereInput
    none?: SubscriptionSiteWhereInput
  }

  export type SubscriptionSiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SiteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    baseURL?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SiteAvgOrderByAggregateInput = {
    status?: SortOrder
  }

  export type SiteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    baseURL?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SiteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    baseURL?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SiteSumOrderByAggregateInput = {
    status?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    requestLimit?: SortOrder
    price?: SortOrder
    durationDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    requestLimit?: SortOrder
    price?: SortOrder
    durationDays?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    requestLimit?: SortOrder
    price?: SortOrder
    durationDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    requestLimit?: SortOrder
    price?: SortOrder
    durationDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    requestLimit?: SortOrder
    price?: SortOrder
    durationDays?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SubscriptionScalarRelationFilter = {
    is?: SubscriptionWhereInput
    isNot?: SubscriptionWhereInput
  }

  export type UserSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    requestLimitAtPurchase?: SortOrder
    remainingRequest?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSubscriptionAvgOrderByAggregateInput = {
    requestLimitAtPurchase?: SortOrder
    remainingRequest?: SortOrder
  }

  export type UserSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    requestLimitAtPurchase?: SortOrder
    remainingRequest?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    requestLimitAtPurchase?: SortOrder
    remainingRequest?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSubscriptionSumOrderByAggregateInput = {
    requestLimitAtPurchase?: SortOrder
    remainingRequest?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserSubscriptionScalarRelationFilter = {
    is?: UserSubscriptionWhereInput
    isNot?: UserSubscriptionWhereInput
  }

  export type SiteScalarRelationFilter = {
    is?: SiteWhereInput
    isNot?: SiteWhereInput
  }

  export type ApiCallCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userSubscriptionId?: SortOrder
    siteId?: SortOrder
    endpoint?: SortOrder
    timestamp?: SortOrder
    responseStatus?: SortOrder
    responseTimeMs?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiCallAvgOrderByAggregateInput = {
    responseStatus?: SortOrder
    responseTimeMs?: SortOrder
  }

  export type ApiCallMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userSubscriptionId?: SortOrder
    siteId?: SortOrder
    endpoint?: SortOrder
    timestamp?: SortOrder
    responseStatus?: SortOrder
    responseTimeMs?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiCallMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userSubscriptionId?: SortOrder
    siteId?: SortOrder
    endpoint?: SortOrder
    timestamp?: SortOrder
    responseStatus?: SortOrder
    responseTimeMs?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiCallSumOrderByAggregateInput = {
    responseStatus?: SortOrder
    responseTimeMs?: SortOrder
  }

  export type SubscriptionSiteCountOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    siteId?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscriptionSiteMaxOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    siteId?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscriptionSiteMinOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    siteId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralTrackingCountOrderByAggregateInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredId?: SortOrder
    rewardCount?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralTrackingAvgOrderByAggregateInput = {
    rewardCount?: SortOrder
  }

  export type ReferralTrackingMaxOrderByAggregateInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredId?: SortOrder
    rewardCount?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralTrackingMinOrderByAggregateInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredId?: SortOrder
    rewardCount?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralTrackingSumOrderByAggregateInput = {
    rewardCount?: SortOrder
  }

  export type UserCreateNestedOneWithoutReferralsInput = {
    create?: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutReferredByInput = {
    create?: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput> | UserCreateWithoutReferredByInput[] | UserUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByInput | UserCreateOrConnectWithoutReferredByInput[]
    createMany?: UserCreateManyReferredByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SiteCreateNestedManyWithoutUserInput = {
    create?: XOR<SiteCreateWithoutUserInput, SiteUncheckedCreateWithoutUserInput> | SiteCreateWithoutUserInput[] | SiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutUserInput | SiteCreateOrConnectWithoutUserInput[]
    createMany?: SiteCreateManyUserInputEnvelope
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
  }

  export type UserSubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type ApiCallCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiCallCreateWithoutUserInput, ApiCallUncheckedCreateWithoutUserInput> | ApiCallCreateWithoutUserInput[] | ApiCallUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiCallCreateOrConnectWithoutUserInput | ApiCallCreateOrConnectWithoutUserInput[]
    createMany?: ApiCallCreateManyUserInputEnvelope
    connect?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
  }

  export type ReferralTrackingCreateNestedManyWithoutReferrerInput = {
    create?: XOR<ReferralTrackingCreateWithoutReferrerInput, ReferralTrackingUncheckedCreateWithoutReferrerInput> | ReferralTrackingCreateWithoutReferrerInput[] | ReferralTrackingUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralTrackingCreateOrConnectWithoutReferrerInput | ReferralTrackingCreateOrConnectWithoutReferrerInput[]
    createMany?: ReferralTrackingCreateManyReferrerInputEnvelope
    connect?: ReferralTrackingWhereUniqueInput | ReferralTrackingWhereUniqueInput[]
  }

  export type ReferralTrackingCreateNestedManyWithoutReferredInput = {
    create?: XOR<ReferralTrackingCreateWithoutReferredInput, ReferralTrackingUncheckedCreateWithoutReferredInput> | ReferralTrackingCreateWithoutReferredInput[] | ReferralTrackingUncheckedCreateWithoutReferredInput[]
    connectOrCreate?: ReferralTrackingCreateOrConnectWithoutReferredInput | ReferralTrackingCreateOrConnectWithoutReferredInput[]
    createMany?: ReferralTrackingCreateManyReferredInputEnvelope
    connect?: ReferralTrackingWhereUniqueInput | ReferralTrackingWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutReferredByInput = {
    create?: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput> | UserCreateWithoutReferredByInput[] | UserUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByInput | UserCreateOrConnectWithoutReferredByInput[]
    createMany?: UserCreateManyReferredByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SiteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SiteCreateWithoutUserInput, SiteUncheckedCreateWithoutUserInput> | SiteCreateWithoutUserInput[] | SiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutUserInput | SiteCreateOrConnectWithoutUserInput[]
    createMany?: SiteCreateManyUserInputEnvelope
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
  }

  export type UserSubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type ApiCallUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiCallCreateWithoutUserInput, ApiCallUncheckedCreateWithoutUserInput> | ApiCallCreateWithoutUserInput[] | ApiCallUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiCallCreateOrConnectWithoutUserInput | ApiCallCreateOrConnectWithoutUserInput[]
    createMany?: ApiCallCreateManyUserInputEnvelope
    connect?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
  }

  export type ReferralTrackingUncheckedCreateNestedManyWithoutReferrerInput = {
    create?: XOR<ReferralTrackingCreateWithoutReferrerInput, ReferralTrackingUncheckedCreateWithoutReferrerInput> | ReferralTrackingCreateWithoutReferrerInput[] | ReferralTrackingUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralTrackingCreateOrConnectWithoutReferrerInput | ReferralTrackingCreateOrConnectWithoutReferrerInput[]
    createMany?: ReferralTrackingCreateManyReferrerInputEnvelope
    connect?: ReferralTrackingWhereUniqueInput | ReferralTrackingWhereUniqueInput[]
  }

  export type ReferralTrackingUncheckedCreateNestedManyWithoutReferredInput = {
    create?: XOR<ReferralTrackingCreateWithoutReferredInput, ReferralTrackingUncheckedCreateWithoutReferredInput> | ReferralTrackingCreateWithoutReferredInput[] | ReferralTrackingUncheckedCreateWithoutReferredInput[]
    connectOrCreate?: ReferralTrackingCreateOrConnectWithoutReferredInput | ReferralTrackingCreateOrConnectWithoutReferredInput[]
    createMany?: ReferralTrackingCreateManyReferredInputEnvelope
    connect?: ReferralTrackingWhereUniqueInput | ReferralTrackingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type UserUpdateOneWithoutReferralsNestedInput = {
    create?: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralsInput
    upsert?: UserUpsertWithoutReferralsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferralsInput, UserUpdateWithoutReferralsInput>, UserUncheckedUpdateWithoutReferralsInput>
  }

  export type UserUpdateManyWithoutReferredByNestedInput = {
    create?: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput> | UserCreateWithoutReferredByInput[] | UserUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByInput | UserCreateOrConnectWithoutReferredByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReferredByInput | UserUpsertWithWhereUniqueWithoutReferredByInput[]
    createMany?: UserCreateManyReferredByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReferredByInput | UserUpdateWithWhereUniqueWithoutReferredByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReferredByInput | UserUpdateManyWithWhereWithoutReferredByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SiteUpdateManyWithoutUserNestedInput = {
    create?: XOR<SiteCreateWithoutUserInput, SiteUncheckedCreateWithoutUserInput> | SiteCreateWithoutUserInput[] | SiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutUserInput | SiteCreateOrConnectWithoutUserInput[]
    upsert?: SiteUpsertWithWhereUniqueWithoutUserInput | SiteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SiteCreateManyUserInputEnvelope
    set?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    disconnect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    delete?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    update?: SiteUpdateWithWhereUniqueWithoutUserInput | SiteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SiteUpdateManyWithWhereWithoutUserInput | SiteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SiteScalarWhereInput | SiteScalarWhereInput[]
  }

  export type UserSubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutUserInput | UserSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutUserInput | UserSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutUserInput | UserSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type ApiCallUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiCallCreateWithoutUserInput, ApiCallUncheckedCreateWithoutUserInput> | ApiCallCreateWithoutUserInput[] | ApiCallUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiCallCreateOrConnectWithoutUserInput | ApiCallCreateOrConnectWithoutUserInput[]
    upsert?: ApiCallUpsertWithWhereUniqueWithoutUserInput | ApiCallUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiCallCreateManyUserInputEnvelope
    set?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
    disconnect?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
    delete?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
    connect?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
    update?: ApiCallUpdateWithWhereUniqueWithoutUserInput | ApiCallUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiCallUpdateManyWithWhereWithoutUserInput | ApiCallUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiCallScalarWhereInput | ApiCallScalarWhereInput[]
  }

  export type ReferralTrackingUpdateManyWithoutReferrerNestedInput = {
    create?: XOR<ReferralTrackingCreateWithoutReferrerInput, ReferralTrackingUncheckedCreateWithoutReferrerInput> | ReferralTrackingCreateWithoutReferrerInput[] | ReferralTrackingUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralTrackingCreateOrConnectWithoutReferrerInput | ReferralTrackingCreateOrConnectWithoutReferrerInput[]
    upsert?: ReferralTrackingUpsertWithWhereUniqueWithoutReferrerInput | ReferralTrackingUpsertWithWhereUniqueWithoutReferrerInput[]
    createMany?: ReferralTrackingCreateManyReferrerInputEnvelope
    set?: ReferralTrackingWhereUniqueInput | ReferralTrackingWhereUniqueInput[]
    disconnect?: ReferralTrackingWhereUniqueInput | ReferralTrackingWhereUniqueInput[]
    delete?: ReferralTrackingWhereUniqueInput | ReferralTrackingWhereUniqueInput[]
    connect?: ReferralTrackingWhereUniqueInput | ReferralTrackingWhereUniqueInput[]
    update?: ReferralTrackingUpdateWithWhereUniqueWithoutReferrerInput | ReferralTrackingUpdateWithWhereUniqueWithoutReferrerInput[]
    updateMany?: ReferralTrackingUpdateManyWithWhereWithoutReferrerInput | ReferralTrackingUpdateManyWithWhereWithoutReferrerInput[]
    deleteMany?: ReferralTrackingScalarWhereInput | ReferralTrackingScalarWhereInput[]
  }

  export type ReferralTrackingUpdateManyWithoutReferredNestedInput = {
    create?: XOR<ReferralTrackingCreateWithoutReferredInput, ReferralTrackingUncheckedCreateWithoutReferredInput> | ReferralTrackingCreateWithoutReferredInput[] | ReferralTrackingUncheckedCreateWithoutReferredInput[]
    connectOrCreate?: ReferralTrackingCreateOrConnectWithoutReferredInput | ReferralTrackingCreateOrConnectWithoutReferredInput[]
    upsert?: ReferralTrackingUpsertWithWhereUniqueWithoutReferredInput | ReferralTrackingUpsertWithWhereUniqueWithoutReferredInput[]
    createMany?: ReferralTrackingCreateManyReferredInputEnvelope
    set?: ReferralTrackingWhereUniqueInput | ReferralTrackingWhereUniqueInput[]
    disconnect?: ReferralTrackingWhereUniqueInput | ReferralTrackingWhereUniqueInput[]
    delete?: ReferralTrackingWhereUniqueInput | ReferralTrackingWhereUniqueInput[]
    connect?: ReferralTrackingWhereUniqueInput | ReferralTrackingWhereUniqueInput[]
    update?: ReferralTrackingUpdateWithWhereUniqueWithoutReferredInput | ReferralTrackingUpdateWithWhereUniqueWithoutReferredInput[]
    updateMany?: ReferralTrackingUpdateManyWithWhereWithoutReferredInput | ReferralTrackingUpdateManyWithWhereWithoutReferredInput[]
    deleteMany?: ReferralTrackingScalarWhereInput | ReferralTrackingScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutReferredByNestedInput = {
    create?: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput> | UserCreateWithoutReferredByInput[] | UserUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByInput | UserCreateOrConnectWithoutReferredByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReferredByInput | UserUpsertWithWhereUniqueWithoutReferredByInput[]
    createMany?: UserCreateManyReferredByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReferredByInput | UserUpdateWithWhereUniqueWithoutReferredByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReferredByInput | UserUpdateManyWithWhereWithoutReferredByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SiteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SiteCreateWithoutUserInput, SiteUncheckedCreateWithoutUserInput> | SiteCreateWithoutUserInput[] | SiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutUserInput | SiteCreateOrConnectWithoutUserInput[]
    upsert?: SiteUpsertWithWhereUniqueWithoutUserInput | SiteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SiteCreateManyUserInputEnvelope
    set?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    disconnect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    delete?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    update?: SiteUpdateWithWhereUniqueWithoutUserInput | SiteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SiteUpdateManyWithWhereWithoutUserInput | SiteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SiteScalarWhereInput | SiteScalarWhereInput[]
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutUserInput | UserSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutUserInput | UserSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutUserInput | UserSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type ApiCallUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiCallCreateWithoutUserInput, ApiCallUncheckedCreateWithoutUserInput> | ApiCallCreateWithoutUserInput[] | ApiCallUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiCallCreateOrConnectWithoutUserInput | ApiCallCreateOrConnectWithoutUserInput[]
    upsert?: ApiCallUpsertWithWhereUniqueWithoutUserInput | ApiCallUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiCallCreateManyUserInputEnvelope
    set?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
    disconnect?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
    delete?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
    connect?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
    update?: ApiCallUpdateWithWhereUniqueWithoutUserInput | ApiCallUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiCallUpdateManyWithWhereWithoutUserInput | ApiCallUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiCallScalarWhereInput | ApiCallScalarWhereInput[]
  }

  export type ReferralTrackingUncheckedUpdateManyWithoutReferrerNestedInput = {
    create?: XOR<ReferralTrackingCreateWithoutReferrerInput, ReferralTrackingUncheckedCreateWithoutReferrerInput> | ReferralTrackingCreateWithoutReferrerInput[] | ReferralTrackingUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralTrackingCreateOrConnectWithoutReferrerInput | ReferralTrackingCreateOrConnectWithoutReferrerInput[]
    upsert?: ReferralTrackingUpsertWithWhereUniqueWithoutReferrerInput | ReferralTrackingUpsertWithWhereUniqueWithoutReferrerInput[]
    createMany?: ReferralTrackingCreateManyReferrerInputEnvelope
    set?: ReferralTrackingWhereUniqueInput | ReferralTrackingWhereUniqueInput[]
    disconnect?: ReferralTrackingWhereUniqueInput | ReferralTrackingWhereUniqueInput[]
    delete?: ReferralTrackingWhereUniqueInput | ReferralTrackingWhereUniqueInput[]
    connect?: ReferralTrackingWhereUniqueInput | ReferralTrackingWhereUniqueInput[]
    update?: ReferralTrackingUpdateWithWhereUniqueWithoutReferrerInput | ReferralTrackingUpdateWithWhereUniqueWithoutReferrerInput[]
    updateMany?: ReferralTrackingUpdateManyWithWhereWithoutReferrerInput | ReferralTrackingUpdateManyWithWhereWithoutReferrerInput[]
    deleteMany?: ReferralTrackingScalarWhereInput | ReferralTrackingScalarWhereInput[]
  }

  export type ReferralTrackingUncheckedUpdateManyWithoutReferredNestedInput = {
    create?: XOR<ReferralTrackingCreateWithoutReferredInput, ReferralTrackingUncheckedCreateWithoutReferredInput> | ReferralTrackingCreateWithoutReferredInput[] | ReferralTrackingUncheckedCreateWithoutReferredInput[]
    connectOrCreate?: ReferralTrackingCreateOrConnectWithoutReferredInput | ReferralTrackingCreateOrConnectWithoutReferredInput[]
    upsert?: ReferralTrackingUpsertWithWhereUniqueWithoutReferredInput | ReferralTrackingUpsertWithWhereUniqueWithoutReferredInput[]
    createMany?: ReferralTrackingCreateManyReferredInputEnvelope
    set?: ReferralTrackingWhereUniqueInput | ReferralTrackingWhereUniqueInput[]
    disconnect?: ReferralTrackingWhereUniqueInput | ReferralTrackingWhereUniqueInput[]
    delete?: ReferralTrackingWhereUniqueInput | ReferralTrackingWhereUniqueInput[]
    connect?: ReferralTrackingWhereUniqueInput | ReferralTrackingWhereUniqueInput[]
    update?: ReferralTrackingUpdateWithWhereUniqueWithoutReferredInput | ReferralTrackingUpdateWithWhereUniqueWithoutReferredInput[]
    updateMany?: ReferralTrackingUpdateManyWithWhereWithoutReferredInput | ReferralTrackingUpdateManyWithWhereWithoutReferredInput[]
    deleteMany?: ReferralTrackingScalarWhereInput | ReferralTrackingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSitesInput = {
    create?: XOR<UserCreateWithoutSitesInput, UserUncheckedCreateWithoutSitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSitesInput
    connect?: UserWhereUniqueInput
  }

  export type ApiCallCreateNestedManyWithoutSiteInput = {
    create?: XOR<ApiCallCreateWithoutSiteInput, ApiCallUncheckedCreateWithoutSiteInput> | ApiCallCreateWithoutSiteInput[] | ApiCallUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ApiCallCreateOrConnectWithoutSiteInput | ApiCallCreateOrConnectWithoutSiteInput[]
    createMany?: ApiCallCreateManySiteInputEnvelope
    connect?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
  }

  export type SubscriptionSiteCreateNestedManyWithoutSiteInput = {
    create?: XOR<SubscriptionSiteCreateWithoutSiteInput, SubscriptionSiteUncheckedCreateWithoutSiteInput> | SubscriptionSiteCreateWithoutSiteInput[] | SubscriptionSiteUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: SubscriptionSiteCreateOrConnectWithoutSiteInput | SubscriptionSiteCreateOrConnectWithoutSiteInput[]
    createMany?: SubscriptionSiteCreateManySiteInputEnvelope
    connect?: SubscriptionSiteWhereUniqueInput | SubscriptionSiteWhereUniqueInput[]
  }

  export type ApiCallUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<ApiCallCreateWithoutSiteInput, ApiCallUncheckedCreateWithoutSiteInput> | ApiCallCreateWithoutSiteInput[] | ApiCallUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ApiCallCreateOrConnectWithoutSiteInput | ApiCallCreateOrConnectWithoutSiteInput[]
    createMany?: ApiCallCreateManySiteInputEnvelope
    connect?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
  }

  export type SubscriptionSiteUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<SubscriptionSiteCreateWithoutSiteInput, SubscriptionSiteUncheckedCreateWithoutSiteInput> | SubscriptionSiteCreateWithoutSiteInput[] | SubscriptionSiteUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: SubscriptionSiteCreateOrConnectWithoutSiteInput | SubscriptionSiteCreateOrConnectWithoutSiteInput[]
    createMany?: SubscriptionSiteCreateManySiteInputEnvelope
    connect?: SubscriptionSiteWhereUniqueInput | SubscriptionSiteWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSitesNestedInput = {
    create?: XOR<UserCreateWithoutSitesInput, UserUncheckedCreateWithoutSitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSitesInput
    upsert?: UserUpsertWithoutSitesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSitesInput, UserUpdateWithoutSitesInput>, UserUncheckedUpdateWithoutSitesInput>
  }

  export type ApiCallUpdateManyWithoutSiteNestedInput = {
    create?: XOR<ApiCallCreateWithoutSiteInput, ApiCallUncheckedCreateWithoutSiteInput> | ApiCallCreateWithoutSiteInput[] | ApiCallUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ApiCallCreateOrConnectWithoutSiteInput | ApiCallCreateOrConnectWithoutSiteInput[]
    upsert?: ApiCallUpsertWithWhereUniqueWithoutSiteInput | ApiCallUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: ApiCallCreateManySiteInputEnvelope
    set?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
    disconnect?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
    delete?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
    connect?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
    update?: ApiCallUpdateWithWhereUniqueWithoutSiteInput | ApiCallUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: ApiCallUpdateManyWithWhereWithoutSiteInput | ApiCallUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: ApiCallScalarWhereInput | ApiCallScalarWhereInput[]
  }

  export type SubscriptionSiteUpdateManyWithoutSiteNestedInput = {
    create?: XOR<SubscriptionSiteCreateWithoutSiteInput, SubscriptionSiteUncheckedCreateWithoutSiteInput> | SubscriptionSiteCreateWithoutSiteInput[] | SubscriptionSiteUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: SubscriptionSiteCreateOrConnectWithoutSiteInput | SubscriptionSiteCreateOrConnectWithoutSiteInput[]
    upsert?: SubscriptionSiteUpsertWithWhereUniqueWithoutSiteInput | SubscriptionSiteUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: SubscriptionSiteCreateManySiteInputEnvelope
    set?: SubscriptionSiteWhereUniqueInput | SubscriptionSiteWhereUniqueInput[]
    disconnect?: SubscriptionSiteWhereUniqueInput | SubscriptionSiteWhereUniqueInput[]
    delete?: SubscriptionSiteWhereUniqueInput | SubscriptionSiteWhereUniqueInput[]
    connect?: SubscriptionSiteWhereUniqueInput | SubscriptionSiteWhereUniqueInput[]
    update?: SubscriptionSiteUpdateWithWhereUniqueWithoutSiteInput | SubscriptionSiteUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: SubscriptionSiteUpdateManyWithWhereWithoutSiteInput | SubscriptionSiteUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: SubscriptionSiteScalarWhereInput | SubscriptionSiteScalarWhereInput[]
  }

  export type ApiCallUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<ApiCallCreateWithoutSiteInput, ApiCallUncheckedCreateWithoutSiteInput> | ApiCallCreateWithoutSiteInput[] | ApiCallUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ApiCallCreateOrConnectWithoutSiteInput | ApiCallCreateOrConnectWithoutSiteInput[]
    upsert?: ApiCallUpsertWithWhereUniqueWithoutSiteInput | ApiCallUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: ApiCallCreateManySiteInputEnvelope
    set?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
    disconnect?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
    delete?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
    connect?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
    update?: ApiCallUpdateWithWhereUniqueWithoutSiteInput | ApiCallUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: ApiCallUpdateManyWithWhereWithoutSiteInput | ApiCallUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: ApiCallScalarWhereInput | ApiCallScalarWhereInput[]
  }

  export type SubscriptionSiteUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<SubscriptionSiteCreateWithoutSiteInput, SubscriptionSiteUncheckedCreateWithoutSiteInput> | SubscriptionSiteCreateWithoutSiteInput[] | SubscriptionSiteUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: SubscriptionSiteCreateOrConnectWithoutSiteInput | SubscriptionSiteCreateOrConnectWithoutSiteInput[]
    upsert?: SubscriptionSiteUpsertWithWhereUniqueWithoutSiteInput | SubscriptionSiteUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: SubscriptionSiteCreateManySiteInputEnvelope
    set?: SubscriptionSiteWhereUniqueInput | SubscriptionSiteWhereUniqueInput[]
    disconnect?: SubscriptionSiteWhereUniqueInput | SubscriptionSiteWhereUniqueInput[]
    delete?: SubscriptionSiteWhereUniqueInput | SubscriptionSiteWhereUniqueInput[]
    connect?: SubscriptionSiteWhereUniqueInput | SubscriptionSiteWhereUniqueInput[]
    update?: SubscriptionSiteUpdateWithWhereUniqueWithoutSiteInput | SubscriptionSiteUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: SubscriptionSiteUpdateManyWithWhereWithoutSiteInput | SubscriptionSiteUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: SubscriptionSiteScalarWhereInput | SubscriptionSiteScalarWhereInput[]
  }

  export type UserSubscriptionCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<UserSubscriptionCreateWithoutSubscriptionInput, UserSubscriptionUncheckedCreateWithoutSubscriptionInput> | UserSubscriptionCreateWithoutSubscriptionInput[] | UserSubscriptionUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutSubscriptionInput | UserSubscriptionCreateOrConnectWithoutSubscriptionInput[]
    createMany?: UserSubscriptionCreateManySubscriptionInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type SubscriptionSiteCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<SubscriptionSiteCreateWithoutSubscriptionInput, SubscriptionSiteUncheckedCreateWithoutSubscriptionInput> | SubscriptionSiteCreateWithoutSubscriptionInput[] | SubscriptionSiteUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: SubscriptionSiteCreateOrConnectWithoutSubscriptionInput | SubscriptionSiteCreateOrConnectWithoutSubscriptionInput[]
    createMany?: SubscriptionSiteCreateManySubscriptionInputEnvelope
    connect?: SubscriptionSiteWhereUniqueInput | SubscriptionSiteWhereUniqueInput[]
  }

  export type UserSubscriptionUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<UserSubscriptionCreateWithoutSubscriptionInput, UserSubscriptionUncheckedCreateWithoutSubscriptionInput> | UserSubscriptionCreateWithoutSubscriptionInput[] | UserSubscriptionUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutSubscriptionInput | UserSubscriptionCreateOrConnectWithoutSubscriptionInput[]
    createMany?: UserSubscriptionCreateManySubscriptionInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type SubscriptionSiteUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<SubscriptionSiteCreateWithoutSubscriptionInput, SubscriptionSiteUncheckedCreateWithoutSubscriptionInput> | SubscriptionSiteCreateWithoutSubscriptionInput[] | SubscriptionSiteUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: SubscriptionSiteCreateOrConnectWithoutSubscriptionInput | SubscriptionSiteCreateOrConnectWithoutSubscriptionInput[]
    createMany?: SubscriptionSiteCreateManySubscriptionInputEnvelope
    connect?: SubscriptionSiteWhereUniqueInput | SubscriptionSiteWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserSubscriptionUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutSubscriptionInput, UserSubscriptionUncheckedCreateWithoutSubscriptionInput> | UserSubscriptionCreateWithoutSubscriptionInput[] | UserSubscriptionUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutSubscriptionInput | UserSubscriptionCreateOrConnectWithoutSubscriptionInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutSubscriptionInput | UserSubscriptionUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: UserSubscriptionCreateManySubscriptionInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutSubscriptionInput | UserSubscriptionUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutSubscriptionInput | UserSubscriptionUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type SubscriptionSiteUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<SubscriptionSiteCreateWithoutSubscriptionInput, SubscriptionSiteUncheckedCreateWithoutSubscriptionInput> | SubscriptionSiteCreateWithoutSubscriptionInput[] | SubscriptionSiteUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: SubscriptionSiteCreateOrConnectWithoutSubscriptionInput | SubscriptionSiteCreateOrConnectWithoutSubscriptionInput[]
    upsert?: SubscriptionSiteUpsertWithWhereUniqueWithoutSubscriptionInput | SubscriptionSiteUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: SubscriptionSiteCreateManySubscriptionInputEnvelope
    set?: SubscriptionSiteWhereUniqueInput | SubscriptionSiteWhereUniqueInput[]
    disconnect?: SubscriptionSiteWhereUniqueInput | SubscriptionSiteWhereUniqueInput[]
    delete?: SubscriptionSiteWhereUniqueInput | SubscriptionSiteWhereUniqueInput[]
    connect?: SubscriptionSiteWhereUniqueInput | SubscriptionSiteWhereUniqueInput[]
    update?: SubscriptionSiteUpdateWithWhereUniqueWithoutSubscriptionInput | SubscriptionSiteUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: SubscriptionSiteUpdateManyWithWhereWithoutSubscriptionInput | SubscriptionSiteUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: SubscriptionSiteScalarWhereInput | SubscriptionSiteScalarWhereInput[]
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutSubscriptionInput, UserSubscriptionUncheckedCreateWithoutSubscriptionInput> | UserSubscriptionCreateWithoutSubscriptionInput[] | UserSubscriptionUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutSubscriptionInput | UserSubscriptionCreateOrConnectWithoutSubscriptionInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutSubscriptionInput | UserSubscriptionUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: UserSubscriptionCreateManySubscriptionInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutSubscriptionInput | UserSubscriptionUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutSubscriptionInput | UserSubscriptionUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type SubscriptionSiteUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<SubscriptionSiteCreateWithoutSubscriptionInput, SubscriptionSiteUncheckedCreateWithoutSubscriptionInput> | SubscriptionSiteCreateWithoutSubscriptionInput[] | SubscriptionSiteUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: SubscriptionSiteCreateOrConnectWithoutSubscriptionInput | SubscriptionSiteCreateOrConnectWithoutSubscriptionInput[]
    upsert?: SubscriptionSiteUpsertWithWhereUniqueWithoutSubscriptionInput | SubscriptionSiteUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: SubscriptionSiteCreateManySubscriptionInputEnvelope
    set?: SubscriptionSiteWhereUniqueInput | SubscriptionSiteWhereUniqueInput[]
    disconnect?: SubscriptionSiteWhereUniqueInput | SubscriptionSiteWhereUniqueInput[]
    delete?: SubscriptionSiteWhereUniqueInput | SubscriptionSiteWhereUniqueInput[]
    connect?: SubscriptionSiteWhereUniqueInput | SubscriptionSiteWhereUniqueInput[]
    update?: SubscriptionSiteUpdateWithWhereUniqueWithoutSubscriptionInput | SubscriptionSiteUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: SubscriptionSiteUpdateManyWithWhereWithoutSubscriptionInput | SubscriptionSiteUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: SubscriptionSiteScalarWhereInput | SubscriptionSiteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserSubscriptionsInput = {
    create?: XOR<UserCreateWithoutUserSubscriptionsInput, UserUncheckedCreateWithoutUserSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type SubscriptionCreateNestedOneWithoutUserSubscriptionsInput = {
    create?: XOR<SubscriptionCreateWithoutUserSubscriptionsInput, SubscriptionUncheckedCreateWithoutUserSubscriptionsInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserSubscriptionsInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type ApiCallCreateNestedManyWithoutUserSubscriptionInput = {
    create?: XOR<ApiCallCreateWithoutUserSubscriptionInput, ApiCallUncheckedCreateWithoutUserSubscriptionInput> | ApiCallCreateWithoutUserSubscriptionInput[] | ApiCallUncheckedCreateWithoutUserSubscriptionInput[]
    connectOrCreate?: ApiCallCreateOrConnectWithoutUserSubscriptionInput | ApiCallCreateOrConnectWithoutUserSubscriptionInput[]
    createMany?: ApiCallCreateManyUserSubscriptionInputEnvelope
    connect?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
  }

  export type ApiCallUncheckedCreateNestedManyWithoutUserSubscriptionInput = {
    create?: XOR<ApiCallCreateWithoutUserSubscriptionInput, ApiCallUncheckedCreateWithoutUserSubscriptionInput> | ApiCallCreateWithoutUserSubscriptionInput[] | ApiCallUncheckedCreateWithoutUserSubscriptionInput[]
    connectOrCreate?: ApiCallCreateOrConnectWithoutUserSubscriptionInput | ApiCallCreateOrConnectWithoutUserSubscriptionInput[]
    createMany?: ApiCallCreateManyUserSubscriptionInputEnvelope
    connect?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutUserSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutUserSubscriptionsInput, UserUncheckedCreateWithoutUserSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSubscriptionsInput
    upsert?: UserUpsertWithoutUserSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserSubscriptionsInput, UserUpdateWithoutUserSubscriptionsInput>, UserUncheckedUpdateWithoutUserSubscriptionsInput>
  }

  export type SubscriptionUpdateOneRequiredWithoutUserSubscriptionsNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserSubscriptionsInput, SubscriptionUncheckedCreateWithoutUserSubscriptionsInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserSubscriptionsInput
    upsert?: SubscriptionUpsertWithoutUserSubscriptionsInput
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserSubscriptionsInput, SubscriptionUpdateWithoutUserSubscriptionsInput>, SubscriptionUncheckedUpdateWithoutUserSubscriptionsInput>
  }

  export type ApiCallUpdateManyWithoutUserSubscriptionNestedInput = {
    create?: XOR<ApiCallCreateWithoutUserSubscriptionInput, ApiCallUncheckedCreateWithoutUserSubscriptionInput> | ApiCallCreateWithoutUserSubscriptionInput[] | ApiCallUncheckedCreateWithoutUserSubscriptionInput[]
    connectOrCreate?: ApiCallCreateOrConnectWithoutUserSubscriptionInput | ApiCallCreateOrConnectWithoutUserSubscriptionInput[]
    upsert?: ApiCallUpsertWithWhereUniqueWithoutUserSubscriptionInput | ApiCallUpsertWithWhereUniqueWithoutUserSubscriptionInput[]
    createMany?: ApiCallCreateManyUserSubscriptionInputEnvelope
    set?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
    disconnect?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
    delete?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
    connect?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
    update?: ApiCallUpdateWithWhereUniqueWithoutUserSubscriptionInput | ApiCallUpdateWithWhereUniqueWithoutUserSubscriptionInput[]
    updateMany?: ApiCallUpdateManyWithWhereWithoutUserSubscriptionInput | ApiCallUpdateManyWithWhereWithoutUserSubscriptionInput[]
    deleteMany?: ApiCallScalarWhereInput | ApiCallScalarWhereInput[]
  }

  export type ApiCallUncheckedUpdateManyWithoutUserSubscriptionNestedInput = {
    create?: XOR<ApiCallCreateWithoutUserSubscriptionInput, ApiCallUncheckedCreateWithoutUserSubscriptionInput> | ApiCallCreateWithoutUserSubscriptionInput[] | ApiCallUncheckedCreateWithoutUserSubscriptionInput[]
    connectOrCreate?: ApiCallCreateOrConnectWithoutUserSubscriptionInput | ApiCallCreateOrConnectWithoutUserSubscriptionInput[]
    upsert?: ApiCallUpsertWithWhereUniqueWithoutUserSubscriptionInput | ApiCallUpsertWithWhereUniqueWithoutUserSubscriptionInput[]
    createMany?: ApiCallCreateManyUserSubscriptionInputEnvelope
    set?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
    disconnect?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
    delete?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
    connect?: ApiCallWhereUniqueInput | ApiCallWhereUniqueInput[]
    update?: ApiCallUpdateWithWhereUniqueWithoutUserSubscriptionInput | ApiCallUpdateWithWhereUniqueWithoutUserSubscriptionInput[]
    updateMany?: ApiCallUpdateManyWithWhereWithoutUserSubscriptionInput | ApiCallUpdateManyWithWhereWithoutUserSubscriptionInput[]
    deleteMany?: ApiCallScalarWhereInput | ApiCallScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutApiCallsInput = {
    create?: XOR<UserCreateWithoutApiCallsInput, UserUncheckedCreateWithoutApiCallsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiCallsInput
    connect?: UserWhereUniqueInput
  }

  export type UserSubscriptionCreateNestedOneWithoutApiCallsInput = {
    create?: XOR<UserSubscriptionCreateWithoutApiCallsInput, UserSubscriptionUncheckedCreateWithoutApiCallsInput>
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutApiCallsInput
    connect?: UserSubscriptionWhereUniqueInput
  }

  export type SiteCreateNestedOneWithoutApiCallsInput = {
    create?: XOR<SiteCreateWithoutApiCallsInput, SiteUncheckedCreateWithoutApiCallsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutApiCallsInput
    connect?: SiteWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutApiCallsNestedInput = {
    create?: XOR<UserCreateWithoutApiCallsInput, UserUncheckedCreateWithoutApiCallsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiCallsInput
    upsert?: UserUpsertWithoutApiCallsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApiCallsInput, UserUpdateWithoutApiCallsInput>, UserUncheckedUpdateWithoutApiCallsInput>
  }

  export type UserSubscriptionUpdateOneRequiredWithoutApiCallsNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutApiCallsInput, UserSubscriptionUncheckedCreateWithoutApiCallsInput>
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutApiCallsInput
    upsert?: UserSubscriptionUpsertWithoutApiCallsInput
    connect?: UserSubscriptionWhereUniqueInput
    update?: XOR<XOR<UserSubscriptionUpdateToOneWithWhereWithoutApiCallsInput, UserSubscriptionUpdateWithoutApiCallsInput>, UserSubscriptionUncheckedUpdateWithoutApiCallsInput>
  }

  export type SiteUpdateOneRequiredWithoutApiCallsNestedInput = {
    create?: XOR<SiteCreateWithoutApiCallsInput, SiteUncheckedCreateWithoutApiCallsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutApiCallsInput
    upsert?: SiteUpsertWithoutApiCallsInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutApiCallsInput, SiteUpdateWithoutApiCallsInput>, SiteUncheckedUpdateWithoutApiCallsInput>
  }

  export type SubscriptionCreateNestedOneWithoutSubscriptionSitesInput = {
    create?: XOR<SubscriptionCreateWithoutSubscriptionSitesInput, SubscriptionUncheckedCreateWithoutSubscriptionSitesInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutSubscriptionSitesInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type SiteCreateNestedOneWithoutSubscriptionSitesInput = {
    create?: XOR<SiteCreateWithoutSubscriptionSitesInput, SiteUncheckedCreateWithoutSubscriptionSitesInput>
    connectOrCreate?: SiteCreateOrConnectWithoutSubscriptionSitesInput
    connect?: SiteWhereUniqueInput
  }

  export type SubscriptionUpdateOneRequiredWithoutSubscriptionSitesNestedInput = {
    create?: XOR<SubscriptionCreateWithoutSubscriptionSitesInput, SubscriptionUncheckedCreateWithoutSubscriptionSitesInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutSubscriptionSitesInput
    upsert?: SubscriptionUpsertWithoutSubscriptionSitesInput
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutSubscriptionSitesInput, SubscriptionUpdateWithoutSubscriptionSitesInput>, SubscriptionUncheckedUpdateWithoutSubscriptionSitesInput>
  }

  export type SiteUpdateOneRequiredWithoutSubscriptionSitesNestedInput = {
    create?: XOR<SiteCreateWithoutSubscriptionSitesInput, SiteUncheckedCreateWithoutSubscriptionSitesInput>
    connectOrCreate?: SiteCreateOrConnectWithoutSubscriptionSitesInput
    upsert?: SiteUpsertWithoutSubscriptionSitesInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutSubscriptionSitesInput, SiteUpdateWithoutSubscriptionSitesInput>, SiteUncheckedUpdateWithoutSubscriptionSitesInput>
  }

  export type UserCreateNestedOneWithoutReferralTrackingInput = {
    create?: XOR<UserCreateWithoutReferralTrackingInput, UserUncheckedCreateWithoutReferralTrackingInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralTrackingInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReferredTrackingInput = {
    create?: XOR<UserCreateWithoutReferredTrackingInput, UserUncheckedCreateWithoutReferredTrackingInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferredTrackingInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReferralTrackingNestedInput = {
    create?: XOR<UserCreateWithoutReferralTrackingInput, UserUncheckedCreateWithoutReferralTrackingInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralTrackingInput
    upsert?: UserUpsertWithoutReferralTrackingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferralTrackingInput, UserUpdateWithoutReferralTrackingInput>, UserUncheckedUpdateWithoutReferralTrackingInput>
  }

  export type UserUpdateOneRequiredWithoutReferredTrackingNestedInput = {
    create?: XOR<UserCreateWithoutReferredTrackingInput, UserUncheckedCreateWithoutReferredTrackingInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferredTrackingInput
    upsert?: UserUpsertWithoutReferredTrackingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferredTrackingInput, UserUpdateWithoutReferredTrackingInput>, UserUncheckedUpdateWithoutReferredTrackingInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCreateWithoutReferralsInput = {
    id?: string
    firstName: string
    lastName: string
    mobile: string
    email: string
    referralCode: string
    remainingFreeRequest?: number
    signupDate?: Date | string
    lastLogin?: Date | string | null
    loginCount?: number
    marketingTag?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    sites?: SiteCreateNestedManyWithoutUserInput
    userSubscriptions?: UserSubscriptionCreateNestedManyWithoutUserInput
    apiCalls?: ApiCallCreateNestedManyWithoutUserInput
    referralTracking?: ReferralTrackingCreateNestedManyWithoutReferrerInput
    referredTracking?: ReferralTrackingCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateWithoutReferralsInput = {
    id?: string
    firstName: string
    lastName: string
    mobile: string
    email: string
    referralCode: string
    referredByUser?: string | null
    remainingFreeRequest?: number
    signupDate?: Date | string
    lastLogin?: Date | string | null
    loginCount?: number
    marketingTag?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sites?: SiteUncheckedCreateNestedManyWithoutUserInput
    userSubscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
    apiCalls?: ApiCallUncheckedCreateNestedManyWithoutUserInput
    referralTracking?: ReferralTrackingUncheckedCreateNestedManyWithoutReferrerInput
    referredTracking?: ReferralTrackingUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserCreateOrConnectWithoutReferralsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
  }

  export type UserCreateWithoutReferredByInput = {
    id?: string
    firstName: string
    lastName: string
    mobile: string
    email: string
    referralCode: string
    remainingFreeRequest?: number
    signupDate?: Date | string
    lastLogin?: Date | string | null
    loginCount?: number
    marketingTag?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    referrals?: UserCreateNestedManyWithoutReferredByInput
    sites?: SiteCreateNestedManyWithoutUserInput
    userSubscriptions?: UserSubscriptionCreateNestedManyWithoutUserInput
    apiCalls?: ApiCallCreateNestedManyWithoutUserInput
    referralTracking?: ReferralTrackingCreateNestedManyWithoutReferrerInput
    referredTracking?: ReferralTrackingCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateWithoutReferredByInput = {
    id?: string
    firstName: string
    lastName: string
    mobile: string
    email: string
    referralCode: string
    remainingFreeRequest?: number
    signupDate?: Date | string
    lastLogin?: Date | string | null
    loginCount?: number
    marketingTag?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    sites?: SiteUncheckedCreateNestedManyWithoutUserInput
    userSubscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
    apiCalls?: ApiCallUncheckedCreateNestedManyWithoutUserInput
    referralTracking?: ReferralTrackingUncheckedCreateNestedManyWithoutReferrerInput
    referredTracking?: ReferralTrackingUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserCreateOrConnectWithoutReferredByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput>
  }

  export type UserCreateManyReferredByInputEnvelope = {
    data: UserCreateManyReferredByInput | UserCreateManyReferredByInput[]
    skipDuplicates?: boolean
  }

  export type SiteCreateWithoutUserInput = {
    id?: string
    name: string
    baseURL: string
    description?: string | null
    status?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    apiCalls?: ApiCallCreateNestedManyWithoutSiteInput
    subscriptionSites?: SubscriptionSiteCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    baseURL: string
    description?: string | null
    status?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    apiCalls?: ApiCallUncheckedCreateNestedManyWithoutSiteInput
    subscriptionSites?: SubscriptionSiteUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutUserInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutUserInput, SiteUncheckedCreateWithoutUserInput>
  }

  export type SiteCreateManyUserInputEnvelope = {
    data: SiteCreateManyUserInput | SiteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSubscriptionCreateWithoutUserInput = {
    id?: string
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    requestLimitAtPurchase?: number
    remainingRequest: number
    updatedAt?: Date | string
    subscription: SubscriptionCreateNestedOneWithoutUserSubscriptionsInput
    apiCalls?: ApiCallCreateNestedManyWithoutUserSubscriptionInput
  }

  export type UserSubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    subscriptionId: string
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    requestLimitAtPurchase?: number
    remainingRequest: number
    updatedAt?: Date | string
    apiCalls?: ApiCallUncheckedCreateNestedManyWithoutUserSubscriptionInput
  }

  export type UserSubscriptionCreateOrConnectWithoutUserInput = {
    where: UserSubscriptionWhereUniqueInput
    create: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type UserSubscriptionCreateManyUserInputEnvelope = {
    data: UserSubscriptionCreateManyUserInput | UserSubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApiCallCreateWithoutUserInput = {
    id?: string
    endpoint: string
    timestamp?: Date | string
    responseStatus: number
    responseTimeMs: number
    createdAt?: Date | string
    userSubscription: UserSubscriptionCreateNestedOneWithoutApiCallsInput
    site: SiteCreateNestedOneWithoutApiCallsInput
  }

  export type ApiCallUncheckedCreateWithoutUserInput = {
    id?: string
    userSubscriptionId: string
    siteId: string
    endpoint: string
    timestamp?: Date | string
    responseStatus: number
    responseTimeMs: number
    createdAt?: Date | string
  }

  export type ApiCallCreateOrConnectWithoutUserInput = {
    where: ApiCallWhereUniqueInput
    create: XOR<ApiCallCreateWithoutUserInput, ApiCallUncheckedCreateWithoutUserInput>
  }

  export type ApiCallCreateManyUserInputEnvelope = {
    data: ApiCallCreateManyUserInput | ApiCallCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReferralTrackingCreateWithoutReferrerInput = {
    id?: string
    rewardCount: number
    createdAt?: Date | string
    referred: UserCreateNestedOneWithoutReferredTrackingInput
  }

  export type ReferralTrackingUncheckedCreateWithoutReferrerInput = {
    id?: string
    referredId: string
    rewardCount: number
    createdAt?: Date | string
  }

  export type ReferralTrackingCreateOrConnectWithoutReferrerInput = {
    where: ReferralTrackingWhereUniqueInput
    create: XOR<ReferralTrackingCreateWithoutReferrerInput, ReferralTrackingUncheckedCreateWithoutReferrerInput>
  }

  export type ReferralTrackingCreateManyReferrerInputEnvelope = {
    data: ReferralTrackingCreateManyReferrerInput | ReferralTrackingCreateManyReferrerInput[]
    skipDuplicates?: boolean
  }

  export type ReferralTrackingCreateWithoutReferredInput = {
    id?: string
    rewardCount: number
    createdAt?: Date | string
    referrer: UserCreateNestedOneWithoutReferralTrackingInput
  }

  export type ReferralTrackingUncheckedCreateWithoutReferredInput = {
    id?: string
    referrerId: string
    rewardCount: number
    createdAt?: Date | string
  }

  export type ReferralTrackingCreateOrConnectWithoutReferredInput = {
    where: ReferralTrackingWhereUniqueInput
    create: XOR<ReferralTrackingCreateWithoutReferredInput, ReferralTrackingUncheckedCreateWithoutReferredInput>
  }

  export type ReferralTrackingCreateManyReferredInputEnvelope = {
    data: ReferralTrackingCreateManyReferredInput | ReferralTrackingCreateManyReferredInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutReferralsInput = {
    update: XOR<UserUpdateWithoutReferralsInput, UserUncheckedUpdateWithoutReferralsInput>
    create: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferralsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferralsInput, UserUncheckedUpdateWithoutReferralsInput>
  }

  export type UserUpdateWithoutReferralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    remainingFreeRequest?: IntFieldUpdateOperationsInput | number
    signupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    marketingTag?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    sites?: SiteUpdateManyWithoutUserNestedInput
    userSubscriptions?: UserSubscriptionUpdateManyWithoutUserNestedInput
    apiCalls?: ApiCallUpdateManyWithoutUserNestedInput
    referralTracking?: ReferralTrackingUpdateManyWithoutReferrerNestedInput
    referredTracking?: ReferralTrackingUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateWithoutReferralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredByUser?: NullableStringFieldUpdateOperationsInput | string | null
    remainingFreeRequest?: IntFieldUpdateOperationsInput | number
    signupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    marketingTag?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sites?: SiteUncheckedUpdateManyWithoutUserNestedInput
    userSubscriptions?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    apiCalls?: ApiCallUncheckedUpdateManyWithoutUserNestedInput
    referralTracking?: ReferralTrackingUncheckedUpdateManyWithoutReferrerNestedInput
    referredTracking?: ReferralTrackingUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutReferredByInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutReferredByInput, UserUncheckedUpdateWithoutReferredByInput>
    create: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput>
  }

  export type UserUpdateWithWhereUniqueWithoutReferredByInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutReferredByInput, UserUncheckedUpdateWithoutReferredByInput>
  }

  export type UserUpdateManyWithWhereWithoutReferredByInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutReferredByInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    mobile?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    referralCode?: StringFilter<"User"> | string
    referredByUser?: StringNullableFilter<"User"> | string | null
    remainingFreeRequest?: IntFilter<"User"> | number
    signupDate?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    loginCount?: IntFilter<"User"> | number
    marketingTag?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type SiteUpsertWithWhereUniqueWithoutUserInput = {
    where: SiteWhereUniqueInput
    update: XOR<SiteUpdateWithoutUserInput, SiteUncheckedUpdateWithoutUserInput>
    create: XOR<SiteCreateWithoutUserInput, SiteUncheckedCreateWithoutUserInput>
  }

  export type SiteUpdateWithWhereUniqueWithoutUserInput = {
    where: SiteWhereUniqueInput
    data: XOR<SiteUpdateWithoutUserInput, SiteUncheckedUpdateWithoutUserInput>
  }

  export type SiteUpdateManyWithWhereWithoutUserInput = {
    where: SiteScalarWhereInput
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyWithoutUserInput>
  }

  export type SiteScalarWhereInput = {
    AND?: SiteScalarWhereInput | SiteScalarWhereInput[]
    OR?: SiteScalarWhereInput[]
    NOT?: SiteScalarWhereInput | SiteScalarWhereInput[]
    id?: StringFilter<"Site"> | string
    name?: StringFilter<"Site"> | string
    baseURL?: StringFilter<"Site"> | string
    description?: StringNullableFilter<"Site"> | string | null
    status?: IntNullableFilter<"Site"> | number | null
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
    userId?: StringFilter<"Site"> | string
  }

  export type UserSubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSubscriptionWhereUniqueInput
    update: XOR<UserSubscriptionUpdateWithoutUserInput, UserSubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type UserSubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSubscriptionWhereUniqueInput
    data: XOR<UserSubscriptionUpdateWithoutUserInput, UserSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type UserSubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: UserSubscriptionScalarWhereInput
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSubscriptionScalarWhereInput = {
    AND?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
    OR?: UserSubscriptionScalarWhereInput[]
    NOT?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
    id?: StringFilter<"UserSubscription"> | string
    userId?: StringFilter<"UserSubscription"> | string
    subscriptionId?: StringFilter<"UserSubscription"> | string
    startDate?: DateTimeFilter<"UserSubscription"> | Date | string
    endDate?: DateTimeFilter<"UserSubscription"> | Date | string
    isActive?: BoolFilter<"UserSubscription"> | boolean
    requestLimitAtPurchase?: IntFilter<"UserSubscription"> | number
    remainingRequest?: IntFilter<"UserSubscription"> | number
    updatedAt?: DateTimeFilter<"UserSubscription"> | Date | string
  }

  export type ApiCallUpsertWithWhereUniqueWithoutUserInput = {
    where: ApiCallWhereUniqueInput
    update: XOR<ApiCallUpdateWithoutUserInput, ApiCallUncheckedUpdateWithoutUserInput>
    create: XOR<ApiCallCreateWithoutUserInput, ApiCallUncheckedCreateWithoutUserInput>
  }

  export type ApiCallUpdateWithWhereUniqueWithoutUserInput = {
    where: ApiCallWhereUniqueInput
    data: XOR<ApiCallUpdateWithoutUserInput, ApiCallUncheckedUpdateWithoutUserInput>
  }

  export type ApiCallUpdateManyWithWhereWithoutUserInput = {
    where: ApiCallScalarWhereInput
    data: XOR<ApiCallUpdateManyMutationInput, ApiCallUncheckedUpdateManyWithoutUserInput>
  }

  export type ApiCallScalarWhereInput = {
    AND?: ApiCallScalarWhereInput | ApiCallScalarWhereInput[]
    OR?: ApiCallScalarWhereInput[]
    NOT?: ApiCallScalarWhereInput | ApiCallScalarWhereInput[]
    id?: StringFilter<"ApiCall"> | string
    userId?: StringFilter<"ApiCall"> | string
    userSubscriptionId?: StringFilter<"ApiCall"> | string
    siteId?: StringFilter<"ApiCall"> | string
    endpoint?: StringFilter<"ApiCall"> | string
    timestamp?: DateTimeFilter<"ApiCall"> | Date | string
    responseStatus?: IntFilter<"ApiCall"> | number
    responseTimeMs?: IntFilter<"ApiCall"> | number
    createdAt?: DateTimeFilter<"ApiCall"> | Date | string
  }

  export type ReferralTrackingUpsertWithWhereUniqueWithoutReferrerInput = {
    where: ReferralTrackingWhereUniqueInput
    update: XOR<ReferralTrackingUpdateWithoutReferrerInput, ReferralTrackingUncheckedUpdateWithoutReferrerInput>
    create: XOR<ReferralTrackingCreateWithoutReferrerInput, ReferralTrackingUncheckedCreateWithoutReferrerInput>
  }

  export type ReferralTrackingUpdateWithWhereUniqueWithoutReferrerInput = {
    where: ReferralTrackingWhereUniqueInput
    data: XOR<ReferralTrackingUpdateWithoutReferrerInput, ReferralTrackingUncheckedUpdateWithoutReferrerInput>
  }

  export type ReferralTrackingUpdateManyWithWhereWithoutReferrerInput = {
    where: ReferralTrackingScalarWhereInput
    data: XOR<ReferralTrackingUpdateManyMutationInput, ReferralTrackingUncheckedUpdateManyWithoutReferrerInput>
  }

  export type ReferralTrackingScalarWhereInput = {
    AND?: ReferralTrackingScalarWhereInput | ReferralTrackingScalarWhereInput[]
    OR?: ReferralTrackingScalarWhereInput[]
    NOT?: ReferralTrackingScalarWhereInput | ReferralTrackingScalarWhereInput[]
    id?: StringFilter<"ReferralTracking"> | string
    referrerId?: StringFilter<"ReferralTracking"> | string
    referredId?: StringFilter<"ReferralTracking"> | string
    rewardCount?: IntFilter<"ReferralTracking"> | number
    createdAt?: DateTimeFilter<"ReferralTracking"> | Date | string
  }

  export type ReferralTrackingUpsertWithWhereUniqueWithoutReferredInput = {
    where: ReferralTrackingWhereUniqueInput
    update: XOR<ReferralTrackingUpdateWithoutReferredInput, ReferralTrackingUncheckedUpdateWithoutReferredInput>
    create: XOR<ReferralTrackingCreateWithoutReferredInput, ReferralTrackingUncheckedCreateWithoutReferredInput>
  }

  export type ReferralTrackingUpdateWithWhereUniqueWithoutReferredInput = {
    where: ReferralTrackingWhereUniqueInput
    data: XOR<ReferralTrackingUpdateWithoutReferredInput, ReferralTrackingUncheckedUpdateWithoutReferredInput>
  }

  export type ReferralTrackingUpdateManyWithWhereWithoutReferredInput = {
    where: ReferralTrackingScalarWhereInput
    data: XOR<ReferralTrackingUpdateManyMutationInput, ReferralTrackingUncheckedUpdateManyWithoutReferredInput>
  }

  export type UserCreateWithoutSitesInput = {
    id?: string
    firstName: string
    lastName: string
    mobile: string
    email: string
    referralCode: string
    remainingFreeRequest?: number
    signupDate?: Date | string
    lastLogin?: Date | string | null
    loginCount?: number
    marketingTag?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    userSubscriptions?: UserSubscriptionCreateNestedManyWithoutUserInput
    apiCalls?: ApiCallCreateNestedManyWithoutUserInput
    referralTracking?: ReferralTrackingCreateNestedManyWithoutReferrerInput
    referredTracking?: ReferralTrackingCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateWithoutSitesInput = {
    id?: string
    firstName: string
    lastName: string
    mobile: string
    email: string
    referralCode: string
    referredByUser?: string | null
    remainingFreeRequest?: number
    signupDate?: Date | string
    lastLogin?: Date | string | null
    loginCount?: number
    marketingTag?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    userSubscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
    apiCalls?: ApiCallUncheckedCreateNestedManyWithoutUserInput
    referralTracking?: ReferralTrackingUncheckedCreateNestedManyWithoutReferrerInput
    referredTracking?: ReferralTrackingUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserCreateOrConnectWithoutSitesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSitesInput, UserUncheckedCreateWithoutSitesInput>
  }

  export type ApiCallCreateWithoutSiteInput = {
    id?: string
    endpoint: string
    timestamp?: Date | string
    responseStatus: number
    responseTimeMs: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutApiCallsInput
    userSubscription: UserSubscriptionCreateNestedOneWithoutApiCallsInput
  }

  export type ApiCallUncheckedCreateWithoutSiteInput = {
    id?: string
    userId: string
    userSubscriptionId: string
    endpoint: string
    timestamp?: Date | string
    responseStatus: number
    responseTimeMs: number
    createdAt?: Date | string
  }

  export type ApiCallCreateOrConnectWithoutSiteInput = {
    where: ApiCallWhereUniqueInput
    create: XOR<ApiCallCreateWithoutSiteInput, ApiCallUncheckedCreateWithoutSiteInput>
  }

  export type ApiCallCreateManySiteInputEnvelope = {
    data: ApiCallCreateManySiteInput | ApiCallCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionSiteCreateWithoutSiteInput = {
    id?: string
    createdAt?: Date | string
    subscription: SubscriptionCreateNestedOneWithoutSubscriptionSitesInput
  }

  export type SubscriptionSiteUncheckedCreateWithoutSiteInput = {
    id?: string
    subscriptionId: string
    createdAt?: Date | string
  }

  export type SubscriptionSiteCreateOrConnectWithoutSiteInput = {
    where: SubscriptionSiteWhereUniqueInput
    create: XOR<SubscriptionSiteCreateWithoutSiteInput, SubscriptionSiteUncheckedCreateWithoutSiteInput>
  }

  export type SubscriptionSiteCreateManySiteInputEnvelope = {
    data: SubscriptionSiteCreateManySiteInput | SubscriptionSiteCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSitesInput = {
    update: XOR<UserUpdateWithoutSitesInput, UserUncheckedUpdateWithoutSitesInput>
    create: XOR<UserCreateWithoutSitesInput, UserUncheckedCreateWithoutSitesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSitesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSitesInput, UserUncheckedUpdateWithoutSitesInput>
  }

  export type UserUpdateWithoutSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    remainingFreeRequest?: IntFieldUpdateOperationsInput | number
    signupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    marketingTag?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    userSubscriptions?: UserSubscriptionUpdateManyWithoutUserNestedInput
    apiCalls?: ApiCallUpdateManyWithoutUserNestedInput
    referralTracking?: ReferralTrackingUpdateManyWithoutReferrerNestedInput
    referredTracking?: ReferralTrackingUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateWithoutSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredByUser?: NullableStringFieldUpdateOperationsInput | string | null
    remainingFreeRequest?: IntFieldUpdateOperationsInput | number
    signupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    marketingTag?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    userSubscriptions?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    apiCalls?: ApiCallUncheckedUpdateManyWithoutUserNestedInput
    referralTracking?: ReferralTrackingUncheckedUpdateManyWithoutReferrerNestedInput
    referredTracking?: ReferralTrackingUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type ApiCallUpsertWithWhereUniqueWithoutSiteInput = {
    where: ApiCallWhereUniqueInput
    update: XOR<ApiCallUpdateWithoutSiteInput, ApiCallUncheckedUpdateWithoutSiteInput>
    create: XOR<ApiCallCreateWithoutSiteInput, ApiCallUncheckedCreateWithoutSiteInput>
  }

  export type ApiCallUpdateWithWhereUniqueWithoutSiteInput = {
    where: ApiCallWhereUniqueInput
    data: XOR<ApiCallUpdateWithoutSiteInput, ApiCallUncheckedUpdateWithoutSiteInput>
  }

  export type ApiCallUpdateManyWithWhereWithoutSiteInput = {
    where: ApiCallScalarWhereInput
    data: XOR<ApiCallUpdateManyMutationInput, ApiCallUncheckedUpdateManyWithoutSiteInput>
  }

  export type SubscriptionSiteUpsertWithWhereUniqueWithoutSiteInput = {
    where: SubscriptionSiteWhereUniqueInput
    update: XOR<SubscriptionSiteUpdateWithoutSiteInput, SubscriptionSiteUncheckedUpdateWithoutSiteInput>
    create: XOR<SubscriptionSiteCreateWithoutSiteInput, SubscriptionSiteUncheckedCreateWithoutSiteInput>
  }

  export type SubscriptionSiteUpdateWithWhereUniqueWithoutSiteInput = {
    where: SubscriptionSiteWhereUniqueInput
    data: XOR<SubscriptionSiteUpdateWithoutSiteInput, SubscriptionSiteUncheckedUpdateWithoutSiteInput>
  }

  export type SubscriptionSiteUpdateManyWithWhereWithoutSiteInput = {
    where: SubscriptionSiteScalarWhereInput
    data: XOR<SubscriptionSiteUpdateManyMutationInput, SubscriptionSiteUncheckedUpdateManyWithoutSiteInput>
  }

  export type SubscriptionSiteScalarWhereInput = {
    AND?: SubscriptionSiteScalarWhereInput | SubscriptionSiteScalarWhereInput[]
    OR?: SubscriptionSiteScalarWhereInput[]
    NOT?: SubscriptionSiteScalarWhereInput | SubscriptionSiteScalarWhereInput[]
    id?: StringFilter<"SubscriptionSite"> | string
    subscriptionId?: StringFilter<"SubscriptionSite"> | string
    siteId?: StringFilter<"SubscriptionSite"> | string
    createdAt?: DateTimeFilter<"SubscriptionSite"> | Date | string
  }

  export type UserSubscriptionCreateWithoutSubscriptionInput = {
    id?: string
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    requestLimitAtPurchase?: number
    remainingRequest: number
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserSubscriptionsInput
    apiCalls?: ApiCallCreateNestedManyWithoutUserSubscriptionInput
  }

  export type UserSubscriptionUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    userId: string
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    requestLimitAtPurchase?: number
    remainingRequest: number
    updatedAt?: Date | string
    apiCalls?: ApiCallUncheckedCreateNestedManyWithoutUserSubscriptionInput
  }

  export type UserSubscriptionCreateOrConnectWithoutSubscriptionInput = {
    where: UserSubscriptionWhereUniqueInput
    create: XOR<UserSubscriptionCreateWithoutSubscriptionInput, UserSubscriptionUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserSubscriptionCreateManySubscriptionInputEnvelope = {
    data: UserSubscriptionCreateManySubscriptionInput | UserSubscriptionCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionSiteCreateWithoutSubscriptionInput = {
    id?: string
    createdAt?: Date | string
    site: SiteCreateNestedOneWithoutSubscriptionSitesInput
  }

  export type SubscriptionSiteUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    siteId: string
    createdAt?: Date | string
  }

  export type SubscriptionSiteCreateOrConnectWithoutSubscriptionInput = {
    where: SubscriptionSiteWhereUniqueInput
    create: XOR<SubscriptionSiteCreateWithoutSubscriptionInput, SubscriptionSiteUncheckedCreateWithoutSubscriptionInput>
  }

  export type SubscriptionSiteCreateManySubscriptionInputEnvelope = {
    data: SubscriptionSiteCreateManySubscriptionInput | SubscriptionSiteCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type UserSubscriptionUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: UserSubscriptionWhereUniqueInput
    update: XOR<UserSubscriptionUpdateWithoutSubscriptionInput, UserSubscriptionUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserSubscriptionCreateWithoutSubscriptionInput, UserSubscriptionUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserSubscriptionUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: UserSubscriptionWhereUniqueInput
    data: XOR<UserSubscriptionUpdateWithoutSubscriptionInput, UserSubscriptionUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserSubscriptionUpdateManyWithWhereWithoutSubscriptionInput = {
    where: UserSubscriptionScalarWhereInput
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type SubscriptionSiteUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: SubscriptionSiteWhereUniqueInput
    update: XOR<SubscriptionSiteUpdateWithoutSubscriptionInput, SubscriptionSiteUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<SubscriptionSiteCreateWithoutSubscriptionInput, SubscriptionSiteUncheckedCreateWithoutSubscriptionInput>
  }

  export type SubscriptionSiteUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: SubscriptionSiteWhereUniqueInput
    data: XOR<SubscriptionSiteUpdateWithoutSubscriptionInput, SubscriptionSiteUncheckedUpdateWithoutSubscriptionInput>
  }

  export type SubscriptionSiteUpdateManyWithWhereWithoutSubscriptionInput = {
    where: SubscriptionSiteScalarWhereInput
    data: XOR<SubscriptionSiteUpdateManyMutationInput, SubscriptionSiteUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type UserCreateWithoutUserSubscriptionsInput = {
    id?: string
    firstName: string
    lastName: string
    mobile: string
    email: string
    referralCode: string
    remainingFreeRequest?: number
    signupDate?: Date | string
    lastLogin?: Date | string | null
    loginCount?: number
    marketingTag?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    sites?: SiteCreateNestedManyWithoutUserInput
    apiCalls?: ApiCallCreateNestedManyWithoutUserInput
    referralTracking?: ReferralTrackingCreateNestedManyWithoutReferrerInput
    referredTracking?: ReferralTrackingCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateWithoutUserSubscriptionsInput = {
    id?: string
    firstName: string
    lastName: string
    mobile: string
    email: string
    referralCode: string
    referredByUser?: string | null
    remainingFreeRequest?: number
    signupDate?: Date | string
    lastLogin?: Date | string | null
    loginCount?: number
    marketingTag?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    sites?: SiteUncheckedCreateNestedManyWithoutUserInput
    apiCalls?: ApiCallUncheckedCreateNestedManyWithoutUserInput
    referralTracking?: ReferralTrackingUncheckedCreateNestedManyWithoutReferrerInput
    referredTracking?: ReferralTrackingUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserCreateOrConnectWithoutUserSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserSubscriptionsInput, UserUncheckedCreateWithoutUserSubscriptionsInput>
  }

  export type SubscriptionCreateWithoutUserSubscriptionsInput = {
    id?: string
    name: string
    requestLimit: number
    price: number
    durationDays: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionSites?: SubscriptionSiteCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutUserSubscriptionsInput = {
    id?: string
    name: string
    requestLimit: number
    price: number
    durationDays: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionSites?: SubscriptionSiteUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutUserSubscriptionsInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserSubscriptionsInput, SubscriptionUncheckedCreateWithoutUserSubscriptionsInput>
  }

  export type ApiCallCreateWithoutUserSubscriptionInput = {
    id?: string
    endpoint: string
    timestamp?: Date | string
    responseStatus: number
    responseTimeMs: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutApiCallsInput
    site: SiteCreateNestedOneWithoutApiCallsInput
  }

  export type ApiCallUncheckedCreateWithoutUserSubscriptionInput = {
    id?: string
    userId: string
    siteId: string
    endpoint: string
    timestamp?: Date | string
    responseStatus: number
    responseTimeMs: number
    createdAt?: Date | string
  }

  export type ApiCallCreateOrConnectWithoutUserSubscriptionInput = {
    where: ApiCallWhereUniqueInput
    create: XOR<ApiCallCreateWithoutUserSubscriptionInput, ApiCallUncheckedCreateWithoutUserSubscriptionInput>
  }

  export type ApiCallCreateManyUserSubscriptionInputEnvelope = {
    data: ApiCallCreateManyUserSubscriptionInput | ApiCallCreateManyUserSubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutUserSubscriptionsInput = {
    update: XOR<UserUpdateWithoutUserSubscriptionsInput, UserUncheckedUpdateWithoutUserSubscriptionsInput>
    create: XOR<UserCreateWithoutUserSubscriptionsInput, UserUncheckedCreateWithoutUserSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserSubscriptionsInput, UserUncheckedUpdateWithoutUserSubscriptionsInput>
  }

  export type UserUpdateWithoutUserSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    remainingFreeRequest?: IntFieldUpdateOperationsInput | number
    signupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    marketingTag?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    sites?: SiteUpdateManyWithoutUserNestedInput
    apiCalls?: ApiCallUpdateManyWithoutUserNestedInput
    referralTracking?: ReferralTrackingUpdateManyWithoutReferrerNestedInput
    referredTracking?: ReferralTrackingUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateWithoutUserSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredByUser?: NullableStringFieldUpdateOperationsInput | string | null
    remainingFreeRequest?: IntFieldUpdateOperationsInput | number
    signupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    marketingTag?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    sites?: SiteUncheckedUpdateManyWithoutUserNestedInput
    apiCalls?: ApiCallUncheckedUpdateManyWithoutUserNestedInput
    referralTracking?: ReferralTrackingUncheckedUpdateManyWithoutReferrerNestedInput
    referredTracking?: ReferralTrackingUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type SubscriptionUpsertWithoutUserSubscriptionsInput = {
    update: XOR<SubscriptionUpdateWithoutUserSubscriptionsInput, SubscriptionUncheckedUpdateWithoutUserSubscriptionsInput>
    create: XOR<SubscriptionCreateWithoutUserSubscriptionsInput, SubscriptionUncheckedCreateWithoutUserSubscriptionsInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutUserSubscriptionsInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutUserSubscriptionsInput, SubscriptionUncheckedUpdateWithoutUserSubscriptionsInput>
  }

  export type SubscriptionUpdateWithoutUserSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requestLimit?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionSites?: SubscriptionSiteUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutUserSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requestLimit?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionSites?: SubscriptionSiteUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type ApiCallUpsertWithWhereUniqueWithoutUserSubscriptionInput = {
    where: ApiCallWhereUniqueInput
    update: XOR<ApiCallUpdateWithoutUserSubscriptionInput, ApiCallUncheckedUpdateWithoutUserSubscriptionInput>
    create: XOR<ApiCallCreateWithoutUserSubscriptionInput, ApiCallUncheckedCreateWithoutUserSubscriptionInput>
  }

  export type ApiCallUpdateWithWhereUniqueWithoutUserSubscriptionInput = {
    where: ApiCallWhereUniqueInput
    data: XOR<ApiCallUpdateWithoutUserSubscriptionInput, ApiCallUncheckedUpdateWithoutUserSubscriptionInput>
  }

  export type ApiCallUpdateManyWithWhereWithoutUserSubscriptionInput = {
    where: ApiCallScalarWhereInput
    data: XOR<ApiCallUpdateManyMutationInput, ApiCallUncheckedUpdateManyWithoutUserSubscriptionInput>
  }

  export type UserCreateWithoutApiCallsInput = {
    id?: string
    firstName: string
    lastName: string
    mobile: string
    email: string
    referralCode: string
    remainingFreeRequest?: number
    signupDate?: Date | string
    lastLogin?: Date | string | null
    loginCount?: number
    marketingTag?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    sites?: SiteCreateNestedManyWithoutUserInput
    userSubscriptions?: UserSubscriptionCreateNestedManyWithoutUserInput
    referralTracking?: ReferralTrackingCreateNestedManyWithoutReferrerInput
    referredTracking?: ReferralTrackingCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateWithoutApiCallsInput = {
    id?: string
    firstName: string
    lastName: string
    mobile: string
    email: string
    referralCode: string
    referredByUser?: string | null
    remainingFreeRequest?: number
    signupDate?: Date | string
    lastLogin?: Date | string | null
    loginCount?: number
    marketingTag?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    sites?: SiteUncheckedCreateNestedManyWithoutUserInput
    userSubscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
    referralTracking?: ReferralTrackingUncheckedCreateNestedManyWithoutReferrerInput
    referredTracking?: ReferralTrackingUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserCreateOrConnectWithoutApiCallsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApiCallsInput, UserUncheckedCreateWithoutApiCallsInput>
  }

  export type UserSubscriptionCreateWithoutApiCallsInput = {
    id?: string
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    requestLimitAtPurchase?: number
    remainingRequest: number
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserSubscriptionsInput
    subscription: SubscriptionCreateNestedOneWithoutUserSubscriptionsInput
  }

  export type UserSubscriptionUncheckedCreateWithoutApiCallsInput = {
    id?: string
    userId: string
    subscriptionId: string
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    requestLimitAtPurchase?: number
    remainingRequest: number
    updatedAt?: Date | string
  }

  export type UserSubscriptionCreateOrConnectWithoutApiCallsInput = {
    where: UserSubscriptionWhereUniqueInput
    create: XOR<UserSubscriptionCreateWithoutApiCallsInput, UserSubscriptionUncheckedCreateWithoutApiCallsInput>
  }

  export type SiteCreateWithoutApiCallsInput = {
    id?: string
    name: string
    baseURL: string
    description?: string | null
    status?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSitesInput
    subscriptionSites?: SubscriptionSiteCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutApiCallsInput = {
    id?: string
    name: string
    baseURL: string
    description?: string | null
    status?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    subscriptionSites?: SubscriptionSiteUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutApiCallsInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutApiCallsInput, SiteUncheckedCreateWithoutApiCallsInput>
  }

  export type UserUpsertWithoutApiCallsInput = {
    update: XOR<UserUpdateWithoutApiCallsInput, UserUncheckedUpdateWithoutApiCallsInput>
    create: XOR<UserCreateWithoutApiCallsInput, UserUncheckedCreateWithoutApiCallsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApiCallsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApiCallsInput, UserUncheckedUpdateWithoutApiCallsInput>
  }

  export type UserUpdateWithoutApiCallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    remainingFreeRequest?: IntFieldUpdateOperationsInput | number
    signupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    marketingTag?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    sites?: SiteUpdateManyWithoutUserNestedInput
    userSubscriptions?: UserSubscriptionUpdateManyWithoutUserNestedInput
    referralTracking?: ReferralTrackingUpdateManyWithoutReferrerNestedInput
    referredTracking?: ReferralTrackingUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateWithoutApiCallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredByUser?: NullableStringFieldUpdateOperationsInput | string | null
    remainingFreeRequest?: IntFieldUpdateOperationsInput | number
    signupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    marketingTag?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    sites?: SiteUncheckedUpdateManyWithoutUserNestedInput
    userSubscriptions?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    referralTracking?: ReferralTrackingUncheckedUpdateManyWithoutReferrerNestedInput
    referredTracking?: ReferralTrackingUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type UserSubscriptionUpsertWithoutApiCallsInput = {
    update: XOR<UserSubscriptionUpdateWithoutApiCallsInput, UserSubscriptionUncheckedUpdateWithoutApiCallsInput>
    create: XOR<UserSubscriptionCreateWithoutApiCallsInput, UserSubscriptionUncheckedCreateWithoutApiCallsInput>
    where?: UserSubscriptionWhereInput
  }

  export type UserSubscriptionUpdateToOneWithWhereWithoutApiCallsInput = {
    where?: UserSubscriptionWhereInput
    data: XOR<UserSubscriptionUpdateWithoutApiCallsInput, UserSubscriptionUncheckedUpdateWithoutApiCallsInput>
  }

  export type UserSubscriptionUpdateWithoutApiCallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    requestLimitAtPurchase?: IntFieldUpdateOperationsInput | number
    remainingRequest?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserSubscriptionsNestedInput
    subscription?: SubscriptionUpdateOneRequiredWithoutUserSubscriptionsNestedInput
  }

  export type UserSubscriptionUncheckedUpdateWithoutApiCallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    requestLimitAtPurchase?: IntFieldUpdateOperationsInput | number
    remainingRequest?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteUpsertWithoutApiCallsInput = {
    update: XOR<SiteUpdateWithoutApiCallsInput, SiteUncheckedUpdateWithoutApiCallsInput>
    create: XOR<SiteCreateWithoutApiCallsInput, SiteUncheckedCreateWithoutApiCallsInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutApiCallsInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutApiCallsInput, SiteUncheckedUpdateWithoutApiCallsInput>
  }

  export type SiteUpdateWithoutApiCallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseURL?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSitesNestedInput
    subscriptionSites?: SubscriptionSiteUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutApiCallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseURL?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionSites?: SubscriptionSiteUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SubscriptionCreateWithoutSubscriptionSitesInput = {
    id?: string
    name: string
    requestLimit: number
    price: number
    durationDays: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userSubscriptions?: UserSubscriptionCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutSubscriptionSitesInput = {
    id?: string
    name: string
    requestLimit: number
    price: number
    durationDays: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userSubscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutSubscriptionSitesInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutSubscriptionSitesInput, SubscriptionUncheckedCreateWithoutSubscriptionSitesInput>
  }

  export type SiteCreateWithoutSubscriptionSitesInput = {
    id?: string
    name: string
    baseURL: string
    description?: string | null
    status?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSitesInput
    apiCalls?: ApiCallCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutSubscriptionSitesInput = {
    id?: string
    name: string
    baseURL: string
    description?: string | null
    status?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    apiCalls?: ApiCallUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutSubscriptionSitesInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutSubscriptionSitesInput, SiteUncheckedCreateWithoutSubscriptionSitesInput>
  }

  export type SubscriptionUpsertWithoutSubscriptionSitesInput = {
    update: XOR<SubscriptionUpdateWithoutSubscriptionSitesInput, SubscriptionUncheckedUpdateWithoutSubscriptionSitesInput>
    create: XOR<SubscriptionCreateWithoutSubscriptionSitesInput, SubscriptionUncheckedCreateWithoutSubscriptionSitesInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutSubscriptionSitesInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutSubscriptionSitesInput, SubscriptionUncheckedUpdateWithoutSubscriptionSitesInput>
  }

  export type SubscriptionUpdateWithoutSubscriptionSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requestLimit?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSubscriptions?: UserSubscriptionUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutSubscriptionSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requestLimit?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSubscriptions?: UserSubscriptionUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SiteUpsertWithoutSubscriptionSitesInput = {
    update: XOR<SiteUpdateWithoutSubscriptionSitesInput, SiteUncheckedUpdateWithoutSubscriptionSitesInput>
    create: XOR<SiteCreateWithoutSubscriptionSitesInput, SiteUncheckedCreateWithoutSubscriptionSitesInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutSubscriptionSitesInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutSubscriptionSitesInput, SiteUncheckedUpdateWithoutSubscriptionSitesInput>
  }

  export type SiteUpdateWithoutSubscriptionSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseURL?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSitesNestedInput
    apiCalls?: ApiCallUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutSubscriptionSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseURL?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    apiCalls?: ApiCallUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type UserCreateWithoutReferralTrackingInput = {
    id?: string
    firstName: string
    lastName: string
    mobile: string
    email: string
    referralCode: string
    remainingFreeRequest?: number
    signupDate?: Date | string
    lastLogin?: Date | string | null
    loginCount?: number
    marketingTag?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    sites?: SiteCreateNestedManyWithoutUserInput
    userSubscriptions?: UserSubscriptionCreateNestedManyWithoutUserInput
    apiCalls?: ApiCallCreateNestedManyWithoutUserInput
    referredTracking?: ReferralTrackingCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateWithoutReferralTrackingInput = {
    id?: string
    firstName: string
    lastName: string
    mobile: string
    email: string
    referralCode: string
    referredByUser?: string | null
    remainingFreeRequest?: number
    signupDate?: Date | string
    lastLogin?: Date | string | null
    loginCount?: number
    marketingTag?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    sites?: SiteUncheckedCreateNestedManyWithoutUserInput
    userSubscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
    apiCalls?: ApiCallUncheckedCreateNestedManyWithoutUserInput
    referredTracking?: ReferralTrackingUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserCreateOrConnectWithoutReferralTrackingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferralTrackingInput, UserUncheckedCreateWithoutReferralTrackingInput>
  }

  export type UserCreateWithoutReferredTrackingInput = {
    id?: string
    firstName: string
    lastName: string
    mobile: string
    email: string
    referralCode: string
    remainingFreeRequest?: number
    signupDate?: Date | string
    lastLogin?: Date | string | null
    loginCount?: number
    marketingTag?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    sites?: SiteCreateNestedManyWithoutUserInput
    userSubscriptions?: UserSubscriptionCreateNestedManyWithoutUserInput
    apiCalls?: ApiCallCreateNestedManyWithoutUserInput
    referralTracking?: ReferralTrackingCreateNestedManyWithoutReferrerInput
  }

  export type UserUncheckedCreateWithoutReferredTrackingInput = {
    id?: string
    firstName: string
    lastName: string
    mobile: string
    email: string
    referralCode: string
    referredByUser?: string | null
    remainingFreeRequest?: number
    signupDate?: Date | string
    lastLogin?: Date | string | null
    loginCount?: number
    marketingTag?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    sites?: SiteUncheckedCreateNestedManyWithoutUserInput
    userSubscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
    apiCalls?: ApiCallUncheckedCreateNestedManyWithoutUserInput
    referralTracking?: ReferralTrackingUncheckedCreateNestedManyWithoutReferrerInput
  }

  export type UserCreateOrConnectWithoutReferredTrackingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferredTrackingInput, UserUncheckedCreateWithoutReferredTrackingInput>
  }

  export type UserUpsertWithoutReferralTrackingInput = {
    update: XOR<UserUpdateWithoutReferralTrackingInput, UserUncheckedUpdateWithoutReferralTrackingInput>
    create: XOR<UserCreateWithoutReferralTrackingInput, UserUncheckedCreateWithoutReferralTrackingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferralTrackingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferralTrackingInput, UserUncheckedUpdateWithoutReferralTrackingInput>
  }

  export type UserUpdateWithoutReferralTrackingInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    remainingFreeRequest?: IntFieldUpdateOperationsInput | number
    signupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    marketingTag?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    sites?: SiteUpdateManyWithoutUserNestedInput
    userSubscriptions?: UserSubscriptionUpdateManyWithoutUserNestedInput
    apiCalls?: ApiCallUpdateManyWithoutUserNestedInput
    referredTracking?: ReferralTrackingUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateWithoutReferralTrackingInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredByUser?: NullableStringFieldUpdateOperationsInput | string | null
    remainingFreeRequest?: IntFieldUpdateOperationsInput | number
    signupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    marketingTag?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    sites?: SiteUncheckedUpdateManyWithoutUserNestedInput
    userSubscriptions?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    apiCalls?: ApiCallUncheckedUpdateManyWithoutUserNestedInput
    referredTracking?: ReferralTrackingUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type UserUpsertWithoutReferredTrackingInput = {
    update: XOR<UserUpdateWithoutReferredTrackingInput, UserUncheckedUpdateWithoutReferredTrackingInput>
    create: XOR<UserCreateWithoutReferredTrackingInput, UserUncheckedCreateWithoutReferredTrackingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferredTrackingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferredTrackingInput, UserUncheckedUpdateWithoutReferredTrackingInput>
  }

  export type UserUpdateWithoutReferredTrackingInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    remainingFreeRequest?: IntFieldUpdateOperationsInput | number
    signupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    marketingTag?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    sites?: SiteUpdateManyWithoutUserNestedInput
    userSubscriptions?: UserSubscriptionUpdateManyWithoutUserNestedInput
    apiCalls?: ApiCallUpdateManyWithoutUserNestedInput
    referralTracking?: ReferralTrackingUpdateManyWithoutReferrerNestedInput
  }

  export type UserUncheckedUpdateWithoutReferredTrackingInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredByUser?: NullableStringFieldUpdateOperationsInput | string | null
    remainingFreeRequest?: IntFieldUpdateOperationsInput | number
    signupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    marketingTag?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    sites?: SiteUncheckedUpdateManyWithoutUserNestedInput
    userSubscriptions?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    apiCalls?: ApiCallUncheckedUpdateManyWithoutUserNestedInput
    referralTracking?: ReferralTrackingUncheckedUpdateManyWithoutReferrerNestedInput
  }

  export type UserCreateManyReferredByInput = {
    id?: string
    firstName: string
    lastName: string
    mobile: string
    email: string
    referralCode: string
    remainingFreeRequest?: number
    signupDate?: Date | string
    lastLogin?: Date | string | null
    loginCount?: number
    marketingTag?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteCreateManyUserInput = {
    id?: string
    name: string
    baseURL: string
    description?: string | null
    status?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSubscriptionCreateManyUserInput = {
    id?: string
    subscriptionId: string
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    requestLimitAtPurchase?: number
    remainingRequest: number
    updatedAt?: Date | string
  }

  export type ApiCallCreateManyUserInput = {
    id?: string
    userSubscriptionId: string
    siteId: string
    endpoint: string
    timestamp?: Date | string
    responseStatus: number
    responseTimeMs: number
    createdAt?: Date | string
  }

  export type ReferralTrackingCreateManyReferrerInput = {
    id?: string
    referredId: string
    rewardCount: number
    createdAt?: Date | string
  }

  export type ReferralTrackingCreateManyReferredInput = {
    id?: string
    referrerId: string
    rewardCount: number
    createdAt?: Date | string
  }

  export type UserUpdateWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    remainingFreeRequest?: IntFieldUpdateOperationsInput | number
    signupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    marketingTag?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    sites?: SiteUpdateManyWithoutUserNestedInput
    userSubscriptions?: UserSubscriptionUpdateManyWithoutUserNestedInput
    apiCalls?: ApiCallUpdateManyWithoutUserNestedInput
    referralTracking?: ReferralTrackingUpdateManyWithoutReferrerNestedInput
    referredTracking?: ReferralTrackingUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    remainingFreeRequest?: IntFieldUpdateOperationsInput | number
    signupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    marketingTag?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    sites?: SiteUncheckedUpdateManyWithoutUserNestedInput
    userSubscriptions?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    apiCalls?: ApiCallUncheckedUpdateManyWithoutUserNestedInput
    referralTracking?: ReferralTrackingUncheckedUpdateManyWithoutReferrerNestedInput
    referredTracking?: ReferralTrackingUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateManyWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    remainingFreeRequest?: IntFieldUpdateOperationsInput | number
    signupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginCount?: IntFieldUpdateOperationsInput | number
    marketingTag?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseURL?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiCalls?: ApiCallUpdateManyWithoutSiteNestedInput
    subscriptionSites?: SubscriptionSiteUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseURL?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiCalls?: ApiCallUncheckedUpdateManyWithoutSiteNestedInput
    subscriptionSites?: SubscriptionSiteUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseURL?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    requestLimitAtPurchase?: IntFieldUpdateOperationsInput | number
    remainingRequest?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneRequiredWithoutUserSubscriptionsNestedInput
    apiCalls?: ApiCallUpdateManyWithoutUserSubscriptionNestedInput
  }

  export type UserSubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    requestLimitAtPurchase?: IntFieldUpdateOperationsInput | number
    remainingRequest?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiCalls?: ApiCallUncheckedUpdateManyWithoutUserSubscriptionNestedInput
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    requestLimitAtPurchase?: IntFieldUpdateOperationsInput | number
    remainingRequest?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCallUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSubscription?: UserSubscriptionUpdateOneRequiredWithoutApiCallsNestedInput
    site?: SiteUpdateOneRequiredWithoutApiCallsNestedInput
  }

  export type ApiCallUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userSubscriptionId?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCallUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userSubscriptionId?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralTrackingUpdateWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rewardCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referred?: UserUpdateOneRequiredWithoutReferredTrackingNestedInput
  }

  export type ReferralTrackingUncheckedUpdateWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    referredId?: StringFieldUpdateOperationsInput | string
    rewardCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralTrackingUncheckedUpdateManyWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    referredId?: StringFieldUpdateOperationsInput | string
    rewardCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralTrackingUpdateWithoutReferredInput = {
    id?: StringFieldUpdateOperationsInput | string
    rewardCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: UserUpdateOneRequiredWithoutReferralTrackingNestedInput
  }

  export type ReferralTrackingUncheckedUpdateWithoutReferredInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    rewardCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralTrackingUncheckedUpdateManyWithoutReferredInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    rewardCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCallCreateManySiteInput = {
    id?: string
    userId: string
    userSubscriptionId: string
    endpoint: string
    timestamp?: Date | string
    responseStatus: number
    responseTimeMs: number
    createdAt?: Date | string
  }

  export type SubscriptionSiteCreateManySiteInput = {
    id?: string
    subscriptionId: string
    createdAt?: Date | string
  }

  export type ApiCallUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApiCallsNestedInput
    userSubscription?: UserSubscriptionUpdateOneRequiredWithoutApiCallsNestedInput
  }

  export type ApiCallUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userSubscriptionId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCallUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userSubscriptionId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionSiteUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneRequiredWithoutSubscriptionSitesNestedInput
  }

  export type SubscriptionSiteUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionSiteUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionCreateManySubscriptionInput = {
    id?: string
    userId: string
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    requestLimitAtPurchase?: number
    remainingRequest: number
    updatedAt?: Date | string
  }

  export type SubscriptionSiteCreateManySubscriptionInput = {
    id?: string
    siteId: string
    createdAt?: Date | string
  }

  export type UserSubscriptionUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    requestLimitAtPurchase?: IntFieldUpdateOperationsInput | number
    remainingRequest?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserSubscriptionsNestedInput
    apiCalls?: ApiCallUpdateManyWithoutUserSubscriptionNestedInput
  }

  export type UserSubscriptionUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    requestLimitAtPurchase?: IntFieldUpdateOperationsInput | number
    remainingRequest?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiCalls?: ApiCallUncheckedUpdateManyWithoutUserSubscriptionNestedInput
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    requestLimitAtPurchase?: IntFieldUpdateOperationsInput | number
    remainingRequest?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionSiteUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutSubscriptionSitesNestedInput
  }

  export type SubscriptionSiteUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionSiteUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCallCreateManyUserSubscriptionInput = {
    id?: string
    userId: string
    siteId: string
    endpoint: string
    timestamp?: Date | string
    responseStatus: number
    responseTimeMs: number
    createdAt?: Date | string
  }

  export type ApiCallUpdateWithoutUserSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApiCallsNestedInput
    site?: SiteUpdateOneRequiredWithoutApiCallsNestedInput
  }

  export type ApiCallUncheckedUpdateWithoutUserSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCallUncheckedUpdateManyWithoutUserSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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