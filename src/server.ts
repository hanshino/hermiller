import express from 'express';
import { bottender } from 'bottender';

const app = bottender({
  dev: process.env.NODE_ENV !== 'production',
});

const port = Number(process.env.PORT) || 5000;

// the request handler of the bottender app
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  const verify = (req: any, _: express.Response, buf: Buffer) => {
    req.rawBody = buf.toString();
  };

  server.use(express.json({ verify }));
  server.use(express.urlencoded({ extended: false, verify }));

  server.all('*', (req, res: express.Response) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
