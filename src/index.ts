import { Action, LineContext } from 'bottender';

export default async function App(
  context: LineContext
): Promise<Action<LineContext> | void> {
  await context.replyText('Welcome to Bottender, TypeScript!');
}
