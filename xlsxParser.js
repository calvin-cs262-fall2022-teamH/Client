import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { read, utils, writeFileXLSX } from 'xlsx';

export default function xlsxParser() {

    //const f = await (await fetch("https://sheetjs.com/pres.xlsx")).arrayBuffer();
    //const wb = read(f); // parse the array buffer
    //const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
    //const data = utils.sheet_to_json(ws); // generate objects

  return (() => { (async() => {
    const f = await (await fetch("https://sheetjs.com/pres.xlsx")).arrayBuffer();
    const wb = read(f); // parse the array buffer
    const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
    const data = utils.sheet_to_json(ws); // generate objects
    <Text>hi</Text>
  })(); });
}