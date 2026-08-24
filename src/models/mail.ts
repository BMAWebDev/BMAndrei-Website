export interface IContactTemplate {
  name: string;
  email: string;
  message: string;
}

export type MessageSuccessfullySentProps = Pick<
  IContactTemplate,
  'name' | 'message'
>;
