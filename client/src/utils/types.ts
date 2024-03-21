export interface FormInput {
  username?: string;
  language?: string;
  std_input: string | null;
  source_code?: string;
}

export interface Data {
  id: number;
  username: string;
  source_code: string;
  code_language: string;
  stdout: string;
  stdin: string | null;
  stderr?: string;
  status?: string;
  submitted_at: Date;
}

export interface Language {
  id: number;
  name: string;
  is_archived: boolean;
}
