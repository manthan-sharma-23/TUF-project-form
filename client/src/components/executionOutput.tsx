import { Box } from "@mui/material";
import { useRecoilValue } from "recoil";
import { formOutputAtom } from "../features/store/atoms/execOutput.state";

const ExecutionOutput = () => {
  const output = useRecoilValue(formOutputAtom);
  return (
    <div>
      {output.token && (
        <Box
          height={300}
          width={"100%"}
          my={4}
          display="flex"
          alignItems="center"
          gap={4}
          top={"60%"}
          position={"absolute"}
          sx={{ border: "2px solid blue" }}
        >
          <div className="h-full w-full bg-blue-900 p-2 font-mono text-white font-medium text-lg">
            <section className="flex w-full ml-4 mt-1">
              <p>Output</p>
              <p className="mx-2">:</p>
              <p>{output.stdout}</p>
            </section>
            <section className="flex w-full ml-4 mt-1">
              <p>Time Taken</p>
              <p className="mx-2">:</p>
              <p>{output.time + "s"}</p>
            </section>
            <section className="flex w-full ml-4 mt-1">
              <p>Error</p>
              <p className="mx-2">:</p>
              <p className={`${output.stderr ? "text-red-600" : ""}`}>
                {output.stderr ? output.stderr : null}
              </p>
            </section>
          </div>
        </Box>
      )}
    </div>
  );
};

export default ExecutionOutput;
