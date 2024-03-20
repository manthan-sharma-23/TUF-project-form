export interface FormInput {
  username?: string;
  language?: string;
  std_input?: string;
  source_code?: string;
}

export interface Data {
  id: number;
  username: string;
  source_code: string;
  code_language: string;
  stdout: string;
  stderr?: string;
  status?: string;
  submitted_at: Date;
}

export interface Language {
  id: number;
  name: string;
  is_archived: boolean;
}
