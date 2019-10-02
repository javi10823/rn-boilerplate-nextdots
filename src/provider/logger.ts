export const LogLevels = {
  LOG: 'log',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error',
};

export default class Logger {
  _name: string;
  _printTimestamp: boolean;
  _console;

  constructor(name = 'main', printTimestamp = false) {
    this._name = name;
    this._printTimestamp = !!printTimestamp;
    this._console = console;
  }

  log(...args) {
    return this._log(LogLevels.LOG, ...args);
  }

  info(...args) {
    return this._log(LogLevels.INFO, ...args);
  }

  warn(...args) {
    return this._log(LogLevels.WARN, ...args);
  }

  error(...args) {
    return this._log(LogLevels.ERROR, ...args);
  }

  setPrintTimestamp(val = true) {
    this._printTimestamp = !!val;
    return this;
  }

  _log(level = LogLevels.INFO, ...args) {
    const ts = this._printTimestamp ? `${+new Date()} ` : '';
    try {
      this._console[level](`[${this._name}] ${ts}${level}:`, ...args);
    } catch (e) {
      console.error(e);
    }
    return this;
  }
}
