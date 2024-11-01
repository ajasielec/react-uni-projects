import {DataProcessor} from "./data-processor";

const proc = new DataProcessor<string>();
proc.addData("X");
proc.addData("14");

proc.processData((d) => {
    console.log(d);
})

const process = (d: string) => {
    console.log(d);
}

proc.processData(process);

const filtered = proc.filterData((d) => d.length >= 2);
console.log(filtered);