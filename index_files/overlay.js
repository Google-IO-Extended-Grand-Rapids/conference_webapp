google.maps.__gjsload__('overlay', '\'use strict\';function wT(a){this.j=a}P(wT,U);Za(wT[J],function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&we(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.j:null))});function xT(){}function yT(){var a=this.gm_props_;if(this[Pn]()){if(this[Oc]()){if(!a.Tf&&this.onAdd)this.onAdd();a.Tf=!0;this.draw()}}else{if(a.Tf)if(this[Zc])this[Zc]();else this[Fb]();a.Tf=!1}}function zT(a){a.gm_props_=a.gm_props_||new xT;return a.gm_props_}function AT(a){Hj[K](this);this.ma=S(a,yT)}P(AT,Hj);function BT(){}\nBT[J].j=function(a){var b=a[Mn](),c=zT(a),d=c.kc;c.kc=b;d&&(c=zT(a),(d=c.Ca)&&d[rn](),(d=c.gj)&&d[rn](),a[rn](),a.set("panes",null),a.set("projection",null),R(c.Z,T[zb]),c.Z=null,c.qf&&(c.qf.ma(),c.qf=null),gs("Ox","-p",a));if(b){c=zT(a);d=c.qf;d||(d=c.qf=new AT(a));R(c.Z,T[zb]);var e=c.Ca=c.Ca||new or,f=b[B];e[p]("zoom",f);e[p]("offset",f);e[p]("center",f,"projectionCenterQ");e[p]("projection",b);e[p]("projectionTopLeft",f);e=c.gj=c.gj||new wT(e);e[p]("zoom",f);e[p]("offset",f);e[p]("projection",b);\ne[p]("projectionTopLeft",f);a[p]("projection",e,"outProjection");a[p]("panes",f);e=S(d,d.X);c.Z=[T[A](a,"panes_changed",e),T[A](f,"zoom_changed",e),T[A](f,"offset_changed",e),T[A](b,"projection_changed",e),T[A](f,"projectioncenterq_changed",e),T[v](b,"forceredraw",d)];d.X();b instanceof eh&&(ds(b,"Ox"),fs("Ox","-p",a,!!b.$))}};var CT=new BT;zh.overlay=function(a){eval(a)};bg("overlay",CT);\n')