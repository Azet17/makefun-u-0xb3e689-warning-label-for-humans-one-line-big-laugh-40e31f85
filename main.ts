// Warning Label for Humans: One Line, Big Laugh
// Entry program: writes a single-line safety warning label for every human
// being to /output/entry.txt (no trailing newline).
//
// Candidate lines drafted for this entry:
//   A. "WARNING: This human will ignore all instructions, then blame the
//      manufacturer for the results."
//   B. "CAUTION: Do not press any button marked DO NOT PRESS — this human
//      will press it immediately."
//   C. "WARNING: This human reads the manual only after breaking everything,
//      then calls it a design flaw."
//
// Pick: A. It wins on the judge criteria: it is unmistakably a printed
// safety label ("WARNING:", product-style wording), it is true about people
// in general (ignoring instructions and blaming the product is a universal
// human habit), the laugh turns in the last few words ("blame the
// manufacturer for the results") rather than being smeared across the line,
// it has one idea only with no filler, and it uses the whole line without
// repeating the joke. B is close but its turn lands mid-line ("immediately"
// is a shrug, not a punchline); C is funny but "design flaw" is a weaker
// payoff than blaming the manufacturer.
//
// Revision (second authoring session): A was honest but its turn was
// smeared — the punch word "manufacturer" sat mid-clause and the line died
// on the vague tail "for the results". The revision keeps A's opening and
// sharpens the ending: "break the product" is the concrete middle beat
// (the inevitable result of ignoring instructions, same causal chain, still
// one idea), and the line now ends on the punch word "refund" — demanding
// your money back for something you broke yourself is a sharper, more
// recognisable human behaviour than vaguely "blaming for the results", and
// the laugh now lands on the final word instead of trailing off after it.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "WARNING: This human will ignore all instructions, break the product, then demand a refund.";

if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(
    `entry line must be 1-160 characters, got ${LINE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
