export default function DateFormat({
  start,
  end,
}: {
  start: string;
  end: string | undefined;
}): JSX.Element {
  let start_string: string = new Date(start).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  if (end === undefined) {
    return <div className="mb-4">{"Since " + start_string}</div>;
  } else if (!end.length) {
    return <div className="mb-4">{start_string}</div>;
  } else {
    let end_string: string = new Date(end).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
    return <div className="mb-4">{start_string + " - " + end_string}</div>;
  }
}
