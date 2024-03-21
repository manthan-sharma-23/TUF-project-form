import { Box } from "@mui/material";
import { useRecoilValue } from "recoil";
import { formOutputAtom } from "../store/atoms/execOutput.state";

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
            {Object.entries(output).map(([key, value]) => (
              <section className="flex w-full ml-4 mt-1" key={key}>
                <p>{key}</p>
                <p className="mx-2">:</p>
                <p>
                  {typeof value === "object" ? JSON.stringify(value) : value}
                </p>
              </section>
            ))}
          </div>
        </Box>
      )}
    </div>
  );
};

export default ExecutionOutput;
