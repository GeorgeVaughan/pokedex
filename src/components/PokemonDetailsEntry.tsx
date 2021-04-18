type PokemonDetailsEntryProps = {
  name: string;
  children: any;
};

const entryStyle = {
  display: "flex",
};

const labelStyle = {
  display: "inline-block",
  minWidth: 150,
};

export const PokemonDetailsEntry = ({
  name,
  children,
}: PokemonDetailsEntryProps) => {
  return (
    <div style={entryStyle}>
      <div style={labelStyle}>{name}:</div>
      <div>{children}</div>
    </div>
  );
};
