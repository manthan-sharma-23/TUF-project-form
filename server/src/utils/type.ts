export interface FormInput {
  username?: string;
  code_language?: string;
  std_input?: string;
  source_code?: string;
}

export enum code_languages_available {
  JAVA = "Java",
  PYTHON = "Python",
  CPP = "C++",
  C = "C",
  JAVASCRIPT = "Javascript",
  TYPESCRIPT = "Typescript",
  PHP = "Php",
  GOLANG = "Go-lang",
  RUST = "Rust",
}

export interface Data {
  id: number;
  username: string;
  source_code: string;
  code_language: string;
  output: number;
  submitted_at: Date;
}
