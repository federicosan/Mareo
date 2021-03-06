'use strict';

import * as Pervasives from "../../../node_modules/bs-platform/lib/es6/pervasives.js";

function make(param, param$1) {
  return /* record */[
          /* pos : float array */[
            0,
            0
          ],
          /* v_dim : float array */[
            param[0],
            param[1]
          ],
          /* m_dim : float array */[
            param$1[0],
            param$1[1]
          ]
        ];
}

function calc_viewport_point(cc, vc, mc) {
  var vc_half = vc / 2;
  return Pervasives.min(Pervasives.max(cc - vc_half, 0), Pervasives.min(mc - vc, Math.abs(cc - vc_half)));
}

function in_viewport(v, pos) {
  var match_000 = v[/* pos */0][/* x */0] - 32;
  var match_001 = v[/* pos */0][/* x */0] + v[/* v_dim */1][/* x */0];
  var match_000$1 = v[/* pos */0][/* y */1] - 32;
  var match_001$1 = v[/* pos */0][/* y */1] + v[/* v_dim */1][/* y */1];
  var match_000$2 = pos[/* x */0];
  var match_001$2 = pos[/* y */1];
  var y = match_001$2;
  var x = match_000$2;
  if (x >= match_000 && x <= match_001 && y >= match_000$1) {
    return +(y <= match_001$1);
  } else {
    return /* false */0;
  }
}

function out_of_viewport_below(v, y) {
  var v_max_y = v[/* pos */0][/* y */1] + v[/* v_dim */1][/* y */1];
  return +(y >= v_max_y);
}

function coord_to_viewport(viewport, coord) {
  return /* float array */[
          coord[/* x */0] - viewport[/* pos */0][/* x */0],
          coord[/* y */1] - viewport[/* pos */0][/* y */1]
        ];
}

function update(vpt, ctr) {
  var new_x = calc_viewport_point(ctr[/* x */0], vpt[/* v_dim */1][/* x */0], vpt[/* m_dim */2][/* x */0]);
  var new_y = calc_viewport_point(ctr[/* y */1], vpt[/* v_dim */1][/* y */1], vpt[/* m_dim */2][/* y */1]);
  var pos = /* float array */[
    new_x,
    new_y
  ];
  return /* record */[
          /* pos */pos,
          /* v_dim */vpt[/* v_dim */1],
          /* m_dim */vpt[/* m_dim */2]
        ];
}

export {
  make                  ,
  calc_viewport_point   ,
  in_viewport           ,
  out_of_viewport_below ,
  coord_to_viewport     ,
  update                ,
  
}
/* No side effect */
