"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module data
 *
 * Todo: Rewrite this description
 *
 * @preferred
 * Abstract, portable data types. For example – anytype, anyvalues, anyarrays, anymaps, stringmaps
 * (on which many serializable objects are based on – configmap, filtermaps, connectionparams – all
 * extend stringvaluemap). Includes standard design patterns for working with data (data paging,
 * filtering, GUIDs).
 */
var AnyValue_1 = require("./AnyValue");
exports.AnyValue = AnyValue_1.AnyValue;
var AnyValueArray_1 = require("./AnyValueArray");
exports.AnyValueArray = AnyValueArray_1.AnyValueArray;
var AnyValueMap_1 = require("./AnyValueMap");
exports.AnyValueMap = AnyValueMap_1.AnyValueMap;
var StringValueMap_1 = require("./StringValueMap");
exports.StringValueMap = StringValueMap_1.StringValueMap;
var IdGenerator_1 = require("./IdGenerator");
exports.IdGenerator = IdGenerator_1.IdGenerator;
var SortField_1 = require("./SortField");
exports.SortField = SortField_1.SortField;
var SortParams_1 = require("./SortParams");
exports.SortParams = SortParams_1.SortParams;
var PagingParams_1 = require("./PagingParams");
exports.PagingParams = PagingParams_1.PagingParams;
var DataPage_1 = require("./DataPage");
exports.DataPage = DataPage_1.DataPage;
var FilterParams_1 = require("./FilterParams");
exports.FilterParams = FilterParams_1.FilterParams;
var ProjectionParams_1 = require("./ProjectionParams");
exports.ProjectionParams = ProjectionParams_1.ProjectionParams;
var MultiString_1 = require("./MultiString");
exports.MultiString = MultiString_1.MultiString;
var TagsProcessor_1 = require("./TagsProcessor");
exports.TagsProcessor = TagsProcessor_1.TagsProcessor;
//# sourceMappingURL=index.js.map