import getConfig from "next/config";

export default function Footer(): JSX.Element {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleString("en-us", { month: "short" });
  const { publicRuntimeConfig } = getConfig();
  return (
    <footer>
      <div className="clearfix ">
        <div className="text-xs md:text-sm float-left mb-2 mt-4">
          &copy; {month} {year} by Julien Vanharen.
        </div>
        <div className="text-xs md:text-sm float-right mb-2 mt-4">
          Last updated in {publicRuntimeConfig.buildMonth}{" "}
          {publicRuntimeConfig.buildYear}.
        </div>
      </div>
    </footer>
  );
}
