var Handlebars={VERSION:"1.0.beta.6",helpers:{},partials:{},registerHelper:function(c,b,a){if(a)b.not=a;this.helpers[c]=b},registerPartial:function(c,b){this.partials[c]=b}};Handlebars.registerHelper("helperMissing",function(c){if(arguments.length!==2)throw Error("Could not find property '"+c+"'");});var toString=Object.prototype.toString,functionType="[object Function]";
Handlebars.registerHelper("blockHelperMissing",function(c,b){var a=b.inverse||function(){},g=b.fn,h="",e=toString.call(c);e===functionType&&(c=c.call(this));if(c===!0)return g(this);else if(c===!1||c==null)return a(this);else if(e==="[object Array]"){if(c.length>0){a=0;for(e=c.length;a<e;a++)h+=g(c[a])}else h=a(this);return h}else return g(c)});Handlebars.registerHelper("each",function(c,b){var a=b.fn,g=b.inverse,h="";if(c&&c.length>0)for(var g=0,e=c.length;g<e;g++)h+=a(c[g]);else h=g(this);return h});
Handlebars.registerHelper("if",function(c,b){toString.call(c)===functionType&&(c=c.call(this));return!c||Handlebars.Utils.isEmpty(c)?b.inverse(this):b.fn(this)});Handlebars.registerHelper("unless",function(c,b){var a=b.fn;b.fn=b.inverse;b.inverse=a;return Handlebars.helpers["if"].call(this,c,b)});Handlebars.registerHelper("with",function(c,b){return b.fn(c)});Handlebars.registerHelper("log",function(c){Handlebars.log(c)});
var handlebars=function(){var c={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,statements:6,simpleInverse:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,inMustache:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,OPEN_PARTIAL:24,params:25,hash:26,param:27,STRING:28,INTEGER:29,BOOLEAN:30,hashSegments:31,hashSegment:32,ID:33,EQUALS:34,pathSegments:35,SEP:36,$accept:0,$end:1},terminals_:{2:"error",
5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"OPEN_PARTIAL",28:"STRING",29:"INTEGER",30:"BOOLEAN",33:"ID",34:"EQUALS",36:"SEP"},productions_:[0,[3,2],[4,3],[4,1],[4,0],[6,1],[6,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[7,2],[17,3],[17,2],[17,2],[17,1],[25,2],[25,1],[27,1],[27,1],[27,1],[27,1],[26,1],[31,2],[31,1],[32,3],[32,3],[32,3],[32,3],[21,1],[35,3],[35,1]],performAction:function(a,
b,c,e,f,d){a=d.length-1;switch(f){case 1:return d[a-1];case 2:this.$=new e.ProgramNode(d[a-2],d[a]);break;case 3:this.$=new e.ProgramNode(d[a]);break;case 4:this.$=new e.ProgramNode([]);break;case 5:this.$=[d[a]];break;case 6:d[a-1].push(d[a]);this.$=d[a-1];break;case 7:this.$=new e.InverseNode(d[a-2],d[a-1],d[a]);break;case 8:this.$=new e.BlockNode(d[a-2],d[a-1],d[a]);break;case 9:this.$=d[a];break;case 10:this.$=d[a];break;case 11:this.$=new e.ContentNode(d[a]);break;case 12:this.$=new e.CommentNode(d[a]);
break;case 13:this.$=new e.MustacheNode(d[a-1][0],d[a-1][1]);break;case 14:this.$=new e.MustacheNode(d[a-1][0],d[a-1][1]);break;case 15:this.$=d[a-1];break;case 16:this.$=new e.MustacheNode(d[a-1][0],d[a-1][1]);break;case 17:this.$=new e.MustacheNode(d[a-1][0],d[a-1][1],!0);break;case 18:this.$=new e.PartialNode(d[a-1]);break;case 19:this.$=new e.PartialNode(d[a-2],d[a-1]);break;case 21:this.$=[[d[a-2]].concat(d[a-1]),d[a]];break;case 22:this.$=[[d[a-1]].concat(d[a]),null];break;case 23:this.$=[[d[a-
1]],d[a]];break;case 24:this.$=[[d[a]],null];break;case 25:d[a-1].push(d[a]);this.$=d[a-1];break;case 26:this.$=[d[a]];break;case 27:this.$=d[a];break;case 28:this.$=new e.StringNode(d[a]);break;case 29:this.$=new e.IntegerNode(d[a]);break;case 30:this.$=new e.BooleanNode(d[a]);break;case 31:this.$=new e.HashNode(d[a]);break;case 32:d[a-1].push(d[a]);this.$=d[a-1];break;case 33:this.$=[d[a]];break;case 34:this.$=[d[a-2],d[a]];break;case 35:this.$=[d[a-2],new e.StringNode(d[a])];break;case 36:this.$=
[d[a-2],new e.IntegerNode(d[a])];break;case 37:this.$=[d[a-2],new e.BooleanNode(d[a])];break;case 38:this.$=new e.IdNode(d[a]);break;case 39:d[a-2].push(d[a]);this.$=d[a-2];break;case 40:this.$=[d[a]]}},table:[{3:1,4:2,5:[2,4],6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{1:[3]},{5:[1,16]},{5:[2,3],7:17,8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,19],20:[2,3],22:[1,13],23:[1,14],24:[1,15]},{5:[2,5],14:[2,5],15:[2,5],16:[2,5],19:[2,
5],20:[2,5],22:[2,5],23:[2,5],24:[2,5]},{4:20,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{4:21,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],24:[2,9]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],24:[2,10]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,
11],23:[2,11],24:[2,11]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],24:[2,12]},{17:22,21:23,33:[1,25],35:24},{17:26,21:23,33:[1,25],35:24},{17:27,21:23,33:[1,25],35:24},{17:28,21:23,33:[1,25],35:24},{21:29,33:[1,25],35:24},{1:[2,1]},{6:30,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{5:[2,6],14:[2,6],15:[2,6],16:[2,6],19:[2,6],20:[2,6],22:[2,6],23:[2,6],24:[2,6]},{17:22,18:[1,31],21:23,33:[1,25],35:24},{10:32,20:[1,
33]},{10:34,20:[1,33]},{18:[1,35]},{18:[2,24],21:40,25:36,26:37,27:38,28:[1,41],29:[1,42],30:[1,43],31:39,32:44,33:[1,45],35:24},{18:[2,38],28:[2,38],29:[2,38],30:[2,38],33:[2,38],36:[1,46]},{18:[2,40],28:[2,40],29:[2,40],30:[2,40],33:[2,40],36:[2,40]},{18:[1,47]},{18:[1,48]},{18:[1,49]},{18:[1,50],21:51,33:[1,25],35:24},{5:[2,2],8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,2],22:[1,13],23:[1,14],24:[1,15]},{14:[2,20],15:[2,20],16:[2,20],19:[2,20],22:[2,20],23:[2,20],24:[2,
20]},{5:[2,7],14:[2,7],15:[2,7],16:[2,7],19:[2,7],20:[2,7],22:[2,7],23:[2,7],24:[2,7]},{21:52,33:[1,25],35:24},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],24:[2,8]},{14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],24:[2,14]},{18:[2,22],21:40,26:53,27:54,28:[1,41],29:[1,42],30:[1,43],31:39,32:44,33:[1,45],35:24},{18:[2,23]},{18:[2,26],28:[2,26],29:[2,26],30:[2,26],33:[2,26]},{18:[2,31],32:55,33:[1,56]},{18:[2,27],28:[2,27],29:[2,27],30:[2,27],33:[2,
27]},{18:[2,28],28:[2,28],29:[2,28],30:[2,28],33:[2,28]},{18:[2,29],28:[2,29],29:[2,29],30:[2,29],33:[2,29]},{18:[2,30],28:[2,30],29:[2,30],30:[2,30],33:[2,30]},{18:[2,33],33:[2,33]},{18:[2,40],28:[2,40],29:[2,40],30:[2,40],33:[2,40],34:[1,57],36:[2,40]},{33:[1,58]},{14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],24:[2,13]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],24:[2,16]},{5:[2,17],14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,
17],23:[2,17],24:[2,17]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],24:[2,18]},{18:[1,59]},{18:[1,60]},{18:[2,21]},{18:[2,25],28:[2,25],29:[2,25],30:[2,25],33:[2,25]},{18:[2,32],33:[2,32]},{34:[1,57]},{21:61,28:[1,62],29:[1,63],30:[1,64],33:[1,25],35:24},{18:[2,39],28:[2,39],29:[2,39],30:[2,39],33:[2,39],36:[2,39]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],24:[2,19]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,
15],22:[2,15],23:[2,15],24:[2,15]},{18:[2,34],33:[2,34]},{18:[2,35],33:[2,35]},{18:[2,36],33:[2,36]},{18:[2,37],33:[2,37]}],defaultActions:{16:[2,1],37:[2,23],53:[2,21]},parseError:function(a){throw Error(a);},parse:function(a){function b(){var f;f=c.lexer.lex()||1;typeof f!=="number"&&(f=c.symbols_[f]||f);return f}var c=this,e=[0],f=[null],d=[],p=this.table,s="",q=0,t=0,m=0;this.lexer.setInput(a);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;if(typeof this.lexer.yylloc=="undefined")this.lexer.yylloc=
{};a=this.lexer.yylloc;d.push(a);if(typeof this.yy.parseError==="function")this.parseError=this.yy.parseError;for(var i,n,j,k,o={},r,l;;){j=e[e.length-1];this.defaultActions[j]?k=this.defaultActions[j]:(i==null&&(i=b()),k=p[j]&&p[j][i]);if((typeof k==="undefined"||!k.length||!k[0])&&!m){l=[];for(r in p[j])this.terminals_[r]&&r>2&&l.push("'"+this.terminals_[r]+"'");var u="",u=this.lexer.showPosition?"Parse error on line "+(q+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+l.join(", ")+", got '"+
this.terminals_[i]+"'":"Parse error on line "+(q+1)+": Unexpected "+(i==1?"end of input":"'"+(this.terminals_[i]||i)+"'");this.parseError(u,{text:this.lexer.match,token:this.terminals_[i]||i,line:this.lexer.yylineno,loc:a,expected:l})}if(k[0]instanceof Array&&k.length>1)throw Error("Parse Error: multiple actions possible at state: "+j+", token: "+i);switch(k[0]){case 1:e.push(i);f.push(this.lexer.yytext);d.push(this.lexer.yylloc);e.push(k[1]);i=null;n?(i=n,n=null):(t=this.lexer.yyleng,s=this.lexer.yytext,
q=this.lexer.yylineno,a=this.lexer.yylloc,m>0&&m--);break;case 2:l=this.productions_[k[1]][1];o.$=f[f.length-l];o._$={first_line:d[d.length-(l||1)].first_line,last_line:d[d.length-1].last_line,first_column:d[d.length-(l||1)].first_column,last_column:d[d.length-1].last_column};j=this.performAction.call(o,s,t,q,this.yy,k[1],f,d);if(typeof j!=="undefined")return j;l&&(e=e.slice(0,l*-2),f=f.slice(0,-1*l),d=d.slice(0,-1*l));e.push(this.productions_[k[1]][0]);f.push(o.$);d.push(o._$);k=p[e[e.length-2]][e[e.length-
1]];e.push(k);break;case 3:return!0}}return!0}},b=function(){return{EOF:1,parseError:function(a,b){if(this.yy.parseError)this.yy.parseError(a,b);else throw Error(a);},setInput:function(a){this._input=a;this._more=this._less=this.done=!1;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};return this},input:function(){var a=this._input[0];this.yytext+=a;this.yyleng++;this.match+=a;this.matched+=
a;a.match(/\n/)&&this.yylineno++;this._input=this._input.slice(1);return a},unput:function(a){this._input=a+this._input;return this},more:function(){this._more=!0;return this},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;a.length<20&&(a+=this._input.substr(0,20-a.length));return(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=
this.pastInput(),b=Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+b+"^"},next:function(){if(this.done)return this.EOF;if(!this._input)this.done=!0;var a,b;if(!this._more)this.match=this.yytext="";for(var c=this._currentRules(),e=0;e<c.length;e++)if(a=this._input.match(this.rules[c[e]]))if((b=a[0].match(/\n.*/g))&&(this.yylineno+=b.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:b?b[b.length-1].length-
1:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this._more=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],a=this.performAction.call(this,this.yy,this,c[e],this.conditionStack[this.conditionStack.length-1]))return a;else return;if(this._input==="")return this.EOF;else this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},
lex:function(){var a=this.next();return typeof a!=="undefined"?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(a){this.begin(a)},performAction:function(a,b,c){switch(c){case 0:b.yytext.slice(-1)!=="\\"&&this.begin("mu");if(b.yytext.slice(-1)===
"\\")b.yytext=b.yytext.substr(0,b.yyleng-1),this.begin("emu");if(b.yytext)return 14;break;case 1:return 14;case 2:return this.popState(),14;case 3:return 24;case 4:return 16;case 5:return 20;case 6:return 19;case 7:return 19;case 8:return 23;case 9:return 23;case 10:return b.yytext=b.yytext.substr(3,b.yyleng-5),this.popState(),15;case 11:return 22;case 12:return 34;case 13:return 33;case 14:return 33;case 15:return 36;case 17:return this.popState(),18;case 18:return this.popState(),18;case 19:return b.yytext=
b.yytext.substr(1,b.yyleng-2).replace(/\\"/g,'"'),28;case 20:return 30;case 21:return 30;case 22:return 29;case 23:return 33;case 24:return b.yytext=b.yytext.substr(1,b.yyleng-2),33;case 25:return"INVALID";case 26:return 5}},rules:[/^[^\x00]*?(?=(\{\{))/,/^[^\x00]+/,/^[^\x00]{2,}?(?=(\{\{))/,/^\{\{>/,/^\{\{#/,/^\{\{\//,/^\{\{\^/,/^\{\{\s*else\b/,/^\{\{\{/,/^\{\{&/,/^\{\{![\s\S]*?\}\}/,/^\{\{/,/^=/,/^\.(?=[} ])/,/^\.\./,/^[\/.]/,/^\s+/,/^\}\}\}/,/^\}\}/,/^"(\\["]|[^"])*"/,/^true(?=[}\s])/,/^false(?=[}\s])/,
/^[0-9]+(?=[}\s])/,/^[a-zA-Z0-9_$-]+(?=[=}\s\/.])/,/^\[[^\]]*\]/,/^./,/^$/],conditions:{mu:{rules:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],inclusive:!1},emu:{rules:[2],inclusive:!1},INITIAL:{rules:[0,1,26],inclusive:!0}}}}();c.lexer=b;return c}();
if(typeof require!=="undefined"&&typeof exports!=="undefined")exports.parser=handlebars,exports.parse=function(){return handlebars.parse.apply(handlebars,arguments)},exports.main=function(c){if(!c[1])throw Error("Usage: "+c[0]+" FILE");c=typeof process!=="undefined"?require("fs").readFileSync(require("path").join(process.cwd(),c[1]),"utf8"):require("file").path(require("file").cwd()).join(c[1]).read({charset:"utf-8"});return exports.parser.parse(c)},typeof module!=="undefined"&&require.main===module&&
exports.main(typeof process!=="undefined"?process.argv.slice(1):require("system").args);Handlebars.Parser=handlebars;Handlebars.parse=function(c){Handlebars.Parser.yy=Handlebars.AST;return Handlebars.Parser.parse(c)};Handlebars.print=function(c){return(new Handlebars.PrintVisitor).accept(c)};Handlebars.logger={DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(){}};Handlebars.log=function(c,b){Handlebars.logger.log(c,b)};
(function(){Handlebars.AST={};Handlebars.AST.ProgramNode=function(b,a){this.type="program";this.statements=b;if(a)this.inverse=new Handlebars.AST.ProgramNode(a)};Handlebars.AST.MustacheNode=function(b,a,c){this.type="mustache";this.id=b[0];this.params=b.slice(1);this.hash=a;this.escaped=!c};Handlebars.AST.PartialNode=function(b,a){this.type="partial";this.id=b;this.context=a};var c=function(b,a){if(b.original!==a.original)throw new Handlebars.Exception(b.original+" doesn't match "+a.original);};Handlebars.AST.BlockNode=
function(b,a,g){c(b.id,g);this.type="block";this.mustache=b;this.program=a};Handlebars.AST.InverseNode=function(b,a,g){c(b.id,g);this.type="inverse";this.mustache=b;this.program=a};Handlebars.AST.ContentNode=function(b){this.type="content";this.string=b};Handlebars.AST.HashNode=function(b){this.type="hash";this.pairs=b};Handlebars.AST.IdNode=function(b){this.type="ID";this.original=b.join(".");for(var a=[],c=0,h=0,e=b.length;h<e;h++){var f=b[h];f===".."?c++:f==="."||f==="this"?this.isScoped=!0:a.push(f)}this.parts=
a;this.string=a.join(".");this.depth=c;this.isSimple=a.length===1&&c===0};Handlebars.AST.StringNode=function(b){this.type="STRING";this.string=b};Handlebars.AST.IntegerNode=function(b){this.type="INTEGER";this.integer=b};Handlebars.AST.BooleanNode=function(b){this.type="BOOLEAN";this.bool=b};Handlebars.AST.CommentNode=function(b){this.type="comment";this.comment=b}})();
Handlebars.Exception=function(c){var b=Error.prototype.constructor.apply(this,arguments),a;for(a in b)b.hasOwnProperty(a)&&(this[a]=b[a]);this.message=b.message};Handlebars.Exception.prototype=Error();Handlebars.SafeString=function(c){this.string=c};Handlebars.SafeString.prototype.toString=function(){return this.string.toString()};
(function(){var c={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},b=/&(?!\w+;)|[<>"'`]/g,a=/[&<>"'`]/,g=function(a){return c[a]||"&amp;"};Handlebars.Utils={escapeExpression:function(c){if(c instanceof Handlebars.SafeString)return c.toString();else if(c==null||c===!1)return"";return!a.test(c)?c:c.replace(b,g)},isEmpty:function(a){return typeof a==="undefined"?!0:a===null?!0:a===!1?!0:Object.prototype.toString.call(a)==="[object Array]"&&a.length===0?!0:!1}}})();Handlebars.Compiler=function(){};
Handlebars.JavaScriptCompiler=function(){};
(function(c,b){c.OPCODE_MAP={appendContent:1,getContext:2,lookupWithHelpers:3,lookup:4,append:5,invokeMustache:6,appendEscaped:7,pushString:8,truthyOrFallback:9,functionOrFallback:10,invokeProgram:11,invokePartial:12,push:13,assignToHash:15,pushStringParam:16};c.MULTI_PARAM_OPCODES={appendContent:1,getContext:1,lookupWithHelpers:2,lookup:1,invokeMustache:3,pushString:1,truthyOrFallback:1,functionOrFallback:1,invokeProgram:3,invokePartial:1,push:1,assignToHash:1,pushStringParam:1};c.DISASSEMBLE_MAP=
{};for(var a in c.OPCODE_MAP)c.DISASSEMBLE_MAP[c.OPCODE_MAP[a]]=a;c.multiParamSize=function(f){return c.MULTI_PARAM_OPCODES[c.DISASSEMBLE_MAP[f]]};c.prototype={compiler:c,disassemble:function(){for(var f=this.opcodes,d,a=[],b,e=0,g=f.length;e<g;e++)if(d=f[e],d==="DECLARE")b=f[++e],d=f[++e],a.push("DECLARE "+b+" = "+d);else{b=c.DISASSEMBLE_MAP[d];for(var h=c.multiParamSize(d),i=[],n=0;n<h;n++)d=f[++e],typeof d==="string"&&(d='"'+d.replace("\n","\\n")+'"'),i.push(d);b=b+" "+i.join(" ");a.push(b)}return a.join("\n")},
guid:0,compile:function(f,a){this.children=[];this.depths={list:[]};this.options=a;var b=this.options.knownHelpers;this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0};if(b)for(var c in b)this.options.knownHelpers[c]=b[c];return this.program(f)},accept:function(f){return this[f.type](f)},program:function(f){var f=f.statements,a;this.opcodes=[];for(var b=0,c=f.length;b<c;b++)a=f[b],this[a.type](a);this.isSimple=c===1;this.depths.list=this.depths.list.sort(function(f,
a){return f-a});return this},compileProgram:function(f){var f=(new this.compiler).compile(f,this.options),a=this.guid++;this.usePartial=this.usePartial||f.usePartial;this.children[a]=f;for(var b=0,c=f.depths.list.length;b<c;b++)depth=f.depths.list[b],depth<2||this.addDepth(depth-1);return a},block:function(f){var a=f.mustache,b=this.setupStackForMustache(a),c=this.compileProgram(f.program);f.program.inverse&&(f=this.compileProgram(f.program.inverse),this.declare("inverse",f));this.opcode("invokeProgram",
c,b.length,!!a.hash);this.declare("inverse",null);this.opcode("append")},inverse:function(f){var a=this.setupStackForMustache(f.mustache);this.declare("inverse",this.compileProgram(f.program));this.opcode("invokeProgram",null,a.length,!!f.mustache.hash);this.declare("inverse",null);this.opcode("append")},hash:function(f){var f=f.pairs,a,b;this.opcode("push","{}");for(var c=0,e=f.length;c<e;c++)a=f[c],b=a[1],this.accept(b),this.opcode("assignToHash",a[0])},partial:function(a){var d=a.id;this.usePartial=
!0;a.context?this.ID(a.context):this.opcode("push","depth0");this.opcode("invokePartial",d.original);this.opcode("append")},content:function(a){this.opcode("appendContent",a.string)},mustache:function(a){this.opcode("invokeMustache",this.setupStackForMustache(a).length,a.id.original,!!a.hash);a.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ID:function(a){this.addDepth(a.depth);this.opcode("getContext",a.depth);this.opcode("lookupWithHelpers",a.parts[0]||null,
a.isScoped||!1);for(var d=1,b=a.parts.length;d<b;d++)this.opcode("lookup",a.parts[d])},STRING:function(a){this.opcode("pushString",a.string)},INTEGER:function(a){this.opcode("push",a.integer)},BOOLEAN:function(a){this.opcode("push",a.bool)},comment:function(){},pushParams:function(a){for(var d=a.length,b;d--;)if(b=a[d],this.options.stringParams)b.depth&&this.addDepth(b.depth),this.opcode("getContext",b.depth||0),this.opcode("pushStringParam",b.string);else this[b.type](b)},opcode:function(a,d,b,e){this.opcodes.push(c.OPCODE_MAP[a]);
d!==void 0&&this.opcodes.push(d);b!==void 0&&this.opcodes.push(b);e!==void 0&&this.opcodes.push(e)},declare:function(a,d){this.opcodes.push("DECLARE");this.opcodes.push(a);this.opcodes.push(d)},addDepth:function(a){a!==0&&!this.depths[a]&&(this.depths[a]=!0,this.depths.list.push(a))},setupStackForMustache:function(a){var d=a.params;this.pushParams(d);a.hash&&this.hash(a.hash);this.ID(a.id);return d}};b.prototype={nameLookup:function(a,d){return/^[0-9]+$/.test(d)?a+"["+d+"]":b.isValidJavaScriptVariableName(d)?
a+"."+d:a+"['"+d+"']"},appendToBuffer:function(a){return this.environment.isSimple?"return "+a+";":"buffer += "+a+";"},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(a,d,b,c){this.environment=a;this.options=d||{};this.name=this.environment.name;this.isChild=!!b;this.context=b||{programs:[],aliases:{self:"this"},registers:{list:[]}};this.preamble();this.stackSlot=0;this.stackVars=[];this.compileChildren(a,d);a=a.opcodes;this.i=0;for(e=a.length;this.i<
e;this.i++)a=this.nextOpcode(0),a[0]==="DECLARE"?(this.i+=2,this[a[1]]=a[2]):(this.i+=a[1].length,this[a[0]].apply(this,a[1]));return this.createFunctionContext(c)},nextOpcode:function(a){var d=this.environment.opcodes,b=d[this.i+a],e,g;if(b==="DECLARE")return e=d[this.i+1],a=d[this.i+2],["DECLARE",e,a];else{e=c.DISASSEMBLE_MAP[b];b=c.multiParamSize(b);g=[];for(var h=0;h<b;h++)g.push(d[this.i+h+1+a]);return[e,g]}},eat:function(a){this.i+=a.length},preamble:function(){var a=[];this.useRegister("foundHelper");
if(this.isChild)a.push("");else{var d=this.namespace,b="helpers = helpers || "+d+".helpers;";this.environment.usePartial&&(b=b+" partials = partials || "+d+".partials;");a.push(b)}this.environment.isSimple?a.push(""):a.push(", buffer = "+this.initializeBuffer());this.lastContext=0;this.source=a},createFunctionContext:function(a){var d=this.stackVars;this.isChild||(d=d.concat(this.context.registers.list));d.length>0&&(this.source[1]=this.source[1]+", "+d.join(", "));if(!this.isChild)for(var b in this.context.aliases)this.source[1]=
this.source[1]+", "+b+"="+this.context.aliases[b];this.source[1]&&(this.source[1]="var "+this.source[1].substring(2)+";");this.isChild||(this.source[1]+="\n"+this.context.programs.join("\n")+"\n");this.environment.isSimple||this.source.push("return buffer;");d=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"];b=0;for(var c=this.environment.depths.list.length;b<c;b++)d.push("depth"+this.environment.depths.list[b]);return a?(d.push(this.source.join("\n  ")),Function.apply(this,
d)):(a="function "+(this.name||"")+"("+d.join(",")+") {\n  "+this.source.join("\n  ")+"}",Handlebars.log(Handlebars.logger.DEBUG,a+"\n\n"),a)},appendContent:function(a){this.source.push(this.appendToBuffer(this.quotedString(a)))},append:function(){var a=this.popStack();this.source.push("if("+a+" || "+a+" === 0) { "+this.appendToBuffer(a)+" }");this.environment.isSimple&&this.source.push("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){var a=this.nextOpcode(1),b="";this.context.aliases.escapeExpression=
"this.escapeExpression";a[0]==="appendContent"&&(b=" + "+this.quotedString(a[1][0]),this.eat(a));this.source.push(this.appendToBuffer("escapeExpression("+this.popStack()+")"+b))},getContext:function(a){if(this.lastContext!==a)this.lastContext=a},lookupWithHelpers:function(a,b){if(a){var c=this.nextStack();this.usingKnownHelper=!1;!b&&this.options.knownHelpers[a]?(c=c+" = "+this.nameLookup("helpers",a,"helper"),this.usingKnownHelper=!0):b||this.options.knownHelpersOnly?c=c+" = "+this.nameLookup("depth"+
this.lastContext,a,"context"):(this.register("foundHelper",this.nameLookup("helpers",a,"helper")),c=c+" = foundHelper || "+this.nameLookup("depth"+this.lastContext,a,"context"));c+=";";this.source.push(c)}else this.pushStack("depth"+this.lastContext)},lookup:function(a){var b=this.topStack();this.source.push(b+" = ("+b+" === null || "+b+" === undefined || "+b+" === false ? "+b+" : "+this.nameLookup(b,a,"context")+");")},pushStringParam:function(a){this.pushStack("depth"+this.lastContext);this.pushString(a)},
pushString:function(a){this.pushStack(this.quotedString(a))},push:function(a){this.pushStack(a)},invokeMustache:function(a,b,c){this.populateParams(a,this.quotedString(b),"{}",null,c,function(a,b,d){if(!this.usingKnownHelper)this.context.aliases.helperMissing="helpers.helperMissing",this.context.aliases.undef="void 0",this.source.push("else if("+d+"=== undef) { "+a+" = helperMissing.call("+b+"); }"),a!==d&&this.source.push("else { "+a+" = "+d+"; }")})},invokeProgram:function(a,b,c){var e=this.programExpression(this.inverse),
a=this.programExpression(a);this.populateParams(b,null,a,e,c,function(a,b){if(!this.usingKnownHelper)this.context.aliases.blockHelperMissing="helpers.blockHelperMissing",this.source.push("else { "+a+" = blockHelperMissing.call("+b+"); }")})},populateParams:function(a,b,c,e,g,h){var m=g||this.options.stringParams||e||this.options.data,i=this.popStack(),n=[],j;m?(this.register("tmp1",c),j="tmp1"):j="{ hash: {} }";m&&this.source.push("tmp1.hash = "+(g?this.popStack():"{}")+";");this.options.stringParams&&
this.source.push("tmp1.contexts = [];");for(m=0;m<a;m++)g=this.popStack(),n.push(g),this.options.stringParams&&this.source.push("tmp1.contexts.push("+this.popStack()+");");e&&(this.source.push("tmp1.fn = tmp1;"),this.source.push("tmp1.inverse = "+e+";"));this.options.data&&this.source.push("tmp1.data = data;");n.push(j);this.populateCall(n,i,b||i,h,c!=="{}")},populateCall:function(a,b,c,e,g){var h=["depth0"].concat(a).join(", "),a=["depth0"].concat(c).concat(a).join(", "),c=this.nextStack();this.usingKnownHelper?
this.source.push(c+" = "+b+".call("+h+");"):(this.context.aliases.functionType='"function"',this.source.push("if("+(g?"foundHelper && ":"")+"typeof "+b+" === functionType) { "+c+" = "+b+".call("+h+"); }"));e.call(this,c,a,b);this.usingKnownHelper=!1},invokePartial:function(a){params=[this.nameLookup("partials",a,"partial"),"'"+a+"'",this.popStack(),"helpers","partials"];this.options.data&&params.push("data");this.pushStack("self.invokePartial("+params.join(", ")+");")},assignToHash:function(a){var b=
this.popStack();this.source.push(this.topStack()+"['"+a+"'] = "+b+";")},compiler:b,compileChildren:function(a,b){for(var c=a.children,e,g,h=0,m=c.length;h<m;h++){e=c[h];g=new this.compiler;this.context.programs.push("");var i=this.context.programs.length;e.index=i;e.name="program"+i;this.context.programs[i]=g.compile(e,b,this.context)}},programExpression:function(a){if(a==null)return"self.noop";for(var b=this.environment.children[a],a=b.depths.list,b=[b.index,b.name,"data"],c=0,e=a.length;c<e;c++)depth=
a[c],depth===1?b.push("depth0"):b.push("depth"+(depth-1));return a.length===0?"self.program("+b.join(", ")+")":(b.shift(),"self.programWithDepth("+b.join(", ")+")")},register:function(a,b){this.useRegister(a);this.source.push(a+" = "+b+";")},useRegister:function(a){this.context.registers[a]||(this.context.registers[a]=!0,this.context.registers.list.push(a))},pushStack:function(a){this.source.push(this.nextStack()+" = "+a+";");return"stack"+this.stackSlot},nextStack:function(){this.stackSlot++;this.stackSlot>
this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot);return"stack"+this.stackSlot},popStack:function(){return"stack"+this.stackSlot--},topStack:function(){return"stack"+this.stackSlot},quotedString:function(a){return'"'+a.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")+'"'}};a="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" ");
for(var g=b.RESERVED_WORDS={},h=0,e=a.length;h<e;h++)g[a[h]]=!0;b.isValidJavaScriptVariableName=function(a){return!b.RESERVED_WORDS[a]&&/^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(a)?!0:!1}})(Handlebars.Compiler,Handlebars.JavaScriptCompiler);Handlebars.precompile=function(c,b){var b=b||{},a=Handlebars.parse(c),a=(new Handlebars.Compiler).compile(a,b);return(new Handlebars.JavaScriptCompiler).compile(a,b)};
Handlebars.compile=function(c,b){var b=b||{},a;return function(g,h){if(!a){var e=Handlebars.parse(c),e=(new Handlebars.Compiler).compile(e,b),e=(new Handlebars.JavaScriptCompiler).compile(e,b,void 0,!0);a=Handlebars.template(e)}return a.call(this,g,h)}};
Handlebars.VM={template:function(c){var b={escapeExpression:Handlebars.Utils.escapeExpression,invokePartial:Handlebars.VM.invokePartial,programs:[],program:function(a,b,c){var e=this.programs[a];return c?Handlebars.VM.program(b,c):(e||(e=this.programs[a]=Handlebars.VM.program(b)),e)},programWithDepth:Handlebars.VM.programWithDepth,noop:Handlebars.VM.noop};return function(a,g){g=g||{};return c.call(b,Handlebars,a,g.helpers,g.partials,g.data)}},programWithDepth:function(c,b,a){var g=Array.prototype.slice.call(arguments,
2);return function(a,e){e=e||{};return c.apply(this,[a,e.data||b].concat(g))}},program:function(c,b){return function(a,g){g=g||{};return c(a,g.data||b)}},noop:function(){return""},invokePartial:function(c,b,a,g,h,e){options={helpers:g,partials:h,data:e};if(c===void 0)throw new Handlebars.Exception("The partial "+b+" could not be found");else if(c instanceof Function)return c(a,options);else if(Handlebars.compile)return h[b]=Handlebars.compile(c),h[b](a,options);else throw new Handlebars.Exception("The partial "+
b+" could not be compiled when running in runtime-only mode");}};Handlebars.template=Handlebars.VM.template;
