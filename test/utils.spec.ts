import "es6-shim";

import { should, use } from "chai";

import * as chaiAsPromised from "chai-as-promised";
import { convertToArray, getEnumStringValues } from "../src/utils";

should();
use(chaiAsPromised);

// -------------------------------------------------------------------------
// Setup
// -------------------------------------------------------------------------


// -------------------------------------------------------------------------
// Specifications: utils unit tests
// -------------------------------------------------------------------------

describe("utils", function () {

    describe("convertToArray", function () {

        it("convert Set into array", function () {

            const setExample = new Set<string>();
            setExample.add("hello");
            setExample.add("world");

            const newArr = convertToArray(setExample);
            newArr.should.be.instanceOf(Array);
            newArr.length.should.be.equal(2);
            newArr.should.contains("hello");
            newArr.should.contains("world");
        });


        it("convert Map into array of values", function () {

            const map = new Map<string, string>();
            map.set("key1", "hello");
            map.set("key2", "world");

            const newArr = convertToArray(map);
            newArr.should.be.instanceOf(Array);
            newArr.length.should.be.equal(2);
            newArr.should.contains("hello");
            newArr.should.contains("world");
        });

        it("should return array untouched", function () {

            const arr = ["hello", "world"];

            const newArr = convertToArray(arr);
            arr.should.be.instanceOf(Array);
            arr.length.should.be.equal(2);
            arr.should.contains("hello");
            arr.should.contains("world");
        });

    });

    describe("getEnumStringValues", function () {

        it("gets the values of a string enum", function () {
            enum stringEnum {
                first = "firstValue",
                second = "secondValue"
            }
            const stringEnumValues = getEnumStringValues(stringEnum);
            stringEnumValues.length.should.be.equal(2);
            stringEnumValues.should.contains("firstValue");
            stringEnumValues.should.contains("secondValue");
        });

        it("gets the values of a regular enum", function () {
            enum regularEnum {
                zero,
                one
            }
            const regularEnumValues = getEnumStringValues(regularEnum);
            console.log("regularEnumValues", regularEnumValues);
            regularEnumValues.length.should.be.equal(2);
            regularEnumValues.should.contains("zero");
            regularEnumValues.should.contains("one");
        });

    });

});
