export declare enum LoggerModes {
    Console = "CONSOLE",
    File = "FILE",
    Custom = "CUSTOM",
    Off = "OFF"
}
export declare enum Formats {
    Line = "LINE",
    Json = "JSON"
}
declare type TLogFn = (content: any, printFull?: boolean) => void;
export declare type TCustomLogFn = (timestamp: Date, prefix: string, content: unknown) => void;
export interface ILogger {
    settings: ISettings;
    info: TLogFn;
    imp: TLogFn;
    warn: TLogFn;
    err: TLogFn;
}
interface ISettings {
    mode: LoggerModes;
    filepath: string;
    filepathDatetime: boolean;
    timestamp: boolean;
    format: Formats;
    customLogFn?: TCustomLogFn;
}
export declare function jetLogger(mode?: LoggerModes, filepath?: string, filepathDatetime?: boolean, timestamp?: boolean, format?: Formats, customLogFn?: TCustomLogFn): ILogger;
declare const _default: ILogger;
export default _default;
