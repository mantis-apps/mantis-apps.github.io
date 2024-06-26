"use strict";(self.webpackChunk_mantis_ui_source=self.webpackChunk_mantis_ui_source||[]).push([[623],{"./feature/spartanui/ui-button-helm/src/lib/hlm-button.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>HlmButtonDirective});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_spartan_ng_ui_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@spartan-ng/ui-core/fesm2022/spartan-ng-ui-core.mjs");const buttonVariants=(0,__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs").F)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"underline-offset-4 hover:underline text-primary"},size:{default:"h-10 py-2 px-4",sm:"h-9 px-3 rounded-md",lg:"h-11 px-8 rounded-md",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}});let HlmButtonDirective=class HlmButtonDirective{constructor(){this.userClass=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)("",{alias:"class"}),this._settableClass=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(""),this._computedClass=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)((()=>(0,_spartan_ng_ui_core__WEBPACK_IMPORTED_MODULE_2__.Ad)(buttonVariants({variant:this._variant(),size:this._size()}),this._settableClass(),this.userClass()))),this._variant=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)("default"),this._size=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)("default")}setClass(value){this._settableClass.set(value)}set variant(variant){this._variant.set(variant)}set size(size){this._size.set(size)}static#_=this.propDecorators={userClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,args:[{isSignal:!0,alias:"class",required:!1,transform:void 0}]}],variant:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}]}};HlmButtonDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({selector:"[hlmBtn]",standalone:!0,host:{"[class]":"_computedClass()"}})],HlmButtonDirective)},"./feature/ui/src/lib/ui/atoms/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>ButtonComponent});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("tslib"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_spartan_ng_ui_button_helm__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./feature/spartanui/ui-button-helm/src/lib/hlm-button.directive.ts");let ButtonComponent=class ButtonComponent{constructor(){this.variant="default",this.size="default"}static#_=this.propDecorators={variant:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]}};ButtonComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({selector:"mantis-button",standalone:!0,imports:[_spartan_ng_ui_button_helm__WEBPACK_IMPORTED_MODULE_2__.j],template:'\n  <button hlmBtn [variant]="variant" [size]="size">\n    <ng-content></ng-content>\n  </button> '})],ButtonComponent)},"./feature/ui/src/lib/ui/atoms/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>IconComponent});var tslib=__webpack_require__("tslib"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),ng_icons_core=__webpack_require__("./node_modules/@ng-icons/core/fesm2022/ng-icons-core.mjs"),spartan_ng_ui_core=__webpack_require__("./node_modules/@spartan-ng/ui-core/fesm2022/spartan-ng-ui-core.mjs"),dist=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs");const DEFINED_SIZES=["xs","sm","base","lg","xl","none"],iconVariants=(0,dist.F)("inline-flex",{variants:{variant:{xs:"h-3 w-3",sm:"h-4 w-4",base:"h-6 w-6",lg:"h-8 w-8",xl:"h-12 w-12",none:""}},defaultVariants:{variant:"base"}}),isDefinedSize=size=>DEFINED_SIZES.includes(size),TAILWIND_H_W_PATTERN=/\b(h-\d+|w-\d+)\b/g;let HlmIconComponent=class HlmIconComponent{constructor(){this._host=(0,core.inject)(core.ElementRef),this._platformId=(0,core.inject)(core.PLATFORM_ID),this._hostClasses=(0,core.signal)(""),this._name=(0,core.signal)(""),this._size=(0,core.signal)("base"),this._color=(0,core.signal)(void 0),this._strokeWidth=(0,core.signal)(void 0),this.userCls=(0,core.signal)(""),this.ngIconSize=(0,core.computed)((()=>isDefinedSize(this._size())?"100%":this._size())),this.ngIconCls=(0,core.signal)(""),this._computedClass=(0,core.computed)((()=>{const size=this._size(),hostClasses=this._hostClasses(),userCls=this.userCls(),variant=isDefinedSize(size)?size:"none",classes="none"===variant&&"none"===size?hostClasses:hostClasses.replace(TAILWIND_H_W_PATTERN,"");return(0,spartan_ng_ui_core.Ad)(iconVariants({variant}),userCls,classes)})),(0,common.isPlatformBrowser)(this._platformId)&&(this._mutObs=new MutationObserver((mutations=>{mutations.forEach((mutation=>{"class"===mutation.attributeName&&this._hostClasses.set(mutation.target?.className??"")}))})),this._mutObs.observe(this._host.nativeElement,{attributes:!0}))}ngOnDestroy(){this._mutObs?.disconnect(),this._mutObs=void 0}set name(value){this._name.set(value)}set size(value){this._size.set(value)}set color(value){this._color.set(value)}set strokeWidth(value){this._strokeWidth.set(value)}set ngIconClass(cls){this.ngIconCls.set(cls)}set class(cls){this.userCls.set(cls)}static#_=this.ctorParameters=()=>[];static#_2=this.propDecorators={name:[{type:core.Input}],size:[{type:core.Input}],color:[{type:core.Input}],strokeWidth:[{type:core.Input}],ngIconClass:[{type:core.Input}],class:[{type:core.Input}]}};HlmIconComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"hlm-icon",standalone:!0,imports:[ng_icons_core.Uq],encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,template:'\n\t\t<ng-icon\n\t\t\t[class]="ngIconCls()"\n\t\t\t[size]="ngIconSize()"\n\t\t\t[name]="_name()"\n\t\t\t[color]="_color()"\n\t\t\t[strokeWidth]="_strokeWidth()"\n\t\t/>\n\t',host:{"[class]":"_computedClass()"}}),(0,tslib_es6.Sn)("design:paramtypes",[])],HlmIconComponent);var ng_icons_lucide=__webpack_require__("./node_modules/@ng-icons/lucide/fesm2022/ng-icons-lucide.mjs");const ICONS=new core.InjectionToken("LUCIDE_ICONS");let IconComponent=class IconComponent{constructor(){this.icons=(0,core.inject)(ICONS),this.size="none"}static#_=this.propDecorators={name:[{type:core.Input,args:[{required:!0}]}],size:[{type:core.Input}],color:[{type:core.Input}],strokeWidth:[{type:core.Input}],class:[{type:core.Input}]}};IconComponent=(0,tslib.Cg)([(0,core.Component)({selector:"mantis-icon",standalone:!0,imports:[HlmIconComponent],providers:[{provide:ICONS,useValue:{lucideMail:"lucideMail",lucideUser2:"lucideUser2"}},(0,ng_icons_core.EB)({lucideMail:ng_icons_lucide.Mi,lucideUser2:ng_icons_lucide._qu})],template:'\n    <hlm-icon\n      [name]="name"\n      [size]="size"\n      [color]="color"\n      [strokeWidth]="strokeWidth"\n      [class]="class"></hlm-icon>\n  '})],IconComponent)},"./feature/ui/src/lib/ui/atoms/icon/icon-list/icon-list.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>icon_list_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib=__webpack_require__("tslib"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),icon_component=__webpack_require__("./feature/ui/src/lib/ui/atoms/icon/icon.component.ts"),button_component=__webpack_require__("./feature/ui/src/lib/ui/atoms/button/button.component.ts"),ng_icons_core=__webpack_require__("./node_modules/@ng-icons/core/fesm2022/ng-icons-core.mjs"),ng_icons_lucide=__webpack_require__("./node_modules/@ng-icons/lucide/fesm2022/ng-icons-lucide.mjs");let IconListComponent=class IconListComponent{constructor(){this.icons=["lucideMail","lucideUser2","lucideActivity","lucideAccessibility","lucideBackpack","lucideApple","lucideAlarmCheck","lucideAlarmClock","lucideTrain","lucideTrash","lucideTornado","lucideTruck","lucideTv","lucideTrophy","lucidePlane","lucideShield","lucideShip","lucideShoppingCart","lucideShoppingBag","lucideSettings","lucideSearch","lucideScissors","lucideBarChart","lucideBattery","lucideDatabase","lucideCloud","lucideCamera","lucideCalendar","lucideBook","lucideBell","lucideLasso","lucideTicket","lucideThumbsUp","lucideTrees","lucideWrench"]}};IconListComponent=(0,tslib.Cg)([(0,core.Component)({selector:"mantis-icon-list",standalone:!0,imports:[common.CommonModule,button_component.Q,icon_component.R],providers:[(0,ng_icons_core.EB)({lucideMail:ng_icons_lucide.Mi,lucideUser2:ng_icons_lucide._qu,lucideActivity:ng_icons_lucide.Q1O,lucideAccessibility:ng_icons_lucide.B1t,lucideBackpack:ng_icons_lucide.HQu,lucideApple:ng_icons_lucide.hpq,lucideAlarmCheck:ng_icons_lucide.SrK,lucideAlarmClock:ng_icons_lucide.SsO,lucideTrain:ng_icons_lucide.TlM,lucideTrash:ng_icons_lucide.zZe,lucideTornado:ng_icons_lucide.o6R,lucideTruck:ng_icons_lucide.UnV,lucideTv:ng_icons_lucide.Nte,lucideTrophy:ng_icons_lucide.Dcp,lucidePlane:ng_icons_lucide.TLb,lucideShield:ng_icons_lucide.WMK,lucideShip:ng_icons_lucide.NJS,lucideShoppingCart:ng_icons_lucide.BzU,lucideShoppingBag:ng_icons_lucide.rnZ,lucideSettings:ng_icons_lucide.s3_,lucideSearch:ng_icons_lucide.DJq,lucideScissors:ng_icons_lucide.I2F,lucideBarChart:ng_icons_lucide.k_j,lucideBattery:ng_icons_lucide.EC9,lucideDatabase:ng_icons_lucide.myh,lucideCloud:ng_icons_lucide.mZP,lucideCamera:ng_icons_lucide.Ywu,lucideCalendar:ng_icons_lucide.VFj,lucideBook:ng_icons_lucide.ANb,lucideBell:ng_icons_lucide.y_L,lucideLasso:ng_icons_lucide.Pj,lucideTicket:ng_icons_lucide.l8u,lucideThumbsUp:ng_icons_lucide.LvM,lucideTrees:ng_icons_lucide.qdS,lucideWrench:ng_icons_lucide.kXF})],template:'\n    <div class="grid grid-cols-7 gap-4 max-w-lg mx-auto mb-4">\n      <mantis-button *ngFor="let icon of icons" variant="outline" class="flex justify-center items-center" size="icon">\n        <mantis-icon [name]="icon" size="sm" class="flex" />\n        <span class="sr-only">{{ icon }}</span>\n      </mantis-button>\n    </div>\n  '})],IconListComponent);const icon_list_component_stories={title:"Atoms/Primitives/Icons List",tags:["autodocs"],component:IconListComponent,decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule]})]},Default={args:{icons:["lucideMail","lucideUser2","lucideActivity","lucideAccessibility","lucideBackpack","lucideApple","lucideAlarmCheck","lucideAlarmClock","lucideTrain","lucideTrash","lucideTornado","lucideTruck","lucideTv","lucideTrophy","lucidePlane","lucideShield","lucideShip","lucideShoppingCart","lucideShoppingBag","lucideSettings","lucideSearch","lucideScissors","lucideBarChart","lucideBattery","lucideDatabase","lucideCloud","lucideCamera","lucideCalendar","lucideBook","lucideBell","lucideLasso","lucideTicket","lucideThumbsUp","lucideTrees","lucideWrench"]}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    icons: ['lucideMail', 'lucideUser2', 'lucideActivity', 'lucideAccessibility', 'lucideBackpack', 'lucideApple', 'lucideAlarmCheck', 'lucideAlarmClock', 'lucideTrain', 'lucideTrash', 'lucideTornado', 'lucideTruck', 'lucideTv', 'lucideTrophy', 'lucidePlane', 'lucideShield', 'lucideShip', 'lucideShoppingCart', 'lucideShoppingBag', 'lucideSettings', 'lucideSearch', 'lucideScissors', 'lucideBarChart', 'lucideBattery', 'lucideDatabase', 'lucideCloud', 'lucideCamera', 'lucideCalendar', 'lucideBook', 'lucideBell', 'lucideLasso', 'lucideTicket', 'lucideThumbsUp', 'lucideTrees', 'lucideWrench']\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);