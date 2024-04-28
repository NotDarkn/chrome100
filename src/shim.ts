export type Shim = {
  url: string;
  codename: string;
};

export type ShimMirror = {
  name: string;
  shims: Shim[];
};

export const shimMirrors: ShimMirror[] = [
  {
    name: "NotDarkn Mirror",
    shims: [
      { 
        url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/ambassador.zip", 
        codename: "ambassador" 
      },
      { url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/brask.zip", codename: "brask" },
      { url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/brya.zip", codename: "brya" },
      { url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/clapper.zip", 
      codename: "clapper" 

      },
      { url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/coral.zip", codename: "coral" },
      { 
        url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/corsola.zip", 
        codename: "corsola" 
      },
      { 
        url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/dedede.zip", 
        codename: "dedede" 
      },
      { 
        url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/enguarde.zip", 
        codename: "enguarde" 
      },
      { 
        url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/glimmer.zip", 
        codename: "glimmer" 
      },
      { url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/grunt.zip", codename: "grunt" },
      { url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/hana.zip", codename: "hana" },
      { url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/hatch.zip", codename: "hatch" },
      { 
        url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/jacuzzi.zip", 
        codename: "jacuzzi" 
      },
      { url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/kefka.zip", codename: "kefka" },
      { url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/kukui.zip",  codename: "kukui" },
      { url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/lulu.zip", codename: "lulu" },
      { url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/nami.zip", codename: "nami" },
      { url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/nissa.zip", codename: "nissa" },
      { 
        url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/octopus.zip", 
        codename: "octopus" 
      },
      { url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/orco.zip", codename: "orco" },
      { url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/pyro.zip", codename: "pyro" },
      { url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/reks.zip", codename: "reks" },
      { 
        url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/sentry.zip", 
        codename: "sentry" 
      },
      { url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/stout.zip", codename: "stout" },
      { 
        url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/strongbad.zip", 
        codename: "strongbad" 
      },
      { url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/tidus.zip", codename: "tidus" },
      { url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/ultima.zip", codename: "ultima" },
      { 
        url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/volteer.zip", 
        codename: "volteer" 
      },
      { url: "https://dl.darkn.bio/api/raw/?path=/SH1mmer/zork.zip", codename: "zork" },
    ],
  },
  {
    name: "DiffuseHyperion Mirror",
    shims: [
      { url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/brask.zip", codename: "brask" },
      { url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/brya.zip", codename: "brya" },
      {
        url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/clapper.zip",
        codename: "clapper",
      },
      { url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/coral.zip", codename: "coral" },
      {
        url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/corsola.zip",
        codename: "corsola",
      },
      {
        url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/dedede.zip",
        codename: "dedede",
      },
      {
        url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/enguarde.zip",
        codename: "enguarde",
      },
      {
        url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/glimmer.zip",
        codename: "glimmer",
      },
      { url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/grunt.zip", codename: "grunt" },
      { url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/hana.zip", codename: "hana" },
      { url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/hatch.zip", codename: "hatch" },
      {
        url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/jacuzzi.zip",
        codename: "jacuzzi",
      },
      { url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/kefka.zip", codename: "kefka" },
      { url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/kukui.zip", codename: "kukui" },
      { url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/nami.zip", codename: "nami" },
      { url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/nissa.zip", codename: "nissa" },
      {
        url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/octopus.zip",
        codename: "octopus",
      },
      { url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/orco.zip", codename: "orco" },
      { url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/pyro.zip", codename: "pyro" },
      { url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/reks.zip", codename: "reks" },
      {
        url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/sentry.zip",
        codename: "sentry",
      },
      { url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/stout.zip", codename: "stout" },
      {
        url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/strongbad.zip",
        codename: "strongbad",
      },
      { url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/tidus.zip", codename: "tidus" },
      {
        url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/ultima.zip",
        codename: "ultima",
      },
      {
        url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/volteer.zip",
        codename: "volteer",
      },
      { url: "https://dl.diffusehyperion.com/api/raw/?path=/rma/zork.zip", codename: "zork" },
    ],
  },
  {
    name: "kxtzownsu Mirror",
    shims: [
      { url: "https://dl.kxtz.dev/shims/Raw/ambassador.zip", codename: "ambassador" },
      { url: "https://dl.kxtz.dev/shims/Raw/brask.zip", codename: "brask" },
      { url: "https://dl.kxtz.dev/shims/Raw/rya.zip", codename: "brya" },
      { url: "https://dl.kxtz.dev/shims/Raw/clapper.zip", codename: "clapper" },
      { url: "https://dl.kxtz.dev/shims/Raw/coral.zip", codename: "coral" },
      { url: "https://dl.kxtz.dev/shims/Raw/corsola.zip", codename: "corsola" },
      { url: "https://dl.kxtz.dev/shims/Raw/dedede.zip", codename: "dedede" },
      { url: "https://dl.kxtz.dev/shims/Raw/enguarde.zip", codename: "enguarde" },
      { url: "https://dl.kxtz.dev/shims/Raw/glimmer.zip", codename: "glimmer" },
      { url: "https://dl.kxtz.dev/shims/Raw/grunt.zip", codename: "grunt" },
      { url: "https://dl.kxtz.dev/shims/Raw/hana.zip", codename: "hana" },
      { url: "https://dl.kxtz.dev/shims/Raw/hatch.zip", codename: "hatch" },
      { url: "https://dl.kxtz.dev/shims/Raw/jacuzzi.zip", codename: "jacuzzi" },
      { url: "https://dl.kxtz.dev/shims/Raw/kefka.zip", codename: "kefka" },
      { url: "https://dl.kxtz.dev/shims/Raw/kukui.zip", codename: "kukui" },
      { url: "https://dl.kxtz.dev/shims/Raw/lulu.zip", codename: "lulu" },
      { url: "https://dl.kxtz.dev/shims/Raw/nami.zip", codename: "nami" },
      { url: "https://dl.kxtz.dev/shims/Raw/octopus.zip", codename: "octopus" },
      { url: "https://dl.kxtz.dev/shims/Raw/orco.zip", codename: "orco" },
      { url: "https://dl.kxtz.dev/shims/Raw/pyro.zip", codename: "pyro" },
      { url: "https://dl.kxtz.dev/shims/Raw/reks.zip", codename: "reks" },
      { url: "https://dl.kxtz.dev/shims/Raw/sentry.zip", codename: "sentry" },
      { url: "https://dl.kxtz.dev/shims/Raw/stout.zip", codename: "stout" },
      { url: "https://dl.kxtz.dev/shims/Raw/strongbad.zip", codename: "strongbad" },
      { url: "https://dl.kxtz.dev/shims/Raw/tidus.zip", codename: "tidus" },
      { url: "https://dl.kxtz.dev/shims/Raw/ultima.zip", codename: "ultima" },
      { url: "https://dl.kxtz.dev/shims/Raw/volteer.zip", codename: "volteer" },
      { url: "https://dl.kxtz.dev/shims/Raw/zork.zip", codename: "zork" },
    ],
  },
];
