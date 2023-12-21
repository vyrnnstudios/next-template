import { PropsWithChildren } from 'react';

export default function ({ children }: PropsWithChildren) {
  return (
    <html lang="pt-br">
      <head>
        <style>
          {`
            body, * {
              margin: 0;
              padding: 0;
            }
          `}
        </style>
      </head>
      <body>{children}</body>
    </html>
  );
}
