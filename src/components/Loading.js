import { ReactComponent as SpinnerIcon } from "assets/svg/spinner.svg";
export function Loading() {
  return (
    <div className="grid place-items-center">
      <div className=" flex px-4 py-2 gap-size-1 items-center justify-between rounded bg-primary">
        <SpinnerIcon />
        <span className="text-white">Cooking...</span>
      </div>
    </div>
  );
}
