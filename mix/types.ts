// String literal types

let autoComplete: 'on' | 'off' = 'on';

// console.log(autoComplete);
autoComplete = 'off';
// console.log(autoComplete);
// console.log(typeof autoComplete);

// WILL OT COMPILE
// autoComplete = "boom";
// console.log(autoComplete);

enum Protocols {
  HTTP, // 0
  HTTPS, // 1
  FTP,
}

type HyperTextProtocol = Protocols.HTTP | Protocols.HTTPS;

let protocol: HyperTextProtocol;

protocol = Protocols.HTTP;

// console.log(protocol);

protocol = Protocols.HTTPS;

// console.log(protocol);

// THROW ERROR!!!
// protocol = Protocols.FTP;

// console.log(protocol);

export { autoComplete };
