export interface FormInput {
  username?: string;
  code_language?: string;
  code_language_id?: number;
  std_input?: string;
  source_code?: string;
}

export interface Data {
  id: number;
  username: string;
  source_code: string;
  code_language: string;
  output: string;
  submitted_at: Date;
}

export interface Language {
  id: number;
  name: string;
}

export interface JudgeExecutionResult {
  stdout: string;
  time: string;
  token: string;
  status: {
    id:number
    description: string;
  };
  stderr:string;
  
}