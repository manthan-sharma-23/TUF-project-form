interface Column {
  id:
    | "id"
    | "username"
    | "code_language"
    | "source_code"
    | "submitted_at"
    | "stdout"
    | "stderr"
    | "status"
    | "stdin";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

export const columns: readonly Column[] = [
  { id: "id", label: "Serial No.", minWidth: 30 },
  { id: "username", label: "Username", minWidth: 100 },
  {
    id: "code_language",
    label: "Code\u00a0Language",
    minWidth: 30,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "source_code",
    label: "Source\u00a0Code",
    minWidth: 130,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "stdin",
    label: "Input",
    minWidth: 60,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "stderr",
    label: "Error",
    minWidth: 50,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 40,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "stdout",
    label: "Output",
    minWidth: 40,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "submitted_at",
    label: "Submitted\u00a0At",
    minWidth: 200,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];
