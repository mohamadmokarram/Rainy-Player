var RaindropFX = (() => {
  var ur = Object.defineProperty;
  var Hi = Object.getOwnPropertyDescriptor;
  var Wi = (t, e) => () => (
      e || ((e = { exports: {} }), t(e.exports, e)), e.exports
    ),
    $e = (t, e) => {
      for (var r in e) ur(t, r, { get: e[r], enumerable: !0 });
    };
  var q = (t, e, r, i) => {
    for (
      var n = i > 1 ? void 0 : i ? Hi(e, r) : e, s = t.length - 1, a;
      s >= 0;
      s--
    )
      (a = t[s]) && (n = (i ? a(e, r, n) : a(n)) || n);
    return i && n && ur(e, r, n), n;
  };
  var dr = (() => {
    for (var t = new Uint8Array(128), e = 0; e < 64; e++)
      t[e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e * 4 - 205] = e;
    return r => {
      for (
        var i = r.length,
          n = new Uint8Array(
            (((i - (r[i - 1] == "=") - (r[i - 2] == "=")) * 3) / 4) | 0
          ),
          s = 0,
          a = 0;
        s < i;

      ) {
        var o = t[r.charCodeAt(s++)],
          h = t[r.charCodeAt(s++)],
          l = t[r.charCodeAt(s++)],
          f = t[r.charCodeAt(s++)];
        (n[a++] = (o << 2) | (h >> 4)),
          (n[a++] = (h << 4) | (l >> 2)),
          (n[a++] = (l << 6) | f);
      }
      return n;
    };
  })();
  var Di = Wi((ru, _i) => {
    var Bi = class {
      constructor(e) {
        this.animHandle = 0;
        let r = e.canvas,
          i = {
            spawnInterval: [0.1, 0.1],
            spawnSize: [60, 100],
            spawnLimit: 2e3,
            viewport: new fe(m.zero(), m(r.width, r.height)),
            canvas: r,
            width: r.width,
            height: r.height,
            background: "",
            gravity: 2400,
            slipRate: 0,
            motionInterval: [0.1, 0.4],
            colliderSize: 1,
            trailDropDensity: 0.2,
            trailDistance: [20, 30],
            trailDropSize: [0.3, 0.5],
            trailSpread: 0.6,
            initialSpread: 0.5,
            shrinkRate: 0.01,
            velocitySpread: 0.3,
            evaporate: 10,
            xShifting: [0, 0.1],
            backgroundBlurSteps: 3,
            backgroundWrapMode: "clamp",
            mist: !0,
            mistColor: [0.01, 0.01, 0.01, 1],
            mistBlurStep: 4,
            mistTime: 10,
            dropletsPerSeconds: 500,
            dropletSize: [10, 30],
            smoothRaindrop: [0.96, 0.99],
            refractBase: 0.4,
            refractScale: 0.6,
            raindropCompose: "smoother",
            raindropLightPos: [-1, 1, 2, 0],
            raindropDiffuseLight: [0.2, 0.2, 0.2],
            raindropShadowOffset: 0.8,
            raindropEraserSize: [0.93, 1],
            raindropSpecularLight: [0, 0, 0],
            raindropSpecularShininess: 256,
            raindropLightBump: 1,
          };
        (this.options = { ...i, ...e }),
          (this.simulator = new ar(this.options)),
          (this.renderer = new nr(this.options));
      }
      async start() {
        await this.renderer.loadAssets();
        let e = 0,
          r = i => {
            let n = (i - e) / 1e3;
            e = i;
            let s = { dt: 0.03, total: i / 1e3 };
            this.update(s), (this.animHandle = requestAnimationFrame(r));
          };
        this.animHandle = requestAnimationFrame(r);
      }
      stop() {
        cancelAnimationFrame(this.animHandle);
      }
      resize(e, r) {
        (this.options.width = e),
          (this.options.height = r),
          (this.options.viewport = new fe(m.zero(), m(e, r))),
          this.renderer.resize();
      }
      async setBackground(e) {
        (this.renderer.options.background = e),
          await this.renderer.reloadBackground();
      }
      destroy() {
        this.stop(), this.renderer.renderer.destroy();
      }
      update(e) {
        this.simulator.update(e),
          this.renderer.render(this.simulator.raindrops, e);
      }
    };
    _i.exports = Bi;
  });
  var V = 1e-6,
    j = typeof Float32Array != "undefined" ? Float32Array : Array,
    Me = Math.random;
  var yo = Math.PI / 180;
  Math.hypot ||
    (Math.hypot = function () {
      for (var t = 0, e = arguments.length; e--; )
        t += arguments[e] * arguments[e];
      return Math.sqrt(t);
    });
  function pr() {
    var t = new j(9);
    return (
      j != Float32Array &&
        ((t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[5] = 0),
        (t[6] = 0),
        (t[7] = 0)),
      (t[0] = 1),
      (t[4] = 1),
      (t[8] = 1),
      t
    );
  }
  var $ = {};
  $e($, {
    add: () => Dn,
    adjoint: () => Ji,
    clone: () => ji,
    copy: () => Xi,
    create: () => Yi,
    determinant: () => Ki,
    equals: () => Cn,
    exactEquals: () => zn,
    frob: () => Bn,
    fromQuat: () => gn,
    fromQuat2: () => dn,
    fromRotation: () => ln,
    fromRotationTranslation: () => xr,
    fromRotationTranslationScale: () => vn,
    fromRotationTranslationScaleOrigin: () => xn,
    fromScaling: () => hn,
    fromTranslation: () => on,
    fromValues: () => qi,
    fromXRotation: () => cn,
    fromYRotation: () => fn,
    fromZRotation: () => un,
    frustum: () => Mn,
    getRotation: () => mn,
    getScaling: () => gr,
    getTranslation: () => pn,
    identity: () => mr,
    invert: () => Zi,
    lookAt: () => Tn,
    mul: () => In,
    multiply: () => vr,
    multiplyScalar: () => Sn,
    multiplyScalarAndAdd: () => Pn,
    ortho: () => En,
    orthoNO: () => yr,
    orthoZO: () => wn,
    perspective: () => yn,
    perspectiveFromFieldOfView: () => bn,
    perspectiveNO: () => Mr,
    perspectiveZO: () => Rn,
    rotate: () => rn,
    rotateX: () => nn,
    rotateY: () => sn,
    rotateZ: () => an,
    scale: () => tn,
    set: () => $i,
    str: () => _n,
    sub: () => Ln,
    subtract: () => Rr,
    targetTo: () => An,
    translate: () => en,
    transpose: () => Qi,
  });
  function Yi() {
    var t = new j(16);
    return (
      j != Float32Array &&
        ((t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 0),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = 0),
        (t[9] = 0),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0)),
      (t[0] = 1),
      (t[5] = 1),
      (t[10] = 1),
      (t[15] = 1),
      t
    );
  }
  function ji(t) {
    var e = new j(16);
    return (
      (e[0] = t[0]),
      (e[1] = t[1]),
      (e[2] = t[2]),
      (e[3] = t[3]),
      (e[4] = t[4]),
      (e[5] = t[5]),
      (e[6] = t[6]),
      (e[7] = t[7]),
      (e[8] = t[8]),
      (e[9] = t[9]),
      (e[10] = t[10]),
      (e[11] = t[11]),
      (e[12] = t[12]),
      (e[13] = t[13]),
      (e[14] = t[14]),
      (e[15] = t[15]),
      e
    );
  }
  function Xi(t, e) {
    return (
      (t[0] = e[0]),
      (t[1] = e[1]),
      (t[2] = e[2]),
      (t[3] = e[3]),
      (t[4] = e[4]),
      (t[5] = e[5]),
      (t[6] = e[6]),
      (t[7] = e[7]),
      (t[8] = e[8]),
      (t[9] = e[9]),
      (t[10] = e[10]),
      (t[11] = e[11]),
      (t[12] = e[12]),
      (t[13] = e[13]),
      (t[14] = e[14]),
      (t[15] = e[15]),
      t
    );
  }
  function qi(t, e, r, i, n, s, a, o, h, l, f, c, p, u, x, M) {
    var v = new j(16);
    return (
      (v[0] = t),
      (v[1] = e),
      (v[2] = r),
      (v[3] = i),
      (v[4] = n),
      (v[5] = s),
      (v[6] = a),
      (v[7] = o),
      (v[8] = h),
      (v[9] = l),
      (v[10] = f),
      (v[11] = c),
      (v[12] = p),
      (v[13] = u),
      (v[14] = x),
      (v[15] = M),
      v
    );
  }
  function $i(t, e, r, i, n, s, a, o, h, l, f, c, p, u, x, M, v) {
    return (
      (t[0] = e),
      (t[1] = r),
      (t[2] = i),
      (t[3] = n),
      (t[4] = s),
      (t[5] = a),
      (t[6] = o),
      (t[7] = h),
      (t[8] = l),
      (t[9] = f),
      (t[10] = c),
      (t[11] = p),
      (t[12] = u),
      (t[13] = x),
      (t[14] = M),
      (t[15] = v),
      t
    );
  }
  function mr(t) {
    return (
      (t[0] = 1),
      (t[1] = 0),
      (t[2] = 0),
      (t[3] = 0),
      (t[4] = 0),
      (t[5] = 1),
      (t[6] = 0),
      (t[7] = 0),
      (t[8] = 0),
      (t[9] = 0),
      (t[10] = 1),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      t
    );
  }
  function Qi(t, e) {
    if (t === e) {
      var r = e[1],
        i = e[2],
        n = e[3],
        s = e[6],
        a = e[7],
        o = e[11];
      (t[1] = e[4]),
        (t[2] = e[8]),
        (t[3] = e[12]),
        (t[4] = r),
        (t[6] = e[9]),
        (t[7] = e[13]),
        (t[8] = i),
        (t[9] = s),
        (t[11] = e[14]),
        (t[12] = n),
        (t[13] = a),
        (t[14] = o);
    } else
      (t[0] = e[0]),
        (t[1] = e[4]),
        (t[2] = e[8]),
        (t[3] = e[12]),
        (t[4] = e[1]),
        (t[5] = e[5]),
        (t[6] = e[9]),
        (t[7] = e[13]),
        (t[8] = e[2]),
        (t[9] = e[6]),
        (t[10] = e[10]),
        (t[11] = e[14]),
        (t[12] = e[3]),
        (t[13] = e[7]),
        (t[14] = e[11]),
        (t[15] = e[15]);
    return t;
  }
  function Zi(t, e) {
    var r = e[0],
      i = e[1],
      n = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      h = e[6],
      l = e[7],
      f = e[8],
      c = e[9],
      p = e[10],
      u = e[11],
      x = e[12],
      M = e[13],
      v = e[14],
      E = e[15],
      F = r * o - i * a,
      D = r * h - n * a,
      C = r * l - s * a,
      P = i * h - n * o,
      z = i * l - s * o,
      ee = n * l - s * h,
      Z = f * M - c * x,
      J = f * v - p * x,
      K = f * E - u * x,
      te = c * v - p * M,
      X = c * E - u * M,
      ie = p * E - u * v,
      k = F * ie - D * X + C * te + P * K - z * J + ee * Z;
    return k
      ? ((k = 1 / k),
        (t[0] = (o * ie - h * X + l * te) * k),
        (t[1] = (n * X - i * ie - s * te) * k),
        (t[2] = (M * ee - v * z + E * P) * k),
        (t[3] = (p * z - c * ee - u * P) * k),
        (t[4] = (h * K - a * ie - l * J) * k),
        (t[5] = (r * ie - n * K + s * J) * k),
        (t[6] = (v * C - x * ee - E * D) * k),
        (t[7] = (f * ee - p * C + u * D) * k),
        (t[8] = (a * X - o * K + l * Z) * k),
        (t[9] = (i * K - r * X - s * Z) * k),
        (t[10] = (x * z - M * C + E * F) * k),
        (t[11] = (c * C - f * z - u * F) * k),
        (t[12] = (o * J - a * te - h * Z) * k),
        (t[13] = (r * te - i * J + n * Z) * k),
        (t[14] = (M * D - x * P - v * F) * k),
        (t[15] = (f * P - c * D + p * F) * k),
        t)
      : null;
  }
  function Ji(t, e) {
    var r = e[0],
      i = e[1],
      n = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      h = e[6],
      l = e[7],
      f = e[8],
      c = e[9],
      p = e[10],
      u = e[11],
      x = e[12],
      M = e[13],
      v = e[14],
      E = e[15];
    return (
      (t[0] = o * (p * E - u * v) - c * (h * E - l * v) + M * (h * u - l * p)),
      (t[1] = -(
        i * (p * E - u * v) -
        c * (n * E - s * v) +
        M * (n * u - s * p)
      )),
      (t[2] = i * (h * E - l * v) - o * (n * E - s * v) + M * (n * l - s * h)),
      (t[3] = -(
        i * (h * u - l * p) -
        o * (n * u - s * p) +
        c * (n * l - s * h)
      )),
      (t[4] = -(
        a * (p * E - u * v) -
        f * (h * E - l * v) +
        x * (h * u - l * p)
      )),
      (t[5] = r * (p * E - u * v) - f * (n * E - s * v) + x * (n * u - s * p)),
      (t[6] = -(
        r * (h * E - l * v) -
        a * (n * E - s * v) +
        x * (n * l - s * h)
      )),
      (t[7] = r * (h * u - l * p) - a * (n * u - s * p) + f * (n * l - s * h)),
      (t[8] = a * (c * E - u * M) - f * (o * E - l * M) + x * (o * u - l * c)),
      (t[9] = -(
        r * (c * E - u * M) -
        f * (i * E - s * M) +
        x * (i * u - s * c)
      )),
      (t[10] = r * (o * E - l * M) - a * (i * E - s * M) + x * (i * l - s * o)),
      (t[11] = -(
        r * (o * u - l * c) -
        a * (i * u - s * c) +
        f * (i * l - s * o)
      )),
      (t[12] = -(
        a * (c * v - p * M) -
        f * (o * v - h * M) +
        x * (o * p - h * c)
      )),
      (t[13] = r * (c * v - p * M) - f * (i * v - n * M) + x * (i * p - n * c)),
      (t[14] = -(
        r * (o * v - h * M) -
        a * (i * v - n * M) +
        x * (i * h - n * o)
      )),
      (t[15] = r * (o * p - h * c) - a * (i * p - n * c) + f * (i * h - n * o)),
      t
    );
  }
  function Ki(t) {
    var e = t[0],
      r = t[1],
      i = t[2],
      n = t[3],
      s = t[4],
      a = t[5],
      o = t[6],
      h = t[7],
      l = t[8],
      f = t[9],
      c = t[10],
      p = t[11],
      u = t[12],
      x = t[13],
      M = t[14],
      v = t[15],
      E = e * a - r * s,
      F = e * o - i * s,
      D = e * h - n * s,
      C = r * o - i * a,
      P = r * h - n * a,
      z = i * h - n * o,
      ee = l * x - f * u,
      Z = l * M - c * u,
      J = l * v - p * u,
      K = f * M - c * x,
      te = f * v - p * x,
      X = c * v - p * M;
    return E * X - F * te + D * K + C * J - P * Z + z * ee;
  }
  function vr(t, e, r) {
    var i = e[0],
      n = e[1],
      s = e[2],
      a = e[3],
      o = e[4],
      h = e[5],
      l = e[6],
      f = e[7],
      c = e[8],
      p = e[9],
      u = e[10],
      x = e[11],
      M = e[12],
      v = e[13],
      E = e[14],
      F = e[15],
      D = r[0],
      C = r[1],
      P = r[2],
      z = r[3];
    return (
      (t[0] = D * i + C * o + P * c + z * M),
      (t[1] = D * n + C * h + P * p + z * v),
      (t[2] = D * s + C * l + P * u + z * E),
      (t[3] = D * a + C * f + P * x + z * F),
      (D = r[4]),
      (C = r[5]),
      (P = r[6]),
      (z = r[7]),
      (t[4] = D * i + C * o + P * c + z * M),
      (t[5] = D * n + C * h + P * p + z * v),
      (t[6] = D * s + C * l + P * u + z * E),
      (t[7] = D * a + C * f + P * x + z * F),
      (D = r[8]),
      (C = r[9]),
      (P = r[10]),
      (z = r[11]),
      (t[8] = D * i + C * o + P * c + z * M),
      (t[9] = D * n + C * h + P * p + z * v),
      (t[10] = D * s + C * l + P * u + z * E),
      (t[11] = D * a + C * f + P * x + z * F),
      (D = r[12]),
      (C = r[13]),
      (P = r[14]),
      (z = r[15]),
      (t[12] = D * i + C * o + P * c + z * M),
      (t[13] = D * n + C * h + P * p + z * v),
      (t[14] = D * s + C * l + P * u + z * E),
      (t[15] = D * a + C * f + P * x + z * F),
      t
    );
  }
  function en(t, e, r) {
    var i = r[0],
      n = r[1],
      s = r[2],
      a,
      o,
      h,
      l,
      f,
      c,
      p,
      u,
      x,
      M,
      v,
      E;
    return (
      e === t
        ? ((t[12] = e[0] * i + e[4] * n + e[8] * s + e[12]),
          (t[13] = e[1] * i + e[5] * n + e[9] * s + e[13]),
          (t[14] = e[2] * i + e[6] * n + e[10] * s + e[14]),
          (t[15] = e[3] * i + e[7] * n + e[11] * s + e[15]))
        : ((a = e[0]),
          (o = e[1]),
          (h = e[2]),
          (l = e[3]),
          (f = e[4]),
          (c = e[5]),
          (p = e[6]),
          (u = e[7]),
          (x = e[8]),
          (M = e[9]),
          (v = e[10]),
          (E = e[11]),
          (t[0] = a),
          (t[1] = o),
          (t[2] = h),
          (t[3] = l),
          (t[4] = f),
          (t[5] = c),
          (t[6] = p),
          (t[7] = u),
          (t[8] = x),
          (t[9] = M),
          (t[10] = v),
          (t[11] = E),
          (t[12] = a * i + f * n + x * s + e[12]),
          (t[13] = o * i + c * n + M * s + e[13]),
          (t[14] = h * i + p * n + v * s + e[14]),
          (t[15] = l * i + u * n + E * s + e[15])),
      t
    );
  }
  function tn(t, e, r) {
    var i = r[0],
      n = r[1],
      s = r[2];
    return (
      (t[0] = e[0] * i),
      (t[1] = e[1] * i),
      (t[2] = e[2] * i),
      (t[3] = e[3] * i),
      (t[4] = e[4] * n),
      (t[5] = e[5] * n),
      (t[6] = e[6] * n),
      (t[7] = e[7] * n),
      (t[8] = e[8] * s),
      (t[9] = e[9] * s),
      (t[10] = e[10] * s),
      (t[11] = e[11] * s),
      (t[12] = e[12]),
      (t[13] = e[13]),
      (t[14] = e[14]),
      (t[15] = e[15]),
      t
    );
  }
  function rn(t, e, r, i) {
    var n = i[0],
      s = i[1],
      a = i[2],
      o = Math.hypot(n, s, a),
      h,
      l,
      f,
      c,
      p,
      u,
      x,
      M,
      v,
      E,
      F,
      D,
      C,
      P,
      z,
      ee,
      Z,
      J,
      K,
      te,
      X,
      ie,
      k,
      ge;
    return o < V
      ? null
      : ((o = 1 / o),
        (n *= o),
        (s *= o),
        (a *= o),
        (h = Math.sin(r)),
        (l = Math.cos(r)),
        (f = 1 - l),
        (c = e[0]),
        (p = e[1]),
        (u = e[2]),
        (x = e[3]),
        (M = e[4]),
        (v = e[5]),
        (E = e[6]),
        (F = e[7]),
        (D = e[8]),
        (C = e[9]),
        (P = e[10]),
        (z = e[11]),
        (ee = n * n * f + l),
        (Z = s * n * f + a * h),
        (J = a * n * f - s * h),
        (K = n * s * f - a * h),
        (te = s * s * f + l),
        (X = a * s * f + n * h),
        (ie = n * a * f + s * h),
        (k = s * a * f - n * h),
        (ge = a * a * f + l),
        (t[0] = c * ee + M * Z + D * J),
        (t[1] = p * ee + v * Z + C * J),
        (t[2] = u * ee + E * Z + P * J),
        (t[3] = x * ee + F * Z + z * J),
        (t[4] = c * K + M * te + D * X),
        (t[5] = p * K + v * te + C * X),
        (t[6] = u * K + E * te + P * X),
        (t[7] = x * K + F * te + z * X),
        (t[8] = c * ie + M * k + D * ge),
        (t[9] = p * ie + v * k + C * ge),
        (t[10] = u * ie + E * k + P * ge),
        (t[11] = x * ie + F * k + z * ge),
        e !== t &&
          ((t[12] = e[12]), (t[13] = e[13]), (t[14] = e[14]), (t[15] = e[15])),
        t);
  }
  function nn(t, e, r) {
    var i = Math.sin(r),
      n = Math.cos(r),
      s = e[4],
      a = e[5],
      o = e[6],
      h = e[7],
      l = e[8],
      f = e[9],
      c = e[10],
      p = e[11];
    return (
      e !== t &&
        ((t[0] = e[0]),
        (t[1] = e[1]),
        (t[2] = e[2]),
        (t[3] = e[3]),
        (t[12] = e[12]),
        (t[13] = e[13]),
        (t[14] = e[14]),
        (t[15] = e[15])),
      (t[4] = s * n + l * i),
      (t[5] = a * n + f * i),
      (t[6] = o * n + c * i),
      (t[7] = h * n + p * i),
      (t[8] = l * n - s * i),
      (t[9] = f * n - a * i),
      (t[10] = c * n - o * i),
      (t[11] = p * n - h * i),
      t
    );
  }
  function sn(t, e, r) {
    var i = Math.sin(r),
      n = Math.cos(r),
      s = e[0],
      a = e[1],
      o = e[2],
      h = e[3],
      l = e[8],
      f = e[9],
      c = e[10],
      p = e[11];
    return (
      e !== t &&
        ((t[4] = e[4]),
        (t[5] = e[5]),
        (t[6] = e[6]),
        (t[7] = e[7]),
        (t[12] = e[12]),
        (t[13] = e[13]),
        (t[14] = e[14]),
        (t[15] = e[15])),
      (t[0] = s * n - l * i),
      (t[1] = a * n - f * i),
      (t[2] = o * n - c * i),
      (t[3] = h * n - p * i),
      (t[8] = s * i + l * n),
      (t[9] = a * i + f * n),
      (t[10] = o * i + c * n),
      (t[11] = h * i + p * n),
      t
    );
  }
  function an(t, e, r) {
    var i = Math.sin(r),
      n = Math.cos(r),
      s = e[0],
      a = e[1],
      o = e[2],
      h = e[3],
      l = e[4],
      f = e[5],
      c = e[6],
      p = e[7];
    return (
      e !== t &&
        ((t[8] = e[8]),
        (t[9] = e[9]),
        (t[10] = e[10]),
        (t[11] = e[11]),
        (t[12] = e[12]),
        (t[13] = e[13]),
        (t[14] = e[14]),
        (t[15] = e[15])),
      (t[0] = s * n + l * i),
      (t[1] = a * n + f * i),
      (t[2] = o * n + c * i),
      (t[3] = h * n + p * i),
      (t[4] = l * n - s * i),
      (t[5] = f * n - a * i),
      (t[6] = c * n - o * i),
      (t[7] = p * n - h * i),
      t
    );
  }
  function on(t, e) {
    return (
      (t[0] = 1),
      (t[1] = 0),
      (t[2] = 0),
      (t[3] = 0),
      (t[4] = 0),
      (t[5] = 1),
      (t[6] = 0),
      (t[7] = 0),
      (t[8] = 0),
      (t[9] = 0),
      (t[10] = 1),
      (t[11] = 0),
      (t[12] = e[0]),
      (t[13] = e[1]),
      (t[14] = e[2]),
      (t[15] = 1),
      t
    );
  }
  function hn(t, e) {
    return (
      (t[0] = e[0]),
      (t[1] = 0),
      (t[2] = 0),
      (t[3] = 0),
      (t[4] = 0),
      (t[5] = e[1]),
      (t[6] = 0),
      (t[7] = 0),
      (t[8] = 0),
      (t[9] = 0),
      (t[10] = e[2]),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      t
    );
  }
  function ln(t, e, r) {
    var i = r[0],
      n = r[1],
      s = r[2],
      a = Math.hypot(i, n, s),
      o,
      h,
      l;
    return a < V
      ? null
      : ((a = 1 / a),
        (i *= a),
        (n *= a),
        (s *= a),
        (o = Math.sin(e)),
        (h = Math.cos(e)),
        (l = 1 - h),
        (t[0] = i * i * l + h),
        (t[1] = n * i * l + s * o),
        (t[2] = s * i * l - n * o),
        (t[3] = 0),
        (t[4] = i * n * l - s * o),
        (t[5] = n * n * l + h),
        (t[6] = s * n * l + i * o),
        (t[7] = 0),
        (t[8] = i * s * l + n * o),
        (t[9] = n * s * l - i * o),
        (t[10] = s * s * l + h),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        t);
  }
  function cn(t, e) {
    var r = Math.sin(e),
      i = Math.cos(e);
    return (
      (t[0] = 1),
      (t[1] = 0),
      (t[2] = 0),
      (t[3] = 0),
      (t[4] = 0),
      (t[5] = i),
      (t[6] = r),
      (t[7] = 0),
      (t[8] = 0),
      (t[9] = -r),
      (t[10] = i),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      t
    );
  }
  function fn(t, e) {
    var r = Math.sin(e),
      i = Math.cos(e);
    return (
      (t[0] = i),
      (t[1] = 0),
      (t[2] = -r),
      (t[3] = 0),
      (t[4] = 0),
      (t[5] = 1),
      (t[6] = 0),
      (t[7] = 0),
      (t[8] = r),
      (t[9] = 0),
      (t[10] = i),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      t
    );
  }
  function un(t, e) {
    var r = Math.sin(e),
      i = Math.cos(e);
    return (
      (t[0] = i),
      (t[1] = r),
      (t[2] = 0),
      (t[3] = 0),
      (t[4] = -r),
      (t[5] = i),
      (t[6] = 0),
      (t[7] = 0),
      (t[8] = 0),
      (t[9] = 0),
      (t[10] = 1),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      t
    );
  }
  function xr(t, e, r) {
    var i = e[0],
      n = e[1],
      s = e[2],
      a = e[3],
      o = i + i,
      h = n + n,
      l = s + s,
      f = i * o,
      c = i * h,
      p = i * l,
      u = n * h,
      x = n * l,
      M = s * l,
      v = a * o,
      E = a * h,
      F = a * l;
    return (
      (t[0] = 1 - (u + M)),
      (t[1] = c + F),
      (t[2] = p - E),
      (t[3] = 0),
      (t[4] = c - F),
      (t[5] = 1 - (f + M)),
      (t[6] = x + v),
      (t[7] = 0),
      (t[8] = p + E),
      (t[9] = x - v),
      (t[10] = 1 - (f + u)),
      (t[11] = 0),
      (t[12] = r[0]),
      (t[13] = r[1]),
      (t[14] = r[2]),
      (t[15] = 1),
      t
    );
  }
  function dn(t, e) {
    var r = new j(3),
      i = -e[0],
      n = -e[1],
      s = -e[2],
      a = e[3],
      o = e[4],
      h = e[5],
      l = e[6],
      f = e[7],
      c = i * i + n * n + s * s + a * a;
    return (
      c > 0
        ? ((r[0] = ((o * a + f * i + h * s - l * n) * 2) / c),
          (r[1] = ((h * a + f * n + l * i - o * s) * 2) / c),
          (r[2] = ((l * a + f * s + o * n - h * i) * 2) / c))
        : ((r[0] = (o * a + f * i + h * s - l * n) * 2),
          (r[1] = (h * a + f * n + l * i - o * s) * 2),
          (r[2] = (l * a + f * s + o * n - h * i) * 2)),
      xr(t, e, r),
      t
    );
  }
  function pn(t, e) {
    return (t[0] = e[12]), (t[1] = e[13]), (t[2] = e[14]), t;
  }
  function gr(t, e) {
    var r = e[0],
      i = e[1],
      n = e[2],
      s = e[4],
      a = e[5],
      o = e[6],
      h = e[8],
      l = e[9],
      f = e[10];
    return (
      (t[0] = Math.hypot(r, i, n)),
      (t[1] = Math.hypot(s, a, o)),
      (t[2] = Math.hypot(h, l, f)),
      t
    );
  }
  function mn(t, e) {
    var r = new j(3);
    gr(r, e);
    var i = 1 / r[0],
      n = 1 / r[1],
      s = 1 / r[2],
      a = e[0] * i,
      o = e[1] * n,
      h = e[2] * s,
      l = e[4] * i,
      f = e[5] * n,
      c = e[6] * s,
      p = e[8] * i,
      u = e[9] * n,
      x = e[10] * s,
      M = a + f + x,
      v = 0;
    return (
      M > 0
        ? ((v = Math.sqrt(M + 1) * 2),
          (t[3] = 0.25 * v),
          (t[0] = (c - u) / v),
          (t[1] = (p - h) / v),
          (t[2] = (o - l) / v))
        : a > f && a > x
        ? ((v = Math.sqrt(1 + a - f - x) * 2),
          (t[3] = (c - u) / v),
          (t[0] = 0.25 * v),
          (t[1] = (o + l) / v),
          (t[2] = (p + h) / v))
        : f > x
        ? ((v = Math.sqrt(1 + f - a - x) * 2),
          (t[3] = (p - h) / v),
          (t[0] = (o + l) / v),
          (t[1] = 0.25 * v),
          (t[2] = (c + u) / v))
        : ((v = Math.sqrt(1 + x - a - f) * 2),
          (t[3] = (o - l) / v),
          (t[0] = (p + h) / v),
          (t[1] = (c + u) / v),
          (t[2] = 0.25 * v)),
      t
    );
  }
  function vn(t, e, r, i) {
    var n = e[0],
      s = e[1],
      a = e[2],
      o = e[3],
      h = n + n,
      l = s + s,
      f = a + a,
      c = n * h,
      p = n * l,
      u = n * f,
      x = s * l,
      M = s * f,
      v = a * f,
      E = o * h,
      F = o * l,
      D = o * f,
      C = i[0],
      P = i[1],
      z = i[2];
    return (
      (t[0] = (1 - (x + v)) * C),
      (t[1] = (p + D) * C),
      (t[2] = (u - F) * C),
      (t[3] = 0),
      (t[4] = (p - D) * P),
      (t[5] = (1 - (c + v)) * P),
      (t[6] = (M + E) * P),
      (t[7] = 0),
      (t[8] = (u + F) * z),
      (t[9] = (M - E) * z),
      (t[10] = (1 - (c + x)) * z),
      (t[11] = 0),
      (t[12] = r[0]),
      (t[13] = r[1]),
      (t[14] = r[2]),
      (t[15] = 1),
      t
    );
  }
  function xn(t, e, r, i, n) {
    var s = e[0],
      a = e[1],
      o = e[2],
      h = e[3],
      l = s + s,
      f = a + a,
      c = o + o,
      p = s * l,
      u = s * f,
      x = s * c,
      M = a * f,
      v = a * c,
      E = o * c,
      F = h * l,
      D = h * f,
      C = h * c,
      P = i[0],
      z = i[1],
      ee = i[2],
      Z = n[0],
      J = n[1],
      K = n[2],
      te = (1 - (M + E)) * P,
      X = (u + C) * P,
      ie = (x - D) * P,
      k = (u - C) * z,
      ge = (1 - (p + E)) * z,
      Le = (v + F) * z,
      Oe = (x + D) * ee,
      rt = (v - F) * ee,
      it = (1 - (p + M)) * ee;
    return (
      (t[0] = te),
      (t[1] = X),
      (t[2] = ie),
      (t[3] = 0),
      (t[4] = k),
      (t[5] = ge),
      (t[6] = Le),
      (t[7] = 0),
      (t[8] = Oe),
      (t[9] = rt),
      (t[10] = it),
      (t[11] = 0),
      (t[12] = r[0] + Z - (te * Z + k * J + Oe * K)),
      (t[13] = r[1] + J - (X * Z + ge * J + rt * K)),
      (t[14] = r[2] + K - (ie * Z + Le * J + it * K)),
      (t[15] = 1),
      t
    );
  }
  function gn(t, e) {
    var r = e[0],
      i = e[1],
      n = e[2],
      s = e[3],
      a = r + r,
      o = i + i,
      h = n + n,
      l = r * a,
      f = i * a,
      c = i * o,
      p = n * a,
      u = n * o,
      x = n * h,
      M = s * a,
      v = s * o,
      E = s * h;
    return (
      (t[0] = 1 - c - x),
      (t[1] = f + E),
      (t[2] = p - v),
      (t[3] = 0),
      (t[4] = f - E),
      (t[5] = 1 - l - x),
      (t[6] = u + M),
      (t[7] = 0),
      (t[8] = p + v),
      (t[9] = u - M),
      (t[10] = 1 - l - c),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      t
    );
  }
  function Mn(t, e, r, i, n, s, a) {
    var o = 1 / (r - e),
      h = 1 / (n - i),
      l = 1 / (s - a);
    return (
      (t[0] = s * 2 * o),
      (t[1] = 0),
      (t[2] = 0),
      (t[3] = 0),
      (t[4] = 0),
      (t[5] = s * 2 * h),
      (t[6] = 0),
      (t[7] = 0),
      (t[8] = (r + e) * o),
      (t[9] = (n + i) * h),
      (t[10] = (a + s) * l),
      (t[11] = -1),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = a * s * 2 * l),
      (t[15] = 0),
      t
    );
  }
  function Mr(t, e, r, i, n) {
    var s = 1 / Math.tan(e / 2),
      a;
    return (
      (t[0] = s / r),
      (t[1] = 0),
      (t[2] = 0),
      (t[3] = 0),
      (t[4] = 0),
      (t[5] = s),
      (t[6] = 0),
      (t[7] = 0),
      (t[8] = 0),
      (t[9] = 0),
      (t[11] = -1),
      (t[12] = 0),
      (t[13] = 0),
      (t[15] = 0),
      n != null && n !== Infinity
        ? ((a = 1 / (i - n)), (t[10] = (n + i) * a), (t[14] = 2 * n * i * a))
        : ((t[10] = -1), (t[14] = -2 * i)),
      t
    );
  }
  var yn = Mr;
  function Rn(t, e, r, i, n) {
    var s = 1 / Math.tan(e / 2),
      a;
    return (
      (t[0] = s / r),
      (t[1] = 0),
      (t[2] = 0),
      (t[3] = 0),
      (t[4] = 0),
      (t[5] = s),
      (t[6] = 0),
      (t[7] = 0),
      (t[8] = 0),
      (t[9] = 0),
      (t[11] = -1),
      (t[12] = 0),
      (t[13] = 0),
      (t[15] = 0),
      n != null && n !== Infinity
        ? ((a = 1 / (i - n)), (t[10] = n * a), (t[14] = n * i * a))
        : ((t[10] = -1), (t[14] = -i)),
      t
    );
  }
  function bn(t, e, r, i) {
    var n = Math.tan((e.upDegrees * Math.PI) / 180),
      s = Math.tan((e.downDegrees * Math.PI) / 180),
      a = Math.tan((e.leftDegrees * Math.PI) / 180),
      o = Math.tan((e.rightDegrees * Math.PI) / 180),
      h = 2 / (a + o),
      l = 2 / (n + s);
    return (
      (t[0] = h),
      (t[1] = 0),
      (t[2] = 0),
      (t[3] = 0),
      (t[4] = 0),
      (t[5] = l),
      (t[6] = 0),
      (t[7] = 0),
      (t[8] = -((a - o) * h * 0.5)),
      (t[9] = (n - s) * l * 0.5),
      (t[10] = i / (r - i)),
      (t[11] = -1),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = (i * r) / (r - i)),
      (t[15] = 0),
      t
    );
  }
  function yr(t, e, r, i, n, s, a) {
    var o = 1 / (e - r),
      h = 1 / (i - n),
      l = 1 / (s - a);
    return (
      (t[0] = -2 * o),
      (t[1] = 0),
      (t[2] = 0),
      (t[3] = 0),
      (t[4] = 0),
      (t[5] = -2 * h),
      (t[6] = 0),
      (t[7] = 0),
      (t[8] = 0),
      (t[9] = 0),
      (t[10] = 2 * l),
      (t[11] = 0),
      (t[12] = (e + r) * o),
      (t[13] = (n + i) * h),
      (t[14] = (a + s) * l),
      (t[15] = 1),
      t
    );
  }
  var En = yr;
  function wn(t, e, r, i, n, s, a) {
    var o = 1 / (e - r),
      h = 1 / (i - n),
      l = 1 / (s - a);
    return (
      (t[0] = -2 * o),
      (t[1] = 0),
      (t[2] = 0),
      (t[3] = 0),
      (t[4] = 0),
      (t[5] = -2 * h),
      (t[6] = 0),
      (t[7] = 0),
      (t[8] = 0),
      (t[9] = 0),
      (t[10] = l),
      (t[11] = 0),
      (t[12] = (e + r) * o),
      (t[13] = (n + i) * h),
      (t[14] = s * l),
      (t[15] = 1),
      t
    );
  }
  function Tn(t, e, r, i) {
    var n,
      s,
      a,
      o,
      h,
      l,
      f,
      c,
      p,
      u,
      x = e[0],
      M = e[1],
      v = e[2],
      E = i[0],
      F = i[1],
      D = i[2],
      C = r[0],
      P = r[1],
      z = r[2];
    return Math.abs(x - C) < V && Math.abs(M - P) < V && Math.abs(v - z) < V
      ? mr(t)
      : ((f = x - C),
        (c = M - P),
        (p = v - z),
        (u = 1 / Math.hypot(f, c, p)),
        (f *= u),
        (c *= u),
        (p *= u),
        (n = F * p - D * c),
        (s = D * f - E * p),
        (a = E * c - F * f),
        (u = Math.hypot(n, s, a)),
        u
          ? ((u = 1 / u), (n *= u), (s *= u), (a *= u))
          : ((n = 0), (s = 0), (a = 0)),
        (o = c * a - p * s),
        (h = p * n - f * a),
        (l = f * s - c * n),
        (u = Math.hypot(o, h, l)),
        u
          ? ((u = 1 / u), (o *= u), (h *= u), (l *= u))
          : ((o = 0), (h = 0), (l = 0)),
        (t[0] = n),
        (t[1] = o),
        (t[2] = f),
        (t[3] = 0),
        (t[4] = s),
        (t[5] = h),
        (t[6] = c),
        (t[7] = 0),
        (t[8] = a),
        (t[9] = l),
        (t[10] = p),
        (t[11] = 0),
        (t[12] = -(n * x + s * M + a * v)),
        (t[13] = -(o * x + h * M + l * v)),
        (t[14] = -(f * x + c * M + p * v)),
        (t[15] = 1),
        t);
  }
  function An(t, e, r, i) {
    var n = e[0],
      s = e[1],
      a = e[2],
      o = i[0],
      h = i[1],
      l = i[2],
      f = n - r[0],
      c = s - r[1],
      p = a - r[2],
      u = f * f + c * c + p * p;
    u > 0 && ((u = 1 / Math.sqrt(u)), (f *= u), (c *= u), (p *= u));
    var x = h * p - l * c,
      M = l * f - o * p,
      v = o * c - h * f;
    return (
      (u = x * x + M * M + v * v),
      u > 0 && ((u = 1 / Math.sqrt(u)), (x *= u), (M *= u), (v *= u)),
      (t[0] = x),
      (t[1] = M),
      (t[2] = v),
      (t[3] = 0),
      (t[4] = c * v - p * M),
      (t[5] = p * x - f * v),
      (t[6] = f * M - c * x),
      (t[7] = 0),
      (t[8] = f),
      (t[9] = c),
      (t[10] = p),
      (t[11] = 0),
      (t[12] = n),
      (t[13] = s),
      (t[14] = a),
      (t[15] = 1),
      t
    );
  }
  function _n(t) {
    return (
      "mat4(" +
      t[0] +
      ", " +
      t[1] +
      ", " +
      t[2] +
      ", " +
      t[3] +
      ", " +
      t[4] +
      ", " +
      t[5] +
      ", " +
      t[6] +
      ", " +
      t[7] +
      ", " +
      t[8] +
      ", " +
      t[9] +
      ", " +
      t[10] +
      ", " +
      t[11] +
      ", " +
      t[12] +
      ", " +
      t[13] +
      ", " +
      t[14] +
      ", " +
      t[15] +
      ")"
    );
  }
  function Bn(t) {
    return Math.hypot(
      t[0],
      t[1],
      t[2],
      t[3],
      t[4],
      t[5],
      t[6],
      t[7],
      t[8],
      t[9],
      t[10],
      t[11],
      t[12],
      t[13],
      t[14],
      t[15]
    );
  }
  function Dn(t, e, r) {
    return (
      (t[0] = e[0] + r[0]),
      (t[1] = e[1] + r[1]),
      (t[2] = e[2] + r[2]),
      (t[3] = e[3] + r[3]),
      (t[4] = e[4] + r[4]),
      (t[5] = e[5] + r[5]),
      (t[6] = e[6] + r[6]),
      (t[7] = e[7] + r[7]),
      (t[8] = e[8] + r[8]),
      (t[9] = e[9] + r[9]),
      (t[10] = e[10] + r[10]),
      (t[11] = e[11] + r[11]),
      (t[12] = e[12] + r[12]),
      (t[13] = e[13] + r[13]),
      (t[14] = e[14] + r[14]),
      (t[15] = e[15] + r[15]),
      t
    );
  }
  function Rr(t, e, r) {
    return (
      (t[0] = e[0] - r[0]),
      (t[1] = e[1] - r[1]),
      (t[2] = e[2] - r[2]),
      (t[3] = e[3] - r[3]),
      (t[4] = e[4] - r[4]),
      (t[5] = e[5] - r[5]),
      (t[6] = e[6] - r[6]),
      (t[7] = e[7] - r[7]),
      (t[8] = e[8] - r[8]),
      (t[9] = e[9] - r[9]),
      (t[10] = e[10] - r[10]),
      (t[11] = e[11] - r[11]),
      (t[12] = e[12] - r[12]),
      (t[13] = e[13] - r[13]),
      (t[14] = e[14] - r[14]),
      (t[15] = e[15] - r[15]),
      t
    );
  }
  function Sn(t, e, r) {
    return (
      (t[0] = e[0] * r),
      (t[1] = e[1] * r),
      (t[2] = e[2] * r),
      (t[3] = e[3] * r),
      (t[4] = e[4] * r),
      (t[5] = e[5] * r),
      (t[6] = e[6] * r),
      (t[7] = e[7] * r),
      (t[8] = e[8] * r),
      (t[9] = e[9] * r),
      (t[10] = e[10] * r),
      (t[11] = e[11] * r),
      (t[12] = e[12] * r),
      (t[13] = e[13] * r),
      (t[14] = e[14] * r),
      (t[15] = e[15] * r),
      t
    );
  }
  function Pn(t, e, r, i) {
    return (
      (t[0] = e[0] + r[0] * i),
      (t[1] = e[1] + r[1] * i),
      (t[2] = e[2] + r[2] * i),
      (t[3] = e[3] + r[3] * i),
      (t[4] = e[4] + r[4] * i),
      (t[5] = e[5] + r[5] * i),
      (t[6] = e[6] + r[6] * i),
      (t[7] = e[7] + r[7] * i),
      (t[8] = e[8] + r[8] * i),
      (t[9] = e[9] + r[9] * i),
      (t[10] = e[10] + r[10] * i),
      (t[11] = e[11] + r[11] * i),
      (t[12] = e[12] + r[12] * i),
      (t[13] = e[13] + r[13] * i),
      (t[14] = e[14] + r[14] * i),
      (t[15] = e[15] + r[15] * i),
      t
    );
  }
  function zn(t, e) {
    return (
      t[0] === e[0] &&
      t[1] === e[1] &&
      t[2] === e[2] &&
      t[3] === e[3] &&
      t[4] === e[4] &&
      t[5] === e[5] &&
      t[6] === e[6] &&
      t[7] === e[7] &&
      t[8] === e[8] &&
      t[9] === e[9] &&
      t[10] === e[10] &&
      t[11] === e[11] &&
      t[12] === e[12] &&
      t[13] === e[13] &&
      t[14] === e[14] &&
      t[15] === e[15]
    );
  }
  function Cn(t, e) {
    var r = t[0],
      i = t[1],
      n = t[2],
      s = t[3],
      a = t[4],
      o = t[5],
      h = t[6],
      l = t[7],
      f = t[8],
      c = t[9],
      p = t[10],
      u = t[11],
      x = t[12],
      M = t[13],
      v = t[14],
      E = t[15],
      F = e[0],
      D = e[1],
      C = e[2],
      P = e[3],
      z = e[4],
      ee = e[5],
      Z = e[6],
      J = e[7],
      K = e[8],
      te = e[9],
      X = e[10],
      ie = e[11],
      k = e[12],
      ge = e[13],
      Le = e[14],
      Oe = e[15];
    return (
      Math.abs(r - F) <= V * Math.max(1, Math.abs(r), Math.abs(F)) &&
      Math.abs(i - D) <= V * Math.max(1, Math.abs(i), Math.abs(D)) &&
      Math.abs(n - C) <= V * Math.max(1, Math.abs(n), Math.abs(C)) &&
      Math.abs(s - P) <= V * Math.max(1, Math.abs(s), Math.abs(P)) &&
      Math.abs(a - z) <= V * Math.max(1, Math.abs(a), Math.abs(z)) &&
      Math.abs(o - ee) <= V * Math.max(1, Math.abs(o), Math.abs(ee)) &&
      Math.abs(h - Z) <= V * Math.max(1, Math.abs(h), Math.abs(Z)) &&
      Math.abs(l - J) <= V * Math.max(1, Math.abs(l), Math.abs(J)) &&
      Math.abs(f - K) <= V * Math.max(1, Math.abs(f), Math.abs(K)) &&
      Math.abs(c - te) <= V * Math.max(1, Math.abs(c), Math.abs(te)) &&
      Math.abs(p - X) <= V * Math.max(1, Math.abs(p), Math.abs(X)) &&
      Math.abs(u - ie) <= V * Math.max(1, Math.abs(u), Math.abs(ie)) &&
      Math.abs(x - k) <= V * Math.max(1, Math.abs(x), Math.abs(k)) &&
      Math.abs(M - ge) <= V * Math.max(1, Math.abs(M), Math.abs(ge)) &&
      Math.abs(v - Le) <= V * Math.max(1, Math.abs(v), Math.abs(Le)) &&
      Math.abs(E - Oe) <= V * Math.max(1, Math.abs(E), Math.abs(Oe))
    );
  }
  var In = vr,
    Ln = Rr;
  var De = {};
  $e(De, {
    add: () => ra,
    calculateW: () => Ys,
    clone: () => Js,
    conjugate: () => $s,
    copy: () => ea,
    create: () => Gt,
    dot: () => Or,
    equals: () => ha,
    exactEquals: () => oa,
    exp: () => Ur,
    fromEuler: () => Qs,
    fromMat3: () => Vr,
    fromValues: () => Ks,
    getAngle: () => Vs,
    getAxisAngle: () => Gs,
    identity: () => Ns,
    invert: () => qs,
    len: () => sa,
    length: () => kr,
    lerp: () => na,
    ln: () => Nr,
    mul: () => ia,
    multiply: () => Fr,
    normalize: () => Vt,
    pow: () => js,
    random: () => Xs,
    rotateX: () => ks,
    rotateY: () => Hs,
    rotateZ: () => Ws,
    rotationTo: () => la,
    scale: () => Gr,
    set: () => ta,
    setAxes: () => fa,
    setAxisAngle: () => Lr,
    slerp: () => vt,
    sqlerp: () => ca,
    sqrLen: () => aa,
    squaredLength: () => Hr,
    str: () => Zs,
  });
  var ke = {};
  $e(ke, {
    add: () => Nn,
    angle: () => ss,
    bezier: () => Zn,
    ceil: () => Gn,
    clone: () => On,
    copy: () => Fn,
    create: () => ft,
    cross: () => nt,
    dist: () => ds,
    distance: () => Ar,
    div: () => us,
    divide: () => Tr,
    dot: () => dt,
    equals: () => ls,
    exactEquals: () => hs,
    floor: () => Vn,
    forEach: () => vs,
    fromValues: () => ut,
    hermite: () => Qn,
    inverse: () => qn,
    len: () => Bt,
    length: () => br,
    lerp: () => $n,
    max: () => Hn,
    min: () => kn,
    mul: () => fs,
    multiply: () => wr,
    negate: () => Xn,
    normalize: () => _t,
    random: () => Jn,
    rotateX: () => rs,
    rotateY: () => is,
    rotateZ: () => ns,
    round: () => Wn,
    scale: () => Yn,
    scaleAndAdd: () => jn,
    set: () => Un,
    sqrDist: () => ps,
    sqrLen: () => ms,
    squaredDistance: () => _r,
    squaredLength: () => Br,
    str: () => os,
    sub: () => cs,
    subtract: () => Er,
    transformMat3: () => es,
    transformMat4: () => Kn,
    transformQuat: () => ts,
    zero: () => as,
  });
  function ft() {
    var t = new j(3);
    return j != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), t;
  }
  function On(t) {
    var e = new j(3);
    return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), e;
  }
  function br(t) {
    var e = t[0],
      r = t[1],
      i = t[2];
    return Math.hypot(e, r, i);
  }
  function ut(t, e, r) {
    var i = new j(3);
    return (i[0] = t), (i[1] = e), (i[2] = r), i;
  }
  function Fn(t, e) {
    return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
  }
  function Un(t, e, r, i) {
    return (t[0] = e), (t[1] = r), (t[2] = i), t;
  }
  function Nn(t, e, r) {
    return (t[0] = e[0] + r[0]), (t[1] = e[1] + r[1]), (t[2] = e[2] + r[2]), t;
  }
  function Er(t, e, r) {
    return (t[0] = e[0] - r[0]), (t[1] = e[1] - r[1]), (t[2] = e[2] - r[2]), t;
  }
  function wr(t, e, r) {
    return (t[0] = e[0] * r[0]), (t[1] = e[1] * r[1]), (t[2] = e[2] * r[2]), t;
  }
  function Tr(t, e, r) {
    return (t[0] = e[0] / r[0]), (t[1] = e[1] / r[1]), (t[2] = e[2] / r[2]), t;
  }
  function Gn(t, e) {
    return (
      (t[0] = Math.ceil(e[0])),
      (t[1] = Math.ceil(e[1])),
      (t[2] = Math.ceil(e[2])),
      t
    );
  }
  function Vn(t, e) {
    return (
      (t[0] = Math.floor(e[0])),
      (t[1] = Math.floor(e[1])),
      (t[2] = Math.floor(e[2])),
      t
    );
  }
  function kn(t, e, r) {
    return (
      (t[0] = Math.min(e[0], r[0])),
      (t[1] = Math.min(e[1], r[1])),
      (t[2] = Math.min(e[2], r[2])),
      t
    );
  }
  function Hn(t, e, r) {
    return (
      (t[0] = Math.max(e[0], r[0])),
      (t[1] = Math.max(e[1], r[1])),
      (t[2] = Math.max(e[2], r[2])),
      t
    );
  }
  function Wn(t, e) {
    return (
      (t[0] = Math.round(e[0])),
      (t[1] = Math.round(e[1])),
      (t[2] = Math.round(e[2])),
      t
    );
  }
  function Yn(t, e, r) {
    return (t[0] = e[0] * r), (t[1] = e[1] * r), (t[2] = e[2] * r), t;
  }
  function jn(t, e, r, i) {
    return (
      (t[0] = e[0] + r[0] * i),
      (t[1] = e[1] + r[1] * i),
      (t[2] = e[2] + r[2] * i),
      t
    );
  }
  function Ar(t, e) {
    var r = e[0] - t[0],
      i = e[1] - t[1],
      n = e[2] - t[2];
    return Math.hypot(r, i, n);
  }
  function _r(t, e) {
    var r = e[0] - t[0],
      i = e[1] - t[1],
      n = e[2] - t[2];
    return r * r + i * i + n * n;
  }
  function Br(t) {
    var e = t[0],
      r = t[1],
      i = t[2];
    return e * e + r * r + i * i;
  }
  function Xn(t, e) {
    return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), t;
  }
  function qn(t, e) {
    return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), (t[2] = 1 / e[2]), t;
  }
  function _t(t, e) {
    var r = e[0],
      i = e[1],
      n = e[2],
      s = r * r + i * i + n * n;
    return (
      s > 0 && (s = 1 / Math.sqrt(s)),
      (t[0] = e[0] * s),
      (t[1] = e[1] * s),
      (t[2] = e[2] * s),
      t
    );
  }
  function dt(t, e) {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
  }
  function nt(t, e, r) {
    var i = e[0],
      n = e[1],
      s = e[2],
      a = r[0],
      o = r[1],
      h = r[2];
    return (
      (t[0] = n * h - s * o), (t[1] = s * a - i * h), (t[2] = i * o - n * a), t
    );
  }
  function $n(t, e, r, i) {
    var n = e[0],
      s = e[1],
      a = e[2];
    return (
      (t[0] = n + i * (r[0] - n)),
      (t[1] = s + i * (r[1] - s)),
      (t[2] = a + i * (r[2] - a)),
      t
    );
  }
  function Qn(t, e, r, i, n, s) {
    var a = s * s,
      o = a * (2 * s - 3) + 1,
      h = a * (s - 2) + s,
      l = a * (s - 1),
      f = a * (3 - 2 * s);
    return (
      (t[0] = e[0] * o + r[0] * h + i[0] * l + n[0] * f),
      (t[1] = e[1] * o + r[1] * h + i[1] * l + n[1] * f),
      (t[2] = e[2] * o + r[2] * h + i[2] * l + n[2] * f),
      t
    );
  }
  function Zn(t, e, r, i, n, s) {
    var a = 1 - s,
      o = a * a,
      h = s * s,
      l = o * a,
      f = 3 * s * o,
      c = 3 * h * a,
      p = h * s;
    return (
      (t[0] = e[0] * l + r[0] * f + i[0] * c + n[0] * p),
      (t[1] = e[1] * l + r[1] * f + i[1] * c + n[1] * p),
      (t[2] = e[2] * l + r[2] * f + i[2] * c + n[2] * p),
      t
    );
  }
  function Jn(t, e) {
    e = e || 1;
    var r = Me() * 2 * Math.PI,
      i = Me() * 2 - 1,
      n = Math.sqrt(1 - i * i) * e;
    return (
      (t[0] = Math.cos(r) * n), (t[1] = Math.sin(r) * n), (t[2] = i * e), t
    );
  }
  function Kn(t, e, r) {
    var i = e[0],
      n = e[1],
      s = e[2],
      a = r[3] * i + r[7] * n + r[11] * s + r[15];
    return (
      (a = a || 1),
      (t[0] = (r[0] * i + r[4] * n + r[8] * s + r[12]) / a),
      (t[1] = (r[1] * i + r[5] * n + r[9] * s + r[13]) / a),
      (t[2] = (r[2] * i + r[6] * n + r[10] * s + r[14]) / a),
      t
    );
  }
  function es(t, e, r) {
    var i = e[0],
      n = e[1],
      s = e[2];
    return (
      (t[0] = i * r[0] + n * r[3] + s * r[6]),
      (t[1] = i * r[1] + n * r[4] + s * r[7]),
      (t[2] = i * r[2] + n * r[5] + s * r[8]),
      t
    );
  }
  function ts(t, e, r) {
    var i = r[0],
      n = r[1],
      s = r[2],
      a = r[3],
      o = e[0],
      h = e[1],
      l = e[2],
      f = n * l - s * h,
      c = s * o - i * l,
      p = i * h - n * o,
      u = n * p - s * c,
      x = s * f - i * p,
      M = i * c - n * f,
      v = a * 2;
    return (
      (f *= v),
      (c *= v),
      (p *= v),
      (u *= 2),
      (x *= 2),
      (M *= 2),
      (t[0] = o + f + u),
      (t[1] = h + c + x),
      (t[2] = l + p + M),
      t
    );
  }
  function rs(t, e, r, i) {
    var n = [],
      s = [];
    return (
      (n[0] = e[0] - r[0]),
      (n[1] = e[1] - r[1]),
      (n[2] = e[2] - r[2]),
      (s[0] = n[0]),
      (s[1] = n[1] * Math.cos(i) - n[2] * Math.sin(i)),
      (s[2] = n[1] * Math.sin(i) + n[2] * Math.cos(i)),
      (t[0] = s[0] + r[0]),
      (t[1] = s[1] + r[1]),
      (t[2] = s[2] + r[2]),
      t
    );
  }
  function is(t, e, r, i) {
    var n = [],
      s = [];
    return (
      (n[0] = e[0] - r[0]),
      (n[1] = e[1] - r[1]),
      (n[2] = e[2] - r[2]),
      (s[0] = n[2] * Math.sin(i) + n[0] * Math.cos(i)),
      (s[1] = n[1]),
      (s[2] = n[2] * Math.cos(i) - n[0] * Math.sin(i)),
      (t[0] = s[0] + r[0]),
      (t[1] = s[1] + r[1]),
      (t[2] = s[2] + r[2]),
      t
    );
  }
  function ns(t, e, r, i) {
    var n = [],
      s = [];
    return (
      (n[0] = e[0] - r[0]),
      (n[1] = e[1] - r[1]),
      (n[2] = e[2] - r[2]),
      (s[0] = n[0] * Math.cos(i) - n[1] * Math.sin(i)),
      (s[1] = n[0] * Math.sin(i) + n[1] * Math.cos(i)),
      (s[2] = n[2]),
      (t[0] = s[0] + r[0]),
      (t[1] = s[1] + r[1]),
      (t[2] = s[2] + r[2]),
      t
    );
  }
  function ss(t, e) {
    var r = t[0],
      i = t[1],
      n = t[2],
      s = e[0],
      a = e[1],
      o = e[2],
      h = Math.sqrt(r * r + i * i + n * n),
      l = Math.sqrt(s * s + a * a + o * o),
      f = h * l,
      c = f && dt(t, e) / f;
    return Math.acos(Math.min(Math.max(c, -1), 1));
  }
  function as(t) {
    return (t[0] = 0), (t[1] = 0), (t[2] = 0), t;
  }
  function os(t) {
    return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
  }
  function hs(t, e) {
    return t[0] === e[0] && t[1] === e[1] && t[2] === e[2];
  }
  function ls(t, e) {
    var r = t[0],
      i = t[1],
      n = t[2],
      s = e[0],
      a = e[1],
      o = e[2];
    return (
      Math.abs(r - s) <= V * Math.max(1, Math.abs(r), Math.abs(s)) &&
      Math.abs(i - a) <= V * Math.max(1, Math.abs(i), Math.abs(a)) &&
      Math.abs(n - o) <= V * Math.max(1, Math.abs(n), Math.abs(o))
    );
  }
  var cs = Er,
    fs = wr,
    us = Tr,
    ds = Ar,
    ps = _r,
    Bt = br,
    ms = Br,
    vs = (function () {
      var t = ft();
      return function (e, r, i, n, s, a) {
        var o, h;
        for (
          r || (r = 3),
            i || (i = 0),
            n ? (h = Math.min(n * r + i, e.length)) : (h = e.length),
            o = i;
          o < h;
          o += r
        )
          (t[0] = e[o]),
            (t[1] = e[o + 1]),
            (t[2] = e[o + 2]),
            s(t, t, a),
            (e[o] = t[0]),
            (e[o + 1] = t[1]),
            (e[o + 2] = t[2]);
        return e;
      };
    })();
  var Ce = {};
  $e(Ce, {
    add: () => Ct,
    ceil: () => xs,
    clone: () => Dt,
    copy: () => Pt,
    create: () => Dr,
    cross: () => Ts,
    dist: () => Is,
    distance: () => Cr,
    div: () => Cs,
    divide: () => zr,
    dot: () => Ot,
    equals: () => Nt,
    exactEquals: () => Ut,
    floor: () => gs,
    forEach: () => Us,
    fromValues: () => St,
    inverse: () => ws,
    len: () => Os,
    length: () => pt,
    lerp: () => Ft,
    max: () => ys,
    min: () => Ms,
    mul: () => zs,
    multiply: () => Pr,
    negate: () => Es,
    normalize: () => Lt,
    random: () => As,
    round: () => Rs,
    scale: () => It,
    scaleAndAdd: () => bs,
    set: () => zt,
    sqrDist: () => Ls,
    sqrLen: () => Fs,
    squaredDistance: () => Ir,
    squaredLength: () => mt,
    str: () => Ss,
    sub: () => Ps,
    subtract: () => Sr,
    transformMat4: () => _s,
    transformQuat: () => Bs,
    zero: () => Ds,
  });
  function Dr() {
    var t = new j(4);
    return (
      j != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0)), t
    );
  }
  function Dt(t) {
    var e = new j(4);
    return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e;
  }
  function St(t, e, r, i) {
    var n = new j(4);
    return (n[0] = t), (n[1] = e), (n[2] = r), (n[3] = i), n;
  }
  function Pt(t, e) {
    return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
  }
  function zt(t, e, r, i, n) {
    return (t[0] = e), (t[1] = r), (t[2] = i), (t[3] = n), t;
  }
  function Ct(t, e, r) {
    return (
      (t[0] = e[0] + r[0]),
      (t[1] = e[1] + r[1]),
      (t[2] = e[2] + r[2]),
      (t[3] = e[3] + r[3]),
      t
    );
  }
  function Sr(t, e, r) {
    return (
      (t[0] = e[0] - r[0]),
      (t[1] = e[1] - r[1]),
      (t[2] = e[2] - r[2]),
      (t[3] = e[3] - r[3]),
      t
    );
  }
  function Pr(t, e, r) {
    return (
      (t[0] = e[0] * r[0]),
      (t[1] = e[1] * r[1]),
      (t[2] = e[2] * r[2]),
      (t[3] = e[3] * r[3]),
      t
    );
  }
  function zr(t, e, r) {
    return (
      (t[0] = e[0] / r[0]),
      (t[1] = e[1] / r[1]),
      (t[2] = e[2] / r[2]),
      (t[3] = e[3] / r[3]),
      t
    );
  }
  function xs(t, e) {
    return (
      (t[0] = Math.ceil(e[0])),
      (t[1] = Math.ceil(e[1])),
      (t[2] = Math.ceil(e[2])),
      (t[3] = Math.ceil(e[3])),
      t
    );
  }
  function gs(t, e) {
    return (
      (t[0] = Math.floor(e[0])),
      (t[1] = Math.floor(e[1])),
      (t[2] = Math.floor(e[2])),
      (t[3] = Math.floor(e[3])),
      t
    );
  }
  function Ms(t, e, r) {
    return (
      (t[0] = Math.min(e[0], r[0])),
      (t[1] = Math.min(e[1], r[1])),
      (t[2] = Math.min(e[2], r[2])),
      (t[3] = Math.min(e[3], r[3])),
      t
    );
  }
  function ys(t, e, r) {
    return (
      (t[0] = Math.max(e[0], r[0])),
      (t[1] = Math.max(e[1], r[1])),
      (t[2] = Math.max(e[2], r[2])),
      (t[3] = Math.max(e[3], r[3])),
      t
    );
  }
  function Rs(t, e) {
    return (
      (t[0] = Math.round(e[0])),
      (t[1] = Math.round(e[1])),
      (t[2] = Math.round(e[2])),
      (t[3] = Math.round(e[3])),
      t
    );
  }
  function It(t, e, r) {
    return (
      (t[0] = e[0] * r),
      (t[1] = e[1] * r),
      (t[2] = e[2] * r),
      (t[3] = e[3] * r),
      t
    );
  }
  function bs(t, e, r, i) {
    return (
      (t[0] = e[0] + r[0] * i),
      (t[1] = e[1] + r[1] * i),
      (t[2] = e[2] + r[2] * i),
      (t[3] = e[3] + r[3] * i),
      t
    );
  }
  function Cr(t, e) {
    var r = e[0] - t[0],
      i = e[1] - t[1],
      n = e[2] - t[2],
      s = e[3] - t[3];
    return Math.hypot(r, i, n, s);
  }
  function Ir(t, e) {
    var r = e[0] - t[0],
      i = e[1] - t[1],
      n = e[2] - t[2],
      s = e[3] - t[3];
    return r * r + i * i + n * n + s * s;
  }
  function pt(t) {
    var e = t[0],
      r = t[1],
      i = t[2],
      n = t[3];
    return Math.hypot(e, r, i, n);
  }
  function mt(t) {
    var e = t[0],
      r = t[1],
      i = t[2],
      n = t[3];
    return e * e + r * r + i * i + n * n;
  }
  function Es(t, e) {
    return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), (t[3] = -e[3]), t;
  }
  function ws(t, e) {
    return (
      (t[0] = 1 / e[0]),
      (t[1] = 1 / e[1]),
      (t[2] = 1 / e[2]),
      (t[3] = 1 / e[3]),
      t
    );
  }
  function Lt(t, e) {
    var r = e[0],
      i = e[1],
      n = e[2],
      s = e[3],
      a = r * r + i * i + n * n + s * s;
    return (
      a > 0 && (a = 1 / Math.sqrt(a)),
      (t[0] = r * a),
      (t[1] = i * a),
      (t[2] = n * a),
      (t[3] = s * a),
      t
    );
  }
  function Ot(t, e) {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
  }
  function Ts(t, e, r, i) {
    var n = r[0] * i[1] - r[1] * i[0],
      s = r[0] * i[2] - r[2] * i[0],
      a = r[0] * i[3] - r[3] * i[0],
      o = r[1] * i[2] - r[2] * i[1],
      h = r[1] * i[3] - r[3] * i[1],
      l = r[2] * i[3] - r[3] * i[2],
      f = e[0],
      c = e[1],
      p = e[2],
      u = e[3];
    return (
      (t[0] = c * l - p * h + u * o),
      (t[1] = -(f * l) + p * a - u * s),
      (t[2] = f * h - c * a + u * n),
      (t[3] = -(f * o) + c * s - p * n),
      t
    );
  }
  function Ft(t, e, r, i) {
    var n = e[0],
      s = e[1],
      a = e[2],
      o = e[3];
    return (
      (t[0] = n + i * (r[0] - n)),
      (t[1] = s + i * (r[1] - s)),
      (t[2] = a + i * (r[2] - a)),
      (t[3] = o + i * (r[3] - o)),
      t
    );
  }
  function As(t, e) {
    e = e || 1;
    var r, i, n, s, a, o;
    do (r = Me() * 2 - 1), (i = Me() * 2 - 1), (a = r * r + i * i);
    while (a >= 1);
    do (n = Me() * 2 - 1), (s = Me() * 2 - 1), (o = n * n + s * s);
    while (o >= 1);
    var h = Math.sqrt((1 - a) / o);
    return (
      (t[0] = e * r), (t[1] = e * i), (t[2] = e * n * h), (t[3] = e * s * h), t
    );
  }
  function _s(t, e, r) {
    var i = e[0],
      n = e[1],
      s = e[2],
      a = e[3];
    return (
      (t[0] = r[0] * i + r[4] * n + r[8] * s + r[12] * a),
      (t[1] = r[1] * i + r[5] * n + r[9] * s + r[13] * a),
      (t[2] = r[2] * i + r[6] * n + r[10] * s + r[14] * a),
      (t[3] = r[3] * i + r[7] * n + r[11] * s + r[15] * a),
      t
    );
  }
  function Bs(t, e, r) {
    var i = e[0],
      n = e[1],
      s = e[2],
      a = r[0],
      o = r[1],
      h = r[2],
      l = r[3],
      f = l * i + o * s - h * n,
      c = l * n + h * i - a * s,
      p = l * s + a * n - o * i,
      u = -a * i - o * n - h * s;
    return (
      (t[0] = f * l + u * -a + c * -h - p * -o),
      (t[1] = c * l + u * -o + p * -a - f * -h),
      (t[2] = p * l + u * -h + f * -o - c * -a),
      (t[3] = e[3]),
      t
    );
  }
  function Ds(t) {
    return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0), t;
  }
  function Ss(t) {
    return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
  }
  function Ut(t, e) {
    return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3];
  }
  function Nt(t, e) {
    var r = t[0],
      i = t[1],
      n = t[2],
      s = t[3],
      a = e[0],
      o = e[1],
      h = e[2],
      l = e[3];
    return (
      Math.abs(r - a) <= V * Math.max(1, Math.abs(r), Math.abs(a)) &&
      Math.abs(i - o) <= V * Math.max(1, Math.abs(i), Math.abs(o)) &&
      Math.abs(n - h) <= V * Math.max(1, Math.abs(n), Math.abs(h)) &&
      Math.abs(s - l) <= V * Math.max(1, Math.abs(s), Math.abs(l))
    );
  }
  var Ps = Sr,
    zs = Pr,
    Cs = zr,
    Is = Cr,
    Ls = Ir,
    Os = pt,
    Fs = mt,
    Us = (function () {
      var t = Dr();
      return function (e, r, i, n, s, a) {
        var o, h;
        for (
          r || (r = 4),
            i || (i = 0),
            n ? (h = Math.min(n * r + i, e.length)) : (h = e.length),
            o = i;
          o < h;
          o += r
        )
          (t[0] = e[o]),
            (t[1] = e[o + 1]),
            (t[2] = e[o + 2]),
            (t[3] = e[o + 3]),
            s(t, t, a),
            (e[o] = t[0]),
            (e[o + 1] = t[1]),
            (e[o + 2] = t[2]),
            (e[o + 3] = t[3]);
        return e;
      };
    })();
  function Gt() {
    var t = new j(4);
    return (
      j != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), (t[3] = 1), t
    );
  }
  function Ns(t) {
    return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t;
  }
  function Lr(t, e, r) {
    r = r * 0.5;
    var i = Math.sin(r);
    return (
      (t[0] = i * e[0]),
      (t[1] = i * e[1]),
      (t[2] = i * e[2]),
      (t[3] = Math.cos(r)),
      t
    );
  }
  function Gs(t, e) {
    var r = Math.acos(e[3]) * 2,
      i = Math.sin(r / 2);
    return (
      i > V
        ? ((t[0] = e[0] / i), (t[1] = e[1] / i), (t[2] = e[2] / i))
        : ((t[0] = 1), (t[1] = 0), (t[2] = 0)),
      r
    );
  }
  function Vs(t, e) {
    var r = Or(t, e);
    return Math.acos(2 * r * r - 1);
  }
  function Fr(t, e, r) {
    var i = e[0],
      n = e[1],
      s = e[2],
      a = e[3],
      o = r[0],
      h = r[1],
      l = r[2],
      f = r[3];
    return (
      (t[0] = i * f + a * o + n * l - s * h),
      (t[1] = n * f + a * h + s * o - i * l),
      (t[2] = s * f + a * l + i * h - n * o),
      (t[3] = a * f - i * o - n * h - s * l),
      t
    );
  }
  function ks(t, e, r) {
    r *= 0.5;
    var i = e[0],
      n = e[1],
      s = e[2],
      a = e[3],
      o = Math.sin(r),
      h = Math.cos(r);
    return (
      (t[0] = i * h + a * o),
      (t[1] = n * h + s * o),
      (t[2] = s * h - n * o),
      (t[3] = a * h - i * o),
      t
    );
  }
  function Hs(t, e, r) {
    r *= 0.5;
    var i = e[0],
      n = e[1],
      s = e[2],
      a = e[3],
      o = Math.sin(r),
      h = Math.cos(r);
    return (
      (t[0] = i * h - s * o),
      (t[1] = n * h + a * o),
      (t[2] = s * h + i * o),
      (t[3] = a * h - n * o),
      t
    );
  }
  function Ws(t, e, r) {
    r *= 0.5;
    var i = e[0],
      n = e[1],
      s = e[2],
      a = e[3],
      o = Math.sin(r),
      h = Math.cos(r);
    return (
      (t[0] = i * h + n * o),
      (t[1] = n * h - i * o),
      (t[2] = s * h + a * o),
      (t[3] = a * h - s * o),
      t
    );
  }
  function Ys(t, e) {
    var r = e[0],
      i = e[1],
      n = e[2];
    return (
      (t[0] = r),
      (t[1] = i),
      (t[2] = n),
      (t[3] = Math.sqrt(Math.abs(1 - r * r - i * i - n * n))),
      t
    );
  }
  function Ur(t, e) {
    var r = e[0],
      i = e[1],
      n = e[2],
      s = e[3],
      a = Math.sqrt(r * r + i * i + n * n),
      o = Math.exp(s),
      h = a > 0 ? (o * Math.sin(a)) / a : 0;
    return (
      (t[0] = r * h),
      (t[1] = i * h),
      (t[2] = n * h),
      (t[3] = o * Math.cos(a)),
      t
    );
  }
  function Nr(t, e) {
    var r = e[0],
      i = e[1],
      n = e[2],
      s = e[3],
      a = Math.sqrt(r * r + i * i + n * n),
      o = a > 0 ? Math.atan2(a, s) / a : 0;
    return (
      (t[0] = r * o),
      (t[1] = i * o),
      (t[2] = n * o),
      (t[3] = 0.5 * Math.log(r * r + i * i + n * n + s * s)),
      t
    );
  }
  function js(t, e, r) {
    return Nr(t, e), Gr(t, t, r), Ur(t, t), t;
  }
  function vt(t, e, r, i) {
    var n = e[0],
      s = e[1],
      a = e[2],
      o = e[3],
      h = r[0],
      l = r[1],
      f = r[2],
      c = r[3],
      p,
      u,
      x,
      M,
      v;
    return (
      (u = n * h + s * l + a * f + o * c),
      u < 0 && ((u = -u), (h = -h), (l = -l), (f = -f), (c = -c)),
      1 - u > V
        ? ((p = Math.acos(u)),
          (x = Math.sin(p)),
          (M = Math.sin((1 - i) * p) / x),
          (v = Math.sin(i * p) / x))
        : ((M = 1 - i), (v = i)),
      (t[0] = M * n + v * h),
      (t[1] = M * s + v * l),
      (t[2] = M * a + v * f),
      (t[3] = M * o + v * c),
      t
    );
  }
  function Xs(t) {
    var e = Me(),
      r = Me(),
      i = Me(),
      n = Math.sqrt(1 - e),
      s = Math.sqrt(e);
    return (
      (t[0] = n * Math.sin(2 * Math.PI * r)),
      (t[1] = n * Math.cos(2 * Math.PI * r)),
      (t[2] = s * Math.sin(2 * Math.PI * i)),
      (t[3] = s * Math.cos(2 * Math.PI * i)),
      t
    );
  }
  function qs(t, e) {
    var r = e[0],
      i = e[1],
      n = e[2],
      s = e[3],
      a = r * r + i * i + n * n + s * s,
      o = a ? 1 / a : 0;
    return (t[0] = -r * o), (t[1] = -i * o), (t[2] = -n * o), (t[3] = s * o), t;
  }
  function $s(t, e) {
    return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), (t[3] = e[3]), t;
  }
  function Vr(t, e) {
    var r = e[0] + e[4] + e[8],
      i;
    if (r > 0)
      (i = Math.sqrt(r + 1)),
        (t[3] = 0.5 * i),
        (i = 0.5 / i),
        (t[0] = (e[5] - e[7]) * i),
        (t[1] = (e[6] - e[2]) * i),
        (t[2] = (e[1] - e[3]) * i);
    else {
      var n = 0;
      e[4] > e[0] && (n = 1), e[8] > e[n * 3 + n] && (n = 2);
      var s = (n + 1) % 3,
        a = (n + 2) % 3;
      (i = Math.sqrt(e[n * 3 + n] - e[s * 3 + s] - e[a * 3 + a] + 1)),
        (t[n] = 0.5 * i),
        (i = 0.5 / i),
        (t[3] = (e[s * 3 + a] - e[a * 3 + s]) * i),
        (t[s] = (e[s * 3 + n] + e[n * 3 + s]) * i),
        (t[a] = (e[a * 3 + n] + e[n * 3 + a]) * i);
    }
    return t;
  }
  function Qs(t, e, r, i) {
    var n = (0.5 * Math.PI) / 180;
    (e *= n), (r *= n), (i *= n);
    var s = Math.sin(e),
      a = Math.cos(e),
      o = Math.sin(r),
      h = Math.cos(r),
      l = Math.sin(i),
      f = Math.cos(i);
    return (
      (t[0] = s * h * f - a * o * l),
      (t[1] = a * o * f + s * h * l),
      (t[2] = a * h * l - s * o * f),
      (t[3] = a * h * f + s * o * l),
      t
    );
  }
  function Zs(t) {
    return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
  }
  var Js = Dt,
    Ks = St,
    ea = Pt,
    ta = zt,
    ra = Ct,
    ia = Fr,
    Gr = It,
    Or = Ot,
    na = Ft,
    kr = pt,
    sa = kr,
    Hr = mt,
    aa = Hr,
    Vt = Lt,
    oa = Ut,
    ha = Nt,
    la = (function () {
      var t = ft(),
        e = ut(1, 0, 0),
        r = ut(0, 1, 0);
      return function (i, n, s) {
        var a = dt(n, s);
        return a < -0.999999
          ? (nt(t, e, n),
            Bt(t) < 1e-6 && nt(t, r, n),
            _t(t, t),
            Lr(i, t, Math.PI),
            i)
          : a > 0.999999
          ? ((i[0] = 0), (i[1] = 0), (i[2] = 0), (i[3] = 1), i)
          : (nt(t, n, s),
            (i[0] = t[0]),
            (i[1] = t[1]),
            (i[2] = t[2]),
            (i[3] = 1 + a),
            Vt(i, i));
      };
    })(),
    ca = (function () {
      var t = Gt(),
        e = Gt();
      return function (r, i, n, s, a, o) {
        return vt(t, i, a, o), vt(e, n, s, o), vt(r, t, e, 2 * o * (1 - o)), r;
      };
    })(),
    fa = (function () {
      var t = pr();
      return function (e, r, i, n) {
        return (
          (t[0] = i[0]),
          (t[3] = i[1]),
          (t[6] = i[2]),
          (t[1] = n[0]),
          (t[4] = n[1]),
          (t[7] = n[2]),
          (t[2] = -r[0]),
          (t[5] = -r[1]),
          (t[8] = -r[2]),
          Vt(e, Vr(e, t))
        );
      };
    })();
  var kt = {};
  $e(kt, {
    add: () => va,
    angle: () => Oa,
    ceil: () => xa,
    clone: () => ua,
    copy: () => pa,
    create: () => Wr,
    cross: () => Ba,
    dist: () => Ya,
    distance: () => qr,
    div: () => Wa,
    divide: () => Xr,
    dot: () => _a,
    equals: () => Ga,
    exactEquals: () => Na,
    floor: () => ga,
    forEach: () => qa,
    fromValues: () => da,
    inverse: () => Ta,
    len: () => Va,
    length: () => Qr,
    lerp: () => Da,
    max: () => ya,
    min: () => Ma,
    mul: () => Ha,
    multiply: () => jr,
    negate: () => wa,
    normalize: () => Aa,
    random: () => Sa,
    rotate: () => La,
    round: () => Ra,
    scale: () => ba,
    scaleAndAdd: () => Ea,
    set: () => ma,
    sqrDist: () => ja,
    sqrLen: () => Xa,
    squaredDistance: () => $r,
    squaredLength: () => Zr,
    str: () => Ua,
    sub: () => ka,
    subtract: () => Yr,
    transformMat2: () => Pa,
    transformMat2d: () => za,
    transformMat3: () => Ca,
    transformMat4: () => Ia,
    zero: () => Fa,
  });
  function Wr() {
    var t = new j(2);
    return j != Float32Array && ((t[0] = 0), (t[1] = 0)), t;
  }
  function ua(t) {
    var e = new j(2);
    return (e[0] = t[0]), (e[1] = t[1]), e;
  }
  function da(t, e) {
    var r = new j(2);
    return (r[0] = t), (r[1] = e), r;
  }
  function pa(t, e) {
    return (t[0] = e[0]), (t[1] = e[1]), t;
  }
  function ma(t, e, r) {
    return (t[0] = e), (t[1] = r), t;
  }
  function va(t, e, r) {
    return (t[0] = e[0] + r[0]), (t[1] = e[1] + r[1]), t;
  }
  function Yr(t, e, r) {
    return (t[0] = e[0] - r[0]), (t[1] = e[1] - r[1]), t;
  }
  function jr(t, e, r) {
    return (t[0] = e[0] * r[0]), (t[1] = e[1] * r[1]), t;
  }
  function Xr(t, e, r) {
    return (t[0] = e[0] / r[0]), (t[1] = e[1] / r[1]), t;
  }
  function xa(t, e) {
    return (t[0] = Math.ceil(e[0])), (t[1] = Math.ceil(e[1])), t;
  }
  function ga(t, e) {
    return (t[0] = Math.floor(e[0])), (t[1] = Math.floor(e[1])), t;
  }
  function Ma(t, e, r) {
    return (t[0] = Math.min(e[0], r[0])), (t[1] = Math.min(e[1], r[1])), t;
  }
  function ya(t, e, r) {
    return (t[0] = Math.max(e[0], r[0])), (t[1] = Math.max(e[1], r[1])), t;
  }
  function Ra(t, e) {
    return (t[0] = Math.round(e[0])), (t[1] = Math.round(e[1])), t;
  }
  function ba(t, e, r) {
    return (t[0] = e[0] * r), (t[1] = e[1] * r), t;
  }
  function Ea(t, e, r, i) {
    return (t[0] = e[0] + r[0] * i), (t[1] = e[1] + r[1] * i), t;
  }
  function qr(t, e) {
    var r = e[0] - t[0],
      i = e[1] - t[1];
    return Math.hypot(r, i);
  }
  function $r(t, e) {
    var r = e[0] - t[0],
      i = e[1] - t[1];
    return r * r + i * i;
  }
  function Qr(t) {
    var e = t[0],
      r = t[1];
    return Math.hypot(e, r);
  }
  function Zr(t) {
    var e = t[0],
      r = t[1];
    return e * e + r * r;
  }
  function wa(t, e) {
    return (t[0] = -e[0]), (t[1] = -e[1]), t;
  }
  function Ta(t, e) {
    return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), t;
  }
  function Aa(t, e) {
    var r = e[0],
      i = e[1],
      n = r * r + i * i;
    return (
      n > 0 && (n = 1 / Math.sqrt(n)), (t[0] = e[0] * n), (t[1] = e[1] * n), t
    );
  }
  function _a(t, e) {
    return t[0] * e[0] + t[1] * e[1];
  }
  function Ba(t, e, r) {
    var i = e[0] * r[1] - e[1] * r[0];
    return (t[0] = t[1] = 0), (t[2] = i), t;
  }
  function Da(t, e, r, i) {
    var n = e[0],
      s = e[1];
    return (t[0] = n + i * (r[0] - n)), (t[1] = s + i * (r[1] - s)), t;
  }
  function Sa(t, e) {
    e = e || 1;
    var r = Me() * 2 * Math.PI;
    return (t[0] = Math.cos(r) * e), (t[1] = Math.sin(r) * e), t;
  }
  function Pa(t, e, r) {
    var i = e[0],
      n = e[1];
    return (t[0] = r[0] * i + r[2] * n), (t[1] = r[1] * i + r[3] * n), t;
  }
  function za(t, e, r) {
    var i = e[0],
      n = e[1];
    return (
      (t[0] = r[0] * i + r[2] * n + r[4]),
      (t[1] = r[1] * i + r[3] * n + r[5]),
      t
    );
  }
  function Ca(t, e, r) {
    var i = e[0],
      n = e[1];
    return (
      (t[0] = r[0] * i + r[3] * n + r[6]),
      (t[1] = r[1] * i + r[4] * n + r[7]),
      t
    );
  }
  function Ia(t, e, r) {
    var i = e[0],
      n = e[1];
    return (
      (t[0] = r[0] * i + r[4] * n + r[12]),
      (t[1] = r[1] * i + r[5] * n + r[13]),
      t
    );
  }
  function La(t, e, r, i) {
    var n = e[0] - r[0],
      s = e[1] - r[1],
      a = Math.sin(i),
      o = Math.cos(i);
    return (t[0] = n * o - s * a + r[0]), (t[1] = n * a + s * o + r[1]), t;
  }
  function Oa(t, e) {
    var r = t[0],
      i = t[1],
      n = e[0],
      s = e[1],
      a = Math.sqrt(r * r + i * i) * Math.sqrt(n * n + s * s),
      o = a && (r * n + i * s) / a;
    return Math.acos(Math.min(Math.max(o, -1), 1));
  }
  function Fa(t) {
    return (t[0] = 0), (t[1] = 0), t;
  }
  function Ua(t) {
    return "vec2(" + t[0] + ", " + t[1] + ")";
  }
  function Na(t, e) {
    return t[0] === e[0] && t[1] === e[1];
  }
  function Ga(t, e) {
    var r = t[0],
      i = t[1],
      n = e[0],
      s = e[1];
    return (
      Math.abs(r - n) <= V * Math.max(1, Math.abs(r), Math.abs(n)) &&
      Math.abs(i - s) <= V * Math.max(1, Math.abs(i), Math.abs(s))
    );
  }
  var Va = Qr,
    ka = Yr,
    Ha = jr,
    Wa = Xr,
    Ya = qr,
    ja = $r,
    Xa = Zr,
    qa = (function () {
      var t = Wr();
      return function (e, r, i, n, s, a) {
        var o, h;
        for (
          r || (r = 2),
            i || (i = 0),
            n ? (h = Math.min(n * r + i, e.length)) : (h = e.length),
            o = i;
          o < h;
          o += r
        )
          (t[0] = e[o]),
            (t[1] = e[o + 1]),
            s(t, t, a),
            (e[o] = t[0]),
            (e[o + 1] = t[1]);
        return e;
      };
    })();
  function T(t, e, r) {
    return (...i) => {
      if (i.length <= e) {
        let n = r();
        return t(n, ...i);
      } else {
        let [n, ...s] = i;
        return n === void 0 && (n = r()), t(n, ...s);
      }
    };
  }
  var $a = 0.01,
    zo = -Math.log($a);
  var Qa = Array,
    ye = class extends Qa {
      get x() {
        return this[0];
      }
      set x(e) {
        this[0] = e;
      }
      get y() {
        return this[1];
      }
      set y(e) {
        this[1] = e;
      }
      get z() {
        return this[2];
      }
      set z(e) {
        this[2] = e;
      }
      get magnitude() {
        return Math.hypot(...this);
      }
      get magnitudeSqr() {
        return this[0] * this[0] + this[1] * this[1] + this[2] * this[2];
      }
      get normalized() {
        let e = this.magnitude;
        return e == 0 ? g.zero() : this.clone().div(g(e, e, e));
      }
      get negative() {
        return this.clone().negate();
      }
      get inversed() {
        return this.clone().inverse();
      }
      constructor(e, r, i) {
        super(e, r, i);
      }
      static zero() {
        return new ye(0, 0, 0);
      }
      static one() {
        return new ye(1, 1, 1);
      }
      asMut() {
        return this;
      }
      plus(e) {
        return g.plus(this, this, e);
      }
      minus(e) {
        return g.minus(this, this, e);
      }
      mul(e) {
        return g.mul(this, this, e);
      }
      div(e) {
        return g.div(this, this, e);
      }
      dot(e) {
        return this[0] * e[0] + this[1] * e[1] + this[2] * e[2];
      }
      normalize() {
        return g.normalize(this, this);
      }
      inverse() {
        return (
          (this[0] = 1 / this[0]),
          (this[1] = 1 / this[1]),
          (this[2] = 1 / this[2]),
          this
        );
      }
      negate() {
        return (
          (this[0] = -this[0]), (this[1] = -this[1]), (this[2] = -this[2]), this
        );
      }
      cross(e) {
        return g(
          this.y * e.z - this.z * e.y,
          this.z * e.x - this.x * e.z,
          this.x * e.y - this.y * e.x
        );
      }
      set(e) {
        return (
          (this[0] = e[0] || 0),
          (this[1] = e[1] || 0),
          (this[2] = e[2] || 0),
          this
        );
      }
      fill(e) {
        return (this[0] = this[1] = this[2] = e), this;
      }
      clone(e = g.zero()) {
        return e.set(this);
      }
      setX(e) {
        return (this[0] = e), this;
      }
      setY(e) {
        return (this[1] = e), this;
      }
      setZ(e) {
        return (this[2] = e), this;
      }
      toVec2() {
        return m(this[0], this[1]);
      }
      toVec4(e = 0) {
        return A(this[0], this[1], this[2], e);
      }
      equals(e) {
        return e === void 0
          ? !1
          : e[0] === this[0] && e[1] === this[1] && e[2] === this[2];
      }
      static math(e) {
        return (...r) =>
          g(
            e(...r.map(i => i.x)),
            e(...r.map(i => i.y)),
            e(...r.map(i => i.z))
          );
      }
      static mathNonAlloc(e, r, ...i) {
        return (
          (r[0] = e(...i.map(n => n[0]))),
          (r[1] = e(...i.map(n => n[1]))),
          (r[2] = e(...i.map(n => n[2]))),
          r
        );
      }
      __to(e) {
        switch (e) {
          case oe:
            return A(this[0], this[1], this[2], 0);
          case Q:
            return m(this[0], this[1]);
        }
        return this.clone();
      }
    };
  function g(t, e = t, r = t) {
    return new ye(t, e, r);
  }
  g.from = t => {
    let [e = 0, r = 0, i = 0] = t;
    return g(e, r, i);
  };
  g.zero = ye.zero;
  g.one = ye.one;
  g.math = ye.math;
  g.normalize = T(ke.normalize, 1, g.zero);
  g.inverse = T(ke.inverse, 1, g.zero);
  g.negate = T(ke.negate, 1, g.zero);
  g.plus = T(
    (t, e, r) => (
      typeof r == "number"
        ? ((t[0] = e[0] + r), (t[1] = e[1] + r), (t[2] = e[2] + r))
        : ((t[0] = e[0] + r[0]),
          (t[1] = e[1] + (r[1] || 0)),
          (t[2] = e[2] + (r[2] || 0))),
      t
    ),
    2,
    g.zero
  );
  g.minus = T(
    (t, e, r) => (
      typeof r == "number"
        ? ((t[0] = e[0] - r), (t[1] = e[1] - r), (t[2] = e[2] - r))
        : ((t[0] = e[0] - r[0]),
          (t[1] = e[1] - (r[1] || 0)),
          (t[2] = e[2] - (r[2] || 0))),
      t
    ),
    2,
    g.zero
  );
  g.mul = T(
    (t, e, r) => (
      typeof r == "number"
        ? ((t[0] = e[0] * r), (t[1] = e[1] * r), (t[2] = e[2] * r))
        : ((t[0] = e[0] * r[0]),
          (t[1] = e[1] * (r[1] === void 0 ? 1 : r[1])),
          (t[2] = e[2] * (r[2] === void 0 ? 1 : r[2]))),
      t
    ),
    2,
    g.zero
  );
  g.div = T(
    (t, e, r) => (
      typeof r == "number"
        ? ((t[0] = e[0] / r), (t[1] = e[1] / r), (t[2] = e[2] / r))
        : ((t[0] = e[0] / r[0]),
          (t[1] = e[1] / (r[1] === void 0 ? 1 : r[1])),
          (t[2] = e[2] / (r[2] === void 0 ? 1 : r[2]))),
      t
    ),
    2,
    g.zero
  );
  g.set = T(
    (t, e) => ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t),
    1,
    g.zero
  );
  g.fill = T((t, e) => ((t[0] = t[1] = t[2] = e), t), 1, g.zero);
  g.distance = (t, e) => Math.hypot(t.x - e.x, t.y - e.y, t.z - e.z);
  var Za = Array,
    oe = class extends Za {
      get x() {
        return this[0];
      }
      set x(e) {
        this[0] = e;
      }
      get y() {
        return this[1];
      }
      set y(e) {
        this[1] = e;
      }
      get z() {
        return this[2];
      }
      set z(e) {
        this[2] = e;
      }
      get w() {
        return this[3];
      }
      set w(e) {
        this[3] = e;
      }
      get magnitude() {
        return Math.hypot(...this);
      }
      get normalized() {
        let e = this.magnitude;
        return e == 0 ? A.zero() : this.clone().div(A(e, e, e, e));
      }
      get negative() {
        return this.clone().negate();
      }
      get inversed() {
        return this.clone().inverse();
      }
      constructor(e, r, i = 0, n = 0) {
        super(e, r, i || 0, n || 0);
      }
      static zero() {
        return new oe(0, 0, 0, 0);
      }
      static one() {
        return new oe(1, 1, 1, 1);
      }
      asMut() {
        return this;
      }
      plus(e) {
        return A.plus(this, this, e);
      }
      minus(e) {
        return A.minus(this, this, e);
      }
      mul(e) {
        return A.mul(this, this, e);
      }
      div(e) {
        return A.div(this, this, e);
      }
      dot(e) {
        return (
          this[0] * e[0] + this[1] * e[1] + this[2] * e[2] + this[3] * e[3]
        );
      }
      normalize() {
        return A.normalize(this, this);
      }
      inverse() {
        return (
          (this[0] = 1 / this[0]),
          (this[1] = 1 / this[1]),
          (this[2] = 1 / this[2]),
          (this[3] = 1 / this[3]),
          this
        );
      }
      negate() {
        return (
          (this[0] = -this[0]),
          (this[1] = -this[1]),
          (this[2] = -this[2]),
          (this[3] = -this[3]),
          this
        );
      }
      clone(e = A.zero()) {
        return e.set(this);
      }
      equals(e) {
        return e === void 0
          ? !1
          : e[0] === this[0] &&
              e[1] === this[1] &&
              e[2] === this[2] &&
              e[3] === this[3];
      }
      set(e) {
        return (
          (this[0] = e[0] || 0),
          (this[1] = e[1] || 0),
          (this[2] = e[2] || 0),
          (this[3] = e[3] || 0),
          this
        );
      }
      fill(e) {
        return (this[0] = this[1] = this[2] = this[3] = e), this;
      }
      static math(e) {
        return (...r) =>
          A(
            e(...r.map(i => i.x)),
            e(...r.map(i => i.y)),
            e(...r.map(i => i.z)),
            e(...r.map(i => i.w))
          );
      }
      static mathNonAlloc(e) {
        return (r, ...i) => (
          (r[0] = e(...i.map(n => n[0]))),
          (r[1] = e(...i.map(n => n[1]))),
          (r[2] = e(...i.map(n => n[2]))),
          (r[3] = e(...i.map(n => n[3]))),
          r
        );
      }
      __to(e) {
        switch (e) {
          case oe:
            return this.clone();
          case ye:
            return g(this[0], this[1], this[2]);
          case Q:
            return m(this[0], this[1]);
        }
        return this.clone();
      }
    };
  function A(t, e = t, r = t, i = t) {
    return new oe(t, e, r, i);
  }
  A.from = t => {
    let [e = 0, r = 0, i = 0, n = 0] = t;
    return A(e, r, i, n);
  };
  A.floor = t =>
    A(Math.floor(t.x), Math.floor(t.y), Math.floor(t.z), Math.floor(t.w));
  A.zero = oe.zero;
  A.one = oe.one;
  A.math = oe.math;
  A.mathNonAlloc = oe.mathNonAlloc;
  A.normalize = T(Ce.normalize, 1, A.zero);
  A.plus = T(
    (t, e, r) => (
      typeof r == "number"
        ? ((t[0] = e[0] + r),
          (t[1] = e[1] + r),
          (t[2] = e[2] + r),
          (t[3] = e[3] + r))
        : ((t[0] = e[0] + r[0]),
          (t[1] = e[1] + (r[1] || 0)),
          (t[2] = e[2] + (r[2] || 0)),
          (t[3] = e[3] + (r[3] || 0))),
      t
    ),
    2,
    A.zero
  );
  A.minus = T(
    (t, e, r) => (
      typeof r == "number"
        ? ((t[0] = e[0] - r),
          (t[1] = e[1] - r),
          (t[2] = e[2] - r),
          (t[3] = e[3] - r))
        : ((t[0] = e[0] - r[0]),
          (t[1] = e[1] - (r[1] || 0)),
          (t[2] = e[2] - (r[2] || 0)),
          (t[3] = e[3] - (r[3] || 0))),
      t
    ),
    2,
    A.zero
  );
  A.mul = T(
    (t, e, r) => (
      typeof r == "number"
        ? ((t[0] = e[0] * r),
          (t[1] = e[1] * r),
          (t[2] = e[2] * r),
          (t[3] = e[3] * r))
        : ((t[0] = e[0] * r[0]),
          (t[1] = e[1] * (r[1] === void 0 ? 1 : r[1])),
          (t[2] = e[2] * (r[2] === void 0 ? 1 : r[2])),
          (t[3] = e[3] * (r[3] === void 0 ? 1 : r[3]))),
      t
    ),
    2,
    A.zero
  );
  A.div = T(
    (t, e, r) => (
      typeof r == "number"
        ? ((t[0] = e[0] / r),
          (t[1] = e[1] / r),
          (t[2] = e[2] / r),
          (t[3] = e[3] / r))
        : ((t[0] = e[0] / r[0]),
          (t[1] = e[1] / (r[1] === void 0 ? 1 : r[1])),
          (t[2] = e[2] / (r[2] === void 0 ? 1 : r[2])),
          (t[3] = e[3] / (r[3] === void 0 ? 1 : r[3]))),
      t
    ),
    2,
    A.zero
  );
  A.set = T(
    (t, e) => ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t),
    1,
    A.zero
  );
  A.fill = T((t, e) => ((t[0] = t[1] = t[2] = t[3] = e), t), 1, A.zero);
  var Ja = Array,
    Q = class extends Ja {
      get x() {
        return this[0];
      }
      set x(e) {
        this[0] = e;
      }
      get y() {
        return this[1];
      }
      set y(e) {
        this[1] = e;
      }
      get magnitude() {
        return Math.hypot(...this);
      }
      get magnitudeSqr() {
        return this[0] * this[0] + this[1] * this[1];
      }
      get normalized() {
        let e = this.magnitude;
        return e == 0 ? m.zero() : this.clone().div(m(e, e));
      }
      get negative() {
        return this.clone().negate();
      }
      get inversed() {
        return this.clone().inverse();
      }
      get isZero() {
        return this.x === 0 && this.y === 0;
      }
      constructor(e, r) {
        super(e, r);
      }
      static zero() {
        return new Q(0, 0);
      }
      static one() {
        return new Q(1, 1);
      }
      static up() {
        return new Q(0, 1);
      }
      static down() {
        return new Q(0, -1);
      }
      static left() {
        return new Q(-1, 0);
      }
      static right() {
        return new Q(1, 0);
      }
      static distance(e, r) {
        return Math.sqrt((e.x - r.x) * (e.x - r.x) + (e.y - r.y) * (e.y - r.y));
      }
      static distanceSquared(e, r) {
        return (e.x - r.x) * (e.x - r.x) + (e.y - r.y) * (e.y - r.y);
      }
      static math(e) {
        return (...r) => m(e(...r.map(i => i.x)), e(...r.map(i => i.y)));
      }
      asMut() {
        return this;
      }
      plus(e) {
        return m.plus(this, this, e);
      }
      minus(e) {
        return m.minus(this, this, e);
      }
      mul(e) {
        return m.mul(this, this, e);
      }
      div(e) {
        return m.div(this, this, e);
      }
      dot(e) {
        return this[0] * e[0] + this[1] * e[1];
      }
      normalize() {
        return m.normalize(this, this);
      }
      inverse() {
        return (this[0] = 1 / this[0]), (this[1] = 1 / this[1]), this;
      }
      negate() {
        return (this[0] = -this[0]), (this[1] = -this[1]), this;
      }
      oneMinus() {
        return (this[0] = 1 - this[0]), (this[1] = 1 - this[1]), this;
      }
      equals(e) {
        return e === void 0 ? !1 : e[0] === this[0] && e[1] === this[1];
      }
      clone(e = m.zero()) {
        return e.set(this);
      }
      set(e) {
        return (this[0] = e[0] || 0), (this[1] = e[1] || 0), this;
      }
      fill(e) {
        return (this[0] = this[1] = e), this;
      }
      toVec3(e = 0) {
        return g(this[0], this[1], e);
      }
      __to(e) {
        switch (e) {
          case oe:
            return A(this[0], this[1], 0, 0);
          case ye:
            return g(this[0], this[1], 0);
        }
        return this.clone();
      }
    };
  function m(t, e = t) {
    return new Q(t, e);
  }
  m.from = t => {
    let [e = 0, r = 0] = t;
    return m(e, r);
  };
  m.floor = t => m(Math.floor(t.x), Math.floor(t.y));
  m.zero = Q.zero;
  m.one = Q.one;
  m.left = Q.left;
  m.right = Q.right;
  m.down = Q.down;
  m.up = Q.up;
  m.math = Q.math;
  m.plus = T(
    (t, e, r) => (
      typeof r == "number"
        ? ((t[0] = e[0] + r), (t[1] = e[1] + r))
        : ((t[0] = e[0] + r[0]), (t[1] = e[1] + (r[1] || 0))),
      t
    ),
    2,
    m.zero
  );
  m.minus = T(
    (t, e, r) => (
      typeof r == "number"
        ? ((t[0] = e[0] - r), (t[1] = e[1] - r))
        : ((t[0] = e[0] - r[0]), (t[1] = e[1] - (r[1] || 0))),
      t
    ),
    2,
    m.zero
  );
  m.mul = T(
    (t, e, r) => (
      typeof r == "number"
        ? ((t[0] = e[0] * r), (t[1] = e[1] * r))
        : ((t[0] = e[0] * r[0]), (t[1] = e[1] * r[1])),
      t
    ),
    2,
    m.zero
  );
  m.div = T(
    (t, e, r) => (
      typeof r == "number"
        ? ((t[0] = e[0] / r), (t[1] = e[1] / r))
        : ((t[0] = e[0] / r[0]), (t[1] = e[1] / r[1])),
      t
    ),
    2,
    m.zero
  );
  m.exp = T(
    (t, e) => (
      typeof e == "number"
        ? ((t[0] = Math.exp(e)), (t[1] = Math.exp(e)))
        : ((t[0] = Math.exp(e[0])), (t[1] = Math.exp(e[1]))),
      t
    ),
    1,
    m.zero
  );
  m.inverse = T((t, e) => ((t[0] = 1 / e[0]), (t[1] = 1 / e[1]), t), 1, m.zero);
  m.dot = (t, e) => t[0] * e[0] + t[1] * e[1];
  m.cross = (t, e) => t[0] * e[1] - t[1] * e[0];
  m.normalize = T(kt.normalize, 1, m.zero);
  m.perpendicular = T((t, e) => ((t[0] = -e[1]), (t[1] = e[0]), t), 1, m.zero);
  m.set = T((t, e) => ((t[0] = e[0]), (t[1] = e[1]), t), 1, m.zero);
  m.fill = T((t, e) => ((t[0] = t[1] = e), t), 1, m.zero);
  var I = class extends oe {
    get r() {
      return this[0];
    }
    set r(e) {
      this[0] = e;
    }
    get g() {
      return this[1];
    }
    set g(e) {
      this[1] = e;
    }
    get b() {
      return this[2];
    }
    set b(e) {
      this[2] = e;
    }
    get a() {
      return this[3];
    }
    set a(e) {
      this[3] = e;
    }
    constructor(e, r, i, n = 1) {
      super(e, r, i, n);
    }
    static get white() {
      return new I(1, 1, 1);
    }
    static get transparent() {
      return new I(1, 1, 1, 0);
    }
    static get black() {
      return new I(0, 0, 0);
    }
    static get red() {
      return new I(1, 0, 0);
    }
    static get green() {
      return new I(0, 1, 0);
    }
    static get blue() {
      return new I(0, 0, 1);
    }
    static get cyan() {
      return new I(0, 1, 1);
    }
    static get yellow() {
      return new I(1, 1, 0);
    }
    static get magenta() {
      return new I(1, 0, 1);
    }
    static get gray() {
      return new I(0.5, 0.5, 0.5);
    }
    transparent() {
      return new I(this.r, this.g, this.b, 0);
    }
    setHSL(e, r, i) {
      e = e < 0 ? e + 360 : e;
      let n = (1 - Math.abs(2 * i - 1)) * r;
      if (isNaN(e)) return (this.r = this.g = this.b = 0), this;
      e = e / 60;
      let s = n * (1 - Math.abs((e % 2) - 1)),
        a = [0, 0, 0];
      0 <= e && e <= 1
        ? (a = [n, s, 0])
        : e <= 2
        ? (a = [s, n, 0])
        : e <= 3
        ? (a = [0, n, s])
        : e <= 4
        ? (a = [0, s, n])
        : e <= 5
        ? (a = [s, 0, n])
        : e <= 6 && (a = [n, 0, s]);
      let o = i - n / 2;
      return (
        (this.r = a[0] + o), (this.g = a[1] + o), (this.b = a[2] + o), this
      );
    }
    get hue() {
      let e = this.r,
        r = this.g,
        i = this.b,
        n = Math.max(e, r, i),
        s = Math.min(e, r, i),
        a = 0;
      return (
        n === s
          ? (a = 0)
          : n === e
          ? (a = 60 * (0 + (r - i) / (n - s)))
          : n === r
          ? (a = 60 * (2 + (i - e) / (n - s)))
          : n === i && (a = 60 * (4 + (e - r) / (n - s))),
        a < 0 ? a + 360 : a
      );
    }
    get saturation() {
      let e = Math.max(this.r, this.g, this.b),
        r = Math.min(this.r, this.g, this.b);
      return e === 0 || r == 1 ? 0 : (e - r) / (1 - Math.abs(e + r - 1));
    }
    get lightness() {
      let e = Math.max(this.r, this.g, this.b),
        r = Math.min(this.r, this.g, this.b);
      return (e + r) / 2;
    }
    toHSL() {
      return [this.hue, this.saturation, this.lightness];
    }
    static fromHSL(e, r, i, n = 1) {
      return new I(0, 0, 0, n).setHSL(e, r, i);
    }
    static fromString(e, r) {
      e = e.replace(new RegExp(/\s/g), "");
      var i = new RegExp("#[0-9a-fA-F]{6}");
      if (i.test(e)) {
        e = e.replace("#", "");
        var n = e.charAt(0) + e.charAt(1),
          s = e.charAt(2) + e.charAt(3),
          a = e.charAt(4) + e.charAt(5),
          o = parseInt(n, 16),
          h = parseInt(s, 16),
          l = parseInt(a, 16);
        return new I(o / 255, h / 255, l / 255, r || 1);
      }
      if (
        ((i = new RegExp(
          "rgb\\(([0-9]+(\\.[0-9]+){0,1}),([0-9]+(\\.[0-9]+){0,1}),([0-9]+(\\.[0-9]+){0,1})\\)"
        )),
        i.test(e))
      ) {
        var f = e.replace("rgb(", "").replace(")", "").split(","),
          o = parseInt(f[0]),
          h = parseInt(f[1]),
          l = parseInt(f[2]),
          c = r || 1;
        return new I(o / 255, h / 255, l / 255, c / 255);
      }
      if (
        ((i = new RegExp(
          "rgba\\(([0-9]+(\\.[0-9]+){0,1}),([0-9]+(\\.[0-9]+){0,1}),([0-9]+(\\.[0-9]+){0,1}),([0-9]+(\\.[0-9]+){0,1})\\)"
        )),
        i.test(e))
      ) {
        var f = e.replace("rgba(", "").replace(")", "").split(","),
          o = parseInt(f[0]),
          h = parseInt(f[1]),
          l = parseInt(f[2]),
          c = r || parseFloat(f[3]);
        return new I(o / 255, h / 255, l / 255, c);
      }
      throw new Error(`Invalid color string '${e}'`);
    }
  };
  var Qo = I.fromHSL;
  var Ka = Array,
    st = class extends Ka {
      static create() {
        return new st(0, 0, 0, 0);
      }
      asMut() {
        return this;
      }
      equals(e) {
        return !e || !(e instanceof Array) ? !1 : De.exactEquals(this, e);
      }
      clone(e = st.create()) {
        return e.set(this);
      }
      set(e) {
        return (
          (this[0] = e[0] || 0),
          (this[1] = e[1] || 0),
          (this[2] = e[2] || 0),
          (this[3] = e[3] || 0),
          this
        );
      }
      fill(e) {
        return (this[0] = e), (this[1] = e), (this[2] = e), (this[3] = e), this;
      }
    };
  function re(t = 0, e = t, r = t, i = t) {
    return new st(t, e, r, i);
  }
  re.create = () => re(0);
  re.identity = T(De.identity, 0, re.create);
  re.axisAngle = T((t, e, r) => De.setAxisAngle(t, e, r), 2, re.create);
  re.mul = T(De.mul, 2, re.create);
  re.invert = T(De.invert, 1, re.create);
  re.normalize = T(De.normalize, 1, re.create);
  re.euler = T(
    (t, e) => (
      (t[0] =
        Math.atan2(
          2 * (e[3] * e[0] + e[1] * e[2]),
          1 - 2 * (e[0] ** 2 + e[1] ** 2)
        ) * xt),
      (t[1] = Math.asin(2 * (e[3] * e[1] - e[2] * e[0])) * xt),
      (t[2] =
        Math.atan2(
          2 * (e[3] * e[2] + e[0] * e[1]),
          1 - 2 * (e[1] ** 2, e[2] ** 2)
        ) * xt),
      t
    ),
    1,
    g.zero
  );
  re.fromEuler = T((t, e) => De.fromEuler(t, e[0], e[1], e[2]), 1, re.create);
  re.rotate = T((t, e, r) => ke.transformQuat(t, r, e), 2, g.zero);
  re.equals = (t, e) => De.exactEquals(t, e);
  var eo = Array,
    H = A.zero(),
    me = class extends eo {
      constructor(
        e = 0,
        r = 0,
        i = 0,
        n = 0,
        s = 0,
        a = 0,
        o = 0,
        h = 0,
        l = 0,
        f = 0,
        c = 0,
        p = 0,
        u = 0,
        x = 0,
        M = 0,
        v = 0
      ) {
        super(e, r, i, n, s, a, o, h, l, f, c, p, u, x, M, v);
      }
      static create() {
        return new me();
      }
      asMut() {
        return this;
      }
      set(e) {
        return $.set(this, ...e);
      }
      fill(e) {
        return w.fill(this, e);
      }
      clone(e = w.create()) {
        return e.set(this);
      }
      equals(e) {
        return w.equal(this, e);
      }
    };
  function w(
    t = 0,
    e = 0,
    r = 0,
    i = 0,
    n = 0,
    s = 0,
    a = 0,
    o = 0,
    h = 0,
    l = 0,
    f = 0,
    c = 0,
    p = 0,
    u = 0,
    x = 0,
    M = 0
  ) {
    return new me(t, e, r, i, n, s, a, o, h, l, f, c, p, u, x, M);
  }
  w.create = me.create;
  w.identity = T($.identity, 0, w.create);
  w.rts = T($.fromRotationTranslationScale, 3, w.create);
  w.translate = T($.translate, 2, me.create);
  w.invert = T($.invert, 1, me.create);
  w.getTranslation = T($.getTranslation, 1, g.zero);
  w.getRotation = T($.getRotation, 1, re.create);
  w.getScaling = T($.getScaling, 1, g.zero);
  w.mulVec4 = T((t, e, r) => Ce.transformMat4(t, r, e), 2, A.zero);
  w.perspective = T($.perspective, 4, me.create);
  w.transpose = T($.transpose, 1, me.create);
  w.rotate = T((t, e, r, i) => $.rotate(t, e, i, r), 3, me.create);
  w.scale = T($.scale, 2, me.create);
  w.fromTranslation = T($.fromTranslation, 1, me.create);
  w.fromRotation = T($.fromRotation, 1, me.create);
  w.fromScaling = T($.fromScaling, 1, me.create);
  w.mul = T($.mul, 2, me.create);
  w.add = T($.add, 2, w.create);
  w.sub = T($.sub, 2, w.create);
  w.plus = w.add;
  w.minus = w.sub;
  w.mulVector = T(
    (t, e, r) => (
      (H[0] = r[0]),
      (H[1] = r[1]),
      (H[2] = r[2]),
      (H[3] = 0),
      Ce.transformMat4(H, H, e),
      (t[0] = H[0]),
      (t[1] = H[1]),
      (t[2] = H[2]),
      t
    ),
    2,
    g.zero
  );
  w.mulPoint = T(
    (t, e, r) => (
      (H[0] = r[0]),
      (H[1] = r[1]),
      (H[2] = r[2]),
      (H[3] = 1),
      Ce.transformMat4(H, H, e),
      (t[0] = H[0]),
      (t[1] = H[1]),
      (t[2] = H[2]),
      t
    ),
    2,
    g.zero
  );
  w.mulPoint2 = T(
    (t, e, r) => (
      (H[0] = r[0]),
      (H[1] = r[1]),
      (H[2] = 0),
      (H[3] = 1),
      Ce.transformMat4(H, H, e),
      (t[0] = H[0]),
      (t[1] = H[1]),
      t
    ),
    2,
    m.zero
  );
  w.mulVector2 = T(
    (t, e, r) => (
      (H[0] = r[0]),
      (H[1] = r[1]),
      (H[2] = 0),
      (H[3] = 0),
      Ce.transformMat4(H, H, e),
      (t[0] = H[0]),
      (t[1] = H[1]),
      t
    ),
    2,
    m.zero
  );
  function to(t, e, r, i) {
    let n = w.create();
    return $.ortho(n, -e * t, e * t, -t, t, r, i), n;
  }
  function ro(...t) {
    if (t.length === 4) return to(...t);
    let e = w.create();
    return $.ortho(e, ...t), e;
  }
  w.ortho = ro;
  w.equal = (t, e) =>
    t === void 0 ||
    e === void 0 ||
    !(t instanceof Array || t instanceof Float32Array) ||
    !(e instanceof Array || e instanceof Float32Array)
      ? !1
      : $.exactEquals(t, e);
  w.set = T($.set, 1, w.create);
  w.fill = T(
    (t, e) => (
      (t[0] =
        t[1] =
        t[2] =
        t[3] =
        t[4] =
        t[5] =
        t[6] =
        t[7] =
        t[8] =
        t[9] =
        t[10] =
        t[11] =
        t[12] =
        t[13] =
        t[14] =
        t[15] =
          e),
      t
    ),
    1,
    w.create
  );
  Number.prototype.__to = function (t) {
    switch (t) {
      case oe:
        return A(
          this.valueOf(),
          this.valueOf(),
          this.valueOf(),
          this.valueOf()
        );
      case ye:
        return g(this.valueOf(), this.valueOf(), this.valueOf());
      case Q:
        return m(this.valueOf(), this.valueOf());
    }
    return this.valueOf();
  };
  function gt(t, e) {
    let r = Math.max(t.length || 0, e.length || 0);
    switch (r) {
      case 2:
        return typeof t == "number" ? m.fill(t) : m.set(t);
      case 3:
        return typeof t == "number" ? m.fill(t) : g.set(t);
      case 4:
        return typeof t == "number" ? m.fill(t) : A.set(t);
      case 16:
        return typeof t == "number" ? m.fill(t) : w.set(t);
    }
    return console.warn(`Unsupported vector length '${r}'`), new Array();
  }
  function Ue(t, e, r) {
    if (typeof t == "number" && typeof e == "number") return t + e;
    let i = r || gt(t, e);
    switch (i.length) {
      case 2:
        return m.plus(i, i, e);
      case 3:
        return g.plus(i, i, e);
      case 4:
        return A.plus(i, i, e);
    }
    return (
      console.warn(`Unsupported vector length '${i.length}'`), A.plus(i, i, e)
    );
  }
  function He(t, e, r) {
    if (typeof t == "number" && typeof e == "number") return t + e;
    let i = r || gt(t, e);
    switch (i.length) {
      case 2:
        return m.minus(i, i, e);
      case 3:
        return g.minus(i, i, e);
      case 4:
        return A.minus(i, i, e);
    }
    return (
      console.warn(`Unsupported vector length '${i.length}'`), A.minus(i, i, e)
    );
  }
  function Ie(t, e, r) {
    if (typeof t == "number" && typeof e == "number") return t + e;
    let i = r || gt(t, e);
    switch (i.length) {
      case 2:
        return m.mul(i, i, e);
      case 3:
        return g.mul(i, i, e);
      case 4:
        return A.mul(i, i, e);
    }
    return (
      console.warn(`Unsupported vector length '${i.length}'`), A.mul(i, i, e)
    );
  }
  function We(t, e, r) {
    if (typeof t == "number" && typeof e == "number") return t + e;
    let i = r || gt(t, e);
    switch (i.length) {
      case 2:
        return m.div(i, i, e);
      case 3:
        return g.div(i, i, e);
      case 4:
        return A.div(i, i, e);
    }
    return (
      console.warn(`Unsupported vector length '${i.length}'`), A.div(i, i, e)
    );
  }
  function Jr(t, e, r = g.zero()) {
    return (
      (r[0] = t[1] * e[2] - t[2] * e[1]),
      (r[1] = t[2] * e[0] - t[0] * e[2]),
      (r[2] = t[0] * e[1] - t[1] * e[0]),
      r
    );
  }
  var ph = Math.PI / 180,
    xt = 180 / Math.PI;
  var fe = class {
    constructor(e, r) {
      (this.min = e), (this.max = Ue(e, r));
    }
    get xMin() {
      return this.min.x;
    }
    get yMin() {
      return this.min.y;
    }
    get xMax() {
      return this.max.x;
    }
    get yMax() {
      return this.max.y;
    }
    get width() {
      return this.max.x - this.min.x;
    }
    get height() {
      return this.max.y - this.min.y;
    }
    get size() {
      return He(this.max, this.min);
    }
    get center() {
      return Ue(this.min, this.max).mul(m(0.5));
    }
    shrink(e) {
      let r = Ue(this.min, m(e)),
        i = He(this.max, m(e));
      return (
        r.x > i.x && (r.x = i.x = (r.x + i.x) / 2),
        r.y > i.y && (r.y = i.y = (r.y + i.y) / 2),
        new fe(r, i.minus(r))
      );
    }
    expand(e) {
      return new fe(He(this.min, m(e)), Ue(this.size, m(2 * e)));
    }
    static box01() {
      return new fe(m.zero(), m.one());
    }
  };
  var Kr;
  (function (t) {
    (function (e) {
      var r =
          typeof global == "object"
            ? global
            : typeof self == "object"
            ? self
            : typeof this == "object"
            ? this
            : Function("return this;")(),
        i = n(t);
      typeof r.Reflect == "undefined" ? (r.Reflect = t) : (i = n(r.Reflect, i)),
        e(i);
      function n(s, a) {
        return function (o, h) {
          typeof s[o] != "function" &&
            Object.defineProperty(s, o, {
              configurable: !0,
              writable: !0,
              value: h,
            }),
            a && a(o, h);
        };
      }
    })(function (e) {
      var r = Object.prototype.hasOwnProperty,
        i = typeof Symbol == "function",
        n =
          i && typeof Symbol.toPrimitive != "undefined"
            ? Symbol.toPrimitive
            : "@@toPrimitive",
        s =
          i && typeof Symbol.iterator != "undefined"
            ? Symbol.iterator
            : "@@iterator",
        a = typeof Object.create == "function",
        o = { __proto__: [] } instanceof Array,
        h = !a && !o,
        l = {
          create: a
            ? function () {
                return At(Object.create(null));
              }
            : o
            ? function () {
                return At({ __proto__: null });
              }
            : function () {
                return At({});
              },
          has: h
            ? function (d, y) {
                return r.call(d, y);
              }
            : function (d, y) {
                return y in d;
              },
          get: h
            ? function (d, y) {
                return r.call(d, y) ? d[y] : void 0;
              }
            : function (d, y) {
                return d[y];
              },
        },
        f = Object.getPrototypeOf(Function),
        c =
          typeof process == "object" &&
          process.env &&
          process.env.REFLECT_METADATA_USE_MAP_POLYFILL === "true",
        p =
          !c &&
          typeof Map == "function" &&
          typeof Map.prototype.entries == "function"
            ? Map
            : Gi(),
        u =
          !c &&
          typeof Set == "function" &&
          typeof Set.prototype.entries == "function"
            ? Set
            : Vi(),
        x = !c && typeof WeakMap == "function" ? WeakMap : ki(),
        M = new x();
      function v(d, y, R, b) {
        if (se(R)) {
          if (!hr(d)) throw new TypeError();
          if (!lr(y)) throw new TypeError();
          return K(d, y);
        } else {
          if (!hr(d)) throw new TypeError();
          if (!ae(y)) throw new TypeError();
          if (!ae(b) && !se(b) && !Xe(b)) throw new TypeError();
          return Xe(b) && (b = void 0), (R = ze(R)), te(d, y, R, b);
        }
      }
      e("decorate", v);
      function E(d, y) {
        function R(b, B) {
          if (!ae(b)) throw new TypeError();
          if (!se(B) && !Li(B)) throw new TypeError();
          Oe(d, y, b, B);
        }
        return R;
      }
      e("metadata", E);
      function F(d, y, R, b) {
        if (!ae(R)) throw new TypeError();
        return se(b) || (b = ze(b)), Oe(d, y, R, b);
      }
      e("defineMetadata", F);
      function D(d, y, R) {
        if (!ae(y)) throw new TypeError();
        return se(R) || (R = ze(R)), ie(d, y, R);
      }
      e("hasMetadata", D);
      function C(d, y, R) {
        if (!ae(y)) throw new TypeError();
        return se(R) || (R = ze(R)), k(d, y, R);
      }
      e("hasOwnMetadata", C);
      function P(d, y, R) {
        if (!ae(y)) throw new TypeError();
        return se(R) || (R = ze(R)), ge(d, y, R);
      }
      e("getMetadata", P);
      function z(d, y, R) {
        if (!ae(y)) throw new TypeError();
        return se(R) || (R = ze(R)), Le(d, y, R);
      }
      e("getOwnMetadata", z);
      function ee(d, y) {
        if (!ae(d)) throw new TypeError();
        return se(y) || (y = ze(y)), rt(d, y);
      }
      e("getMetadataKeys", ee);
      function Z(d, y) {
        if (!ae(d)) throw new TypeError();
        return se(y) || (y = ze(y)), it(d, y);
      }
      e("getOwnMetadataKeys", Z);
      function J(d, y, R) {
        if (!ae(y)) throw new TypeError();
        se(R) || (R = ze(R));
        var b = X(y, R, !1);
        if (se(b) || !b.delete(d)) return !1;
        if (b.size > 0) return !0;
        var B = M.get(y);
        return B.delete(R), B.size > 0 || M.delete(y), !0;
      }
      e("deleteMetadata", J);
      function K(d, y) {
        for (var R = d.length - 1; R >= 0; --R) {
          var b = d[R],
            B = b(y);
          if (!se(B) && !Xe(B)) {
            if (!lr(B)) throw new TypeError();
            y = B;
          }
        }
        return y;
      }
      function te(d, y, R, b) {
        for (var B = d.length - 1; B >= 0; --B) {
          var ce = d[B],
            U = ce(y, R, b);
          if (!se(U) && !Xe(U)) {
            if (!ae(U)) throw new TypeError();
            b = U;
          }
        }
        return b;
      }
      function X(d, y, R) {
        var b = M.get(d);
        if (se(b)) {
          if (!R) return;
          (b = new p()), M.set(d, b);
        }
        var B = b.get(y);
        if (se(B)) {
          if (!R) return;
          (B = new p()), b.set(y, B);
        }
        return B;
      }
      function ie(d, y, R) {
        var b = k(d, y, R);
        if (b) return !0;
        var B = Tt(y);
        return Xe(B) ? !1 : ie(d, B, R);
      }
      function k(d, y, R) {
        var b = X(y, R, !1);
        return se(b) ? !1 : Ci(b.has(d));
      }
      function ge(d, y, R) {
        var b = k(d, y, R);
        if (b) return Le(d, y, R);
        var B = Tt(y);
        if (!Xe(B)) return ge(d, B, R);
      }
      function Le(d, y, R) {
        var b = X(y, R, !1);
        if (!se(b)) return b.get(d);
      }
      function Oe(d, y, R, b) {
        var B = X(R, b, !0);
        B.set(d, y);
      }
      function rt(d, y) {
        var R = it(d, y),
          b = Tt(d);
        if (b === null) return R;
        var B = rt(b, y);
        if (B.length <= 0) return R;
        if (R.length <= 0) return B;
        for (var ce = new u(), U = [], G = 0, S = R; G < S.length; G++) {
          var W = S[G],
            Y = ce.has(W);
          Y || (ce.add(W), U.push(W));
        }
        for (var Fe = 0, fr = B; Fe < fr.length; Fe++) {
          var W = fr[Fe],
            Y = ce.has(W);
          Y || (ce.add(W), U.push(W));
        }
        return U;
      }
      function it(d, y) {
        var R = [],
          b = X(d, y, !1);
        if (se(b)) return R;
        for (var B = b.keys(), ce = Oi(B), U = 0; ; ) {
          var G = Ui(ce);
          if (!G) return (R.length = U), R;
          var S = Fi(G);
          try {
            R[U] = S;
          } catch (W) {
            try {
              Ni(ce);
            } finally {
              throw W;
            }
          }
          U++;
        }
      }
      function or(d) {
        if (d === null) return 1;
        switch (typeof d) {
          case "undefined":
            return 0;
          case "boolean":
            return 2;
          case "string":
            return 3;
          case "symbol":
            return 4;
          case "number":
            return 5;
          case "object":
            return d === null ? 1 : 6;
          default:
            return 6;
        }
      }
      function se(d) {
        return d === void 0;
      }
      function Xe(d) {
        return d === null;
      }
      function Si(d) {
        return typeof d == "symbol";
      }
      function ae(d) {
        return typeof d == "object" ? d !== null : typeof d == "function";
      }
      function Pi(d, y) {
        switch (or(d)) {
          case 0:
            return d;
          case 1:
            return d;
          case 2:
            return d;
          case 3:
            return d;
          case 4:
            return d;
          case 5:
            return d;
        }
        var R = y === 3 ? "string" : y === 5 ? "number" : "default",
          b = cr(d, n);
        if (b !== void 0) {
          var B = b.call(d, R);
          if (ae(B)) throw new TypeError();
          return B;
        }
        return zi(d, R === "default" ? "number" : R);
      }
      function zi(d, y) {
        if (y === "string") {
          var R = d.toString;
          if (qe(R)) {
            var b = R.call(d);
            if (!ae(b)) return b;
          }
          var B = d.valueOf;
          if (qe(B)) {
            var b = B.call(d);
            if (!ae(b)) return b;
          }
        } else {
          var B = d.valueOf;
          if (qe(B)) {
            var b = B.call(d);
            if (!ae(b)) return b;
          }
          var ce = d.toString;
          if (qe(ce)) {
            var b = ce.call(d);
            if (!ae(b)) return b;
          }
        }
        throw new TypeError();
      }
      function Ci(d) {
        return !!d;
      }
      function Ii(d) {
        return "" + d;
      }
      function ze(d) {
        var y = Pi(d, 3);
        return Si(y) ? y : Ii(y);
      }
      function hr(d) {
        return Array.isArray
          ? Array.isArray(d)
          : d instanceof Object
          ? d instanceof Array
          : Object.prototype.toString.call(d) === "[object Array]";
      }
      function qe(d) {
        return typeof d == "function";
      }
      function lr(d) {
        return typeof d == "function";
      }
      function Li(d) {
        switch (or(d)) {
          case 3:
            return !0;
          case 4:
            return !0;
          default:
            return !1;
        }
      }
      function cr(d, y) {
        var R = d[y];
        if (R != null) {
          if (!qe(R)) throw new TypeError();
          return R;
        }
      }
      function Oi(d) {
        var y = cr(d, s);
        if (!qe(y)) throw new TypeError();
        var R = y.call(d);
        if (!ae(R)) throw new TypeError();
        return R;
      }
      function Fi(d) {
        return d.value;
      }
      function Ui(d) {
        var y = d.next();
        return y.done ? !1 : y;
      }
      function Ni(d) {
        var y = d.return;
        y && y.call(d);
      }
      function Tt(d) {
        var y = Object.getPrototypeOf(d);
        if (typeof d != "function" || d === f || y !== f) return y;
        var R = d.prototype,
          b = R && Object.getPrototypeOf(R);
        if (b == null || b === Object.prototype) return y;
        var B = b.constructor;
        return typeof B != "function" || B === d ? y : B;
      }
      function Gi() {
        var d = {},
          y = [],
          R = (function () {
            function U(G, S, W) {
              (this._index = 0),
                (this._keys = G),
                (this._values = S),
                (this._selector = W);
            }
            return (
              (U.prototype["@@iterator"] = function () {
                return this;
              }),
              (U.prototype[s] = function () {
                return this;
              }),
              (U.prototype.next = function () {
                var G = this._index;
                if (G >= 0 && G < this._keys.length) {
                  var S = this._selector(this._keys[G], this._values[G]);
                  return (
                    G + 1 >= this._keys.length
                      ? ((this._index = -1),
                        (this._keys = y),
                        (this._values = y))
                      : this._index++,
                    { value: S, done: !1 }
                  );
                }
                return { value: void 0, done: !0 };
              }),
              (U.prototype.throw = function (G) {
                throw (
                  (this._index >= 0 &&
                    ((this._index = -1), (this._keys = y), (this._values = y)),
                  G)
                );
              }),
              (U.prototype.return = function (G) {
                return (
                  this._index >= 0 &&
                    ((this._index = -1), (this._keys = y), (this._values = y)),
                  { value: G, done: !0 }
                );
              }),
              U
            );
          })();
        return (function () {
          function U() {
            (this._keys = []),
              (this._values = []),
              (this._cacheKey = d),
              (this._cacheIndex = -2);
          }
          return (
            Object.defineProperty(U.prototype, "size", {
              get: function () {
                return this._keys.length;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (U.prototype.has = function (G) {
              return this._find(G, !1) >= 0;
            }),
            (U.prototype.get = function (G) {
              var S = this._find(G, !1);
              return S >= 0 ? this._values[S] : void 0;
            }),
            (U.prototype.set = function (G, S) {
              var W = this._find(G, !0);
              return (this._values[W] = S), this;
            }),
            (U.prototype.delete = function (G) {
              var S = this._find(G, !1);
              if (S >= 0) {
                for (var W = this._keys.length, Y = S + 1; Y < W; Y++)
                  (this._keys[Y - 1] = this._keys[Y]),
                    (this._values[Y - 1] = this._values[Y]);
                return (
                  this._keys.length--,
                  this._values.length--,
                  G === this._cacheKey &&
                    ((this._cacheKey = d), (this._cacheIndex = -2)),
                  !0
                );
              }
              return !1;
            }),
            (U.prototype.clear = function () {
              (this._keys.length = 0),
                (this._values.length = 0),
                (this._cacheKey = d),
                (this._cacheIndex = -2);
            }),
            (U.prototype.keys = function () {
              return new R(this._keys, this._values, b);
            }),
            (U.prototype.values = function () {
              return new R(this._keys, this._values, B);
            }),
            (U.prototype.entries = function () {
              return new R(this._keys, this._values, ce);
            }),
            (U.prototype["@@iterator"] = function () {
              return this.entries();
            }),
            (U.prototype[s] = function () {
              return this.entries();
            }),
            (U.prototype._find = function (G, S) {
              return (
                this._cacheKey !== G &&
                  (this._cacheIndex = this._keys.indexOf((this._cacheKey = G))),
                this._cacheIndex < 0 &&
                  S &&
                  ((this._cacheIndex = this._keys.length),
                  this._keys.push(G),
                  this._values.push(void 0)),
                this._cacheIndex
              );
            }),
            U
          );
        })();
        function b(U, G) {
          return U;
        }
        function B(U, G) {
          return G;
        }
        function ce(U, G) {
          return [U, G];
        }
      }
      function Vi() {
        return (function () {
          function d() {
            this._map = new p();
          }
          return (
            Object.defineProperty(d.prototype, "size", {
              get: function () {
                return this._map.size;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (d.prototype.has = function (y) {
              return this._map.has(y);
            }),
            (d.prototype.add = function (y) {
              return this._map.set(y, y), this;
            }),
            (d.prototype.delete = function (y) {
              return this._map.delete(y);
            }),
            (d.prototype.clear = function () {
              this._map.clear();
            }),
            (d.prototype.keys = function () {
              return this._map.keys();
            }),
            (d.prototype.values = function () {
              return this._map.values();
            }),
            (d.prototype.entries = function () {
              return this._map.entries();
            }),
            (d.prototype["@@iterator"] = function () {
              return this.keys();
            }),
            (d.prototype[s] = function () {
              return this.keys();
            }),
            d
          );
        })();
      }
      function ki() {
        var d = 16,
          y = l.create(),
          R = b();
        return (function () {
          function S() {
            this._key = b();
          }
          return (
            (S.prototype.has = function (W) {
              var Y = B(W, !1);
              return Y !== void 0 ? l.has(Y, this._key) : !1;
            }),
            (S.prototype.get = function (W) {
              var Y = B(W, !1);
              return Y !== void 0 ? l.get(Y, this._key) : void 0;
            }),
            (S.prototype.set = function (W, Y) {
              var Fe = B(W, !0);
              return (Fe[this._key] = Y), this;
            }),
            (S.prototype.delete = function (W) {
              var Y = B(W, !1);
              return Y !== void 0 ? delete Y[this._key] : !1;
            }),
            (S.prototype.clear = function () {
              this._key = b();
            }),
            S
          );
        })();
        function b() {
          var S;
          do S = "@@WeakMap@@" + G();
          while (l.has(y, S));
          return (y[S] = !0), S;
        }
        function B(S, W) {
          if (!r.call(S, R)) {
            if (!W) return;
            Object.defineProperty(S, R, { value: l.create() });
          }
          return S[R];
        }
        function ce(S, W) {
          for (var Y = 0; Y < W; ++Y) S[Y] = (Math.random() * 255) | 0;
          return S;
        }
        function U(S) {
          return typeof Uint8Array == "function"
            ? typeof crypto != "undefined"
              ? crypto.getRandomValues(new Uint8Array(S))
              : typeof msCrypto != "undefined"
              ? msCrypto.getRandomValues(new Uint8Array(S))
              : ce(new Uint8Array(S), S)
            : ce(new Array(S), S);
        }
        function G() {
          var S = U(d);
          (S[6] = (S[6] & 79) | 64), (S[8] = (S[8] & 191) | 128);
          for (var W = "", Y = 0; Y < d; ++Y) {
            var Fe = S[Y];
            (Y === 4 || Y === 6 || Y === 8) && (W += "-"),
              Fe < 16 && (W += "0"),
              (W += Fe.toString(16).toLowerCase());
          }
          return W;
        }
      }
      function At(d) {
        return (d.__ = void 0), delete d.__, d;
      }
    });
  })(Kr || (Kr = {}));
  function Qe(t, e) {
    if (t === null) throw new Error(e);
    return t;
  }
  function ue(t) {
    throw new Error(t);
  }
  function ei(t, e, r) {
    let i = {};
    for (let n in r) i[n] = t.getUniformLocation(e, r[n]);
    return i;
  }
  var Ht = class {
    drawRay(e, r, i = 1, n = I.red, s = !1) {
      this.drawLine(e, Ie(r, i).plus(e), n, s);
    }
    drawRect(...e) {
      let r,
        i,
        n,
        s = !1;
      e[0] instanceof fe
        ? ((r = e[0].min),
          (i = e[0].max),
          (n = e[1] || I.red),
          (s = e[2] || !1))
        : ((r = e[0]), (i = e[1]), (n = e[2] || I.red), (s = e[3] || !1)),
        this.drawLine(m(r.x, r.y).toVec3(), m(i.x, r.y).toVec3(), n, s),
        this.drawLine(m(i.x, r.y).toVec3(), m(i.x, i.y).toVec3(), n, s),
        this.drawLine(m(i.x, i.y).toVec3(), m(r.x, i.y).toVec3(), n, s),
        this.drawLine(m(r.x, i.y).toVec3(), m(r.x, r.y).toVec3(), n, s);
    }
    drawLines(e, r = I.red, i = !1) {
      for (let n = 0; n < e.length; n++)
        this.drawLine(e[n], e[(n + 1) % e.length], r, i);
    }
    drawCircle(e, r, i = I.red, n = !1) {
      let s = 24;
      for (let a = 0; a < s; a++) {
        let o = g(
            Math.cos((a * 2 * Math.PI) / s),
            Math.sin((a * 2 * Math.PI) / s),
            0
          ),
          h = g(
            Math.cos((((a + 1) % s) * 2 * Math.PI) / s),
            Math.sin((((a + 1) % s) * 2 * Math.PI) / s),
            0
          );
        this.drawLine(o.mul(r).plus(e), h.mul(r).plus(e), i, n);
      }
    }
  };
  var at = class {
      constructor() {
        (this.gl = null),
          (this.width = 0),
          (this.height = 0),
          (this.assets = null),
          (this.renderer = null);
      }
    },
    ti,
    Bh = new (class extends Ht {
      drawLine(e, r, i) {}
    })(),
    Wt = t => (ti = t),
    L = () => ti,
    Ne = () => {
      var t;
      return (t = L()) === null || t === void 0 ? void 0 : t.gl;
    };
  var io = `#version 300 es\r
precision mediump float;\r
\r
in vec3 aPos;\r
in vec4 aColor;\r
in vec2 aUV;\r
in vec3 aNormal;\r
\r
uniform mat4 uTransformM;\r
uniform mat4 uTransformVP;\r
uniform mat4 uTransformMVP;\r
\r
out vec4 vColor;\r
out vec4 vPos;\r
out vec2 vUV;\r
out vec3 vNormal;\r
\r
void main()\r
{\r
    gl_Position = uTransformMVP * vec4(aPos, 1);\r
    vColor = aColor;\r
    vUV = aUV;\r
    vNormal = aNormal;\r
}`,
    no = `#version 300 es\r
precision mediump float;\r
\r
in vec4 vColor;\r
in vec4 vPos;\r
in vec2 vUV;\r
\r
uniform sampler2D uMainTex;\r
uniform vec4 uColor;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    vec4 color = texture(uMainTex, vUV.xy).rgba;\r
    color = color * vColor * uColor;\r
    fragColor = color;\r
}`,
    so = `#version 300 es\r
precision mediump float;\r
\r
in vec4 vColor;\r
in vec4 vPos;\r
in vec2 vUV;\r
in vec3 vNormal;\r
\r
uniform sampler2D uMainTex;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    fragColor = texture(uMainTex, vUV).rgba;\r
}`,
    ao = `#version 300 es\r
precision mediump float;\r
\r
in vec4 vColor;\r
in vec4 vPos;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    fragColor = vColor;\r
}`,
    oo = `#version 300 es\r
precision mediump float;\r
\r
in vec3 aPos;\r
in vec4 aColor;\r
\r
uniform mat4 uTransformM;\r
uniform mat4 uTransformVP;\r
uniform mat4 uTransformMVP;\r
\r
out vec4 vColor;\r
out vec4 vPos;\r
\r
void main()\r
{\r
    gl_Position = uTransformMVP * vec4(aPos, 1);\r
    vColor = aColor;\r
}`,
    ho = `#version 300 es\r
precision mediump float;\r
\r
in vec3 aPos;\r
in vec2 aUV;\r
\r
out vec2 vUV;\r
\r
void main()\r
{\r
    gl_Position = vec4(aPos, 1);\r
    vUV = vec2(aUV.x, vec2(1) - aUV.y);\r
}`,
    lo = `#version 300 es\r
precision mediump float;\r
\r
in vec4 vPos;\r
in vec2 vUV;\r
\r
uniform sampler2D uMainTex;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    fragColor = texture(uMainTex, vUV).rgba;\r
}`,
    Re = {
      defaultVert: io,
      defaultFrag: no,
      blitCopy: so,
      colorFrag: ao,
      colorVert: oo,
      flipVert: ho,
      texFrag: lo,
    };
  var Ae = {
    matM: "uTransformM",
    matM_IT: "uTransformM_IT",
    matMInv: "uTransformMInv",
    matVP: "uTransformVP",
    matMVP: "uTransformMVP",
    matMV_IT: "uTransformMV_IT",
    flipUV: "uFlipUV",
    mainTex: "uMainTex",
    color: "uColor",
  };
  function ri(t) {
    return {
      DefaultShader: new he(
        Re.defaultVert,
        Re.defaultFrag,
        { name: "DefaultShader" },
        t
      ),
      BlitCopy: new he(
        Re.defaultVert,
        Re.blitCopy,
        { name: "BlitCopy", depth: be.Always, blend: O.Disable, zWrite: !1 },
        t
      ),
      FlipTexture: new he(Re.flipVert, Re.blitCopy, {}, t),
      ColoredLine: new he(
        Re.colorVert,
        Re.colorFrag,
        {
          blend: [O.SrcAlpha, O.OneMinusSrcAlpha],
          depth: be.Disable,
          zWrite: !1,
        },
        t
      ),
      ErrorShader: new he(Re.defaultVert, Re.texFrag, { name: "Error" }, t),
    };
  }
  var Yt = class {
    constructor() {
      this.listeners = new Map();
    }
    on(e, r) {
      var i;
      this.listeners.has(e) || this.listeners.set(e, []),
        (i = this.listeners.get(e)) === null || i === void 0 || i.push(r);
    }
    off(e, r) {
      var i, n;
      this.listeners.has(e) &&
        this.listeners.set(
          e,
          (n =
            (i = this.listeners.get(e)) === null || i === void 0
              ? void 0
              : i.filter(s => s !== r)) !== null && n !== void 0
            ? n
            : []
        );
    }
    emit(e, ...r) {
      var i;
      (i = this.listeners.get(e)) === null ||
        i === void 0 ||
        i.forEach(n => n(...r));
    }
    with() {
      return this;
    }
  };
  var Se = class {
      constructor(e) {
        (this.destroyed = !1),
          (this.assetID = Ze.newAssetID(this)),
          (this.name = e || `Asset_${this.assetID}`);
      }
      destroy() {
        (this.destroyed = !0), Ze.destroy(this.assetID);
      }
      valid() {
        return !this.destroyed;
      }
    },
    ot = class extends Se {
      constructor(e = L(), r) {
        super(r);
        (this.initialized = !1), (this.ctx = e);
      }
      tryInit(e = !1) {
        if (this.initialized) return !0;
        this.ctx || (this.ctx = L());
        let r = this.ctx && this.init();
        if (!r && e)
          throw new Error(
            `Failed to init GPU Asset '${this.name}' without global gl context.`
          );
        return (this.initialized = r), r;
      }
    };
  var ii = class {
      constructor() {
        (this.assetsMap = new Map()),
          (this.id = 1),
          (this.eventEmitter = new Yt());
      }
      newAssetID(e) {
        let r = ++this.id;
        return this.assetsMap.set(r, e), (e.assetID = r);
      }
      find(e) {
        if (typeof e == "number") return this.assetsMap.get(e);
        if (typeof e == "string") {
          for (let r of this.assetsMap.values()) if (r.name === e) return r;
        }
      }
      destroy(e) {
        !this.assetsMap.get(e) || this.assetsMap.delete(e);
      }
      destroyAll() {
        for (let [e, r] of this.assetsMap) r.destroy();
        this.assetsMap = new Map();
      }
      findAssetsOfType(e) {
        return Array.from(this.assetsMap.values()).filter(r => r instanceof e);
      }
      on(e, r) {
        return this.eventEmitter.on(e, r);
      }
      off(e, r) {
        return this.eventEmitter.off(e, r);
      }
    },
    Ze = new ii();
  function jt(t) {
    return t;
  }
  var Xt = {
      float: 1,
      vec2: 2,
      vec3: 3,
      vec4: 4,
      mat4: 16,
      int: 1,
      ivec2: 2,
      ivec3: 3,
      ivec4: 4,
    },
    ht = {
      from(t) {
        let e = { elements: [], byteSize: 0, totalSize: 0 },
          r = 0;
        for (let i in t) {
          let n = { key: i, type: t[i], location: r, length: Xt[t[i]] };
          (n.byteLength = n.length * 4),
            (n.offset = e.totalSize),
            (n.byteOffset = e.byteSize),
            (e.totalSize += n.length),
            (e.byteSize += n.byteLength),
            e.elements.push(n),
            (r += t[i] === "mat4" ? 4 : 1);
        }
        return e;
      },
    },
    Ge = class extends Array {
      constructor(e, r, i = !0, n = L()) {
        super(r);
        (this.static = !0),
          (this.Data = null),
          (this.dirty = !1),
          (this.initialized = !1),
          (this.destroyed = !1),
          (this.glBuf = null),
          (this.swapBuffer = null),
          (this.structure = ht.from(e)),
          (this.ctx = n),
          (this.innerBuffer = null),
          this.resize(r, i),
          this.tryInit(!1),
          (this.assetID = Ze.newAssetID(this)),
          (this.name = `GLArrayBuffer_${this.assetID}`);
      }
      get byteLength() {
        return this.length * this.structure.byteSize;
      }
      valid() {
        return !this.destroyed;
      }
      resize(e, r = !0, i = !0) {
        let n = this.innerBuffer;
        if (
          ((this.innerBuffer = new Float32Array(this.structure.totalSize * e)),
          r &&
            n &&
            (n.length > this.innerBuffer.length
              ? this.innerBuffer.set(
                  new Float32Array(n.buffer, 0, this.innerBuffer.length)
                )
              : this.innerBuffer.set(n, 0)),
          (this.length = e),
          i)
        )
          for (let s = 0; s < this.length; s++) {
            let a = {};
            for (let o of this.structure.elements) {
              let h = s * this.structure.byteSize + o.byteOffset;
              switch (o.type) {
                case "float":
                case "vec2":
                case "vec3":
                case "vec4":
                case "mat4":
                  a[o.key] = new Float32Array(
                    this.innerBuffer.buffer,
                    h,
                    Xt[o.type]
                  );
                  break;
                case "int":
                case "ivec2":
                case "ivec3":
                case "ivec4":
                  a[o.key] = new Int32Array(
                    this.innerBuffer.buffer,
                    h,
                    Xt[o.type]
                  );
                  break;
                default:
                  console.warn(`Unknown element type '${o.type}'`);
              }
            }
            this[s] = a;
          }
        this.dirty = !0;
      }
      copyFrom(e, r = 0, i = 0, n = e.length) {
        let s = r * this.structure.byteSize,
          a = this.innerBuffer.buffer.byteLength - s,
          o = i * e.structure.byteSize,
          h = (n - i) * e.structure.byteSize,
          l = Math.min(a, h),
          f = new Uint8Array(this.innerBuffer.buffer, s, l),
          c = new Uint8Array(e.innerBuffer.buffer, o, l);
        f.set(c);
      }
      swapVertices(e, r) {
        this.swapBuffer ||
          (this.swapBuffer = new Float32Array(this.structure.totalSize));
        let i = e * this.structure.byteSize,
          n = r * this.structure.byteSize,
          s = this.swapBuffer,
          a = new Float32Array(
            this.innerBuffer.buffer,
            i,
            this.structure.totalSize
          );
        s.set(a);
        let o = new Float32Array(
          this.innerBuffer.buffer,
          n,
          this.structure.totalSize
        );
        this.innerBuffer.set(o, e * this.structure.totalSize),
          this.innerBuffer.set(s, r * this.structure.totalSize);
      }
      markDirty() {
        this.dirty = !0;
      }
      upload(e = !1) {
        if ((this.tryInit(!0), !this.dirty && !e && this.static)) return !1;
        let r = this.ctx.gl;
        return (
          r.bindBuffer(r.ARRAY_BUFFER, this.glBuf),
          r.bufferData(
            r.ARRAY_BUFFER,
            this.innerBuffer,
            this.static ? r.STATIC_DRAW : r.DYNAMIC_DRAW
          ),
          (this.dirty = !1),
          !0
        );
      }
      bind() {
        this.tryInit(!0);
        let e = this.ctx.gl;
        this.upload(), e.bindBuffer(e.ARRAY_BUFFER, this.glBuf);
      }
      bindVertexArray(e = !1, r) {
        this.tryInit(!0);
        let i = this.ctx.gl;
        this.upload(), i.bindBuffer(i.ARRAY_BUFFER, this.glBuf);
        for (let n of this.structure.elements) {
          let s = r ? r[n.key] || -1 : n.location;
          if (!(s < 0))
            switch (n.type) {
              case "float":
              case "vec2":
              case "vec3":
              case "vec4":
                i.enableVertexAttribArray(s),
                  i.vertexAttribPointer(
                    s,
                    n.length,
                    i.FLOAT,
                    !1,
                    this.structure.byteSize,
                    n.byteOffset
                  ),
                  e && i.vertexAttribDivisor(s, 1);
                break;
              case "int":
              case "ivec2":
              case "ivec3":
              case "ivec4":
                i.enableVertexAttribArray(s),
                  i.vertexAttribIPointer(
                    s,
                    n.length,
                    i.INT,
                    this.structure.byteSize,
                    n.byteOffset
                  ),
                  e && i.vertexAttribDivisor(s, 1);
                break;
              case "mat4":
                i.enableVertexAttribArray(s + 0),
                  i.enableVertexAttribArray(s + 1),
                  i.enableVertexAttribArray(s + 2),
                  i.enableVertexAttribArray(s + 3),
                  i.vertexAttribPointer(
                    s + 0,
                    4,
                    i.FLOAT,
                    !1,
                    this.structure.byteSize,
                    n.byteOffset + 0 * 16
                  ),
                  i.vertexAttribPointer(
                    s + 1,
                    4,
                    i.FLOAT,
                    !1,
                    this.structure.byteSize,
                    n.byteOffset + 1 * 16
                  ),
                  i.vertexAttribPointer(
                    s + 2,
                    4,
                    i.FLOAT,
                    !1,
                    this.structure.byteSize,
                    n.byteOffset + 2 * 16
                  ),
                  i.vertexAttribPointer(
                    s + 3,
                    4,
                    i.FLOAT,
                    !1,
                    this.structure.byteSize,
                    n.byteOffset + 3 * 16
                  ),
                  e &&
                    (i.vertexAttribDivisor(s + 0, 1),
                    i.vertexAttribDivisor(s + 1, 1),
                    i.vertexAttribDivisor(s + 2, 1),
                    i.vertexAttribDivisor(s + 3, 1));
                break;
              default:
                console.warn(`Unknown attribute type '${n.type}'`);
            }
        }
      }
      unbindVertexArray(e = !1, r) {
        this.tryInit(!0);
        let i = this.ctx.gl;
        for (let n of this.structure.elements) {
          let s = r ? r[n.key] || -1 : n.location;
          s < 0 ||
            (n.type === "mat4"
              ? (i.disableVertexAttribArray(s + 0),
                i.disableVertexAttribArray(s + 1),
                i.disableVertexAttribArray(s + 2),
                i.disableVertexAttribArray(s + 3),
                e &&
                  (i.vertexAttribDivisor(s + 0, 0),
                  i.vertexAttribDivisor(s + 1, 0),
                  i.vertexAttribDivisor(s + 2, 0),
                  i.vertexAttribDivisor(s + 3, 0)))
              : (i.disableVertexAttribArray(s),
                e && i.vertexAttribDivisor(s, 0)));
        }
      }
      unbind() {
        this.tryInit(!0);
        let e = this.ctx.gl;
        e.bindBuffer(e.ARRAY_BUFFER, null), e.bindVertexArray(null);
      }
      destroy() {
        if (this.destroyed || !this.initialized) return;
        let e = this.ctx.gl;
        (this.length = 0),
          e.deleteBuffer(this.glBuf),
          (this.destroyed = !0),
          (this.initialized = !1);
      }
      tryInit(e = !1) {
        var r;
        if (this.destroyed)
          throw new Error("Attempt to use destroyed array buffer.");
        if (this.initialized) return !0;
        let i = this.ctx || L();
        if (!i) {
          if (e)
            throw new Error(
              "Failed to init render buffer without a global GL context."
            );
          return !1;
        }
        this.ctx = i;
        let n = i.gl;
        return (
          (this.glBuf =
            (r = n.createBuffer()) !== null && r !== void 0
              ? r
              : ue("Failed to create render buffer")),
          n.bindBuffer(n.ARRAY_BUFFER, this.glBuf),
          n.bufferData(
            n.ARRAY_BUFFER,
            this.byteLength,
            this.static ? n.STATIC_DRAW : n.DYNAMIC_DRAW
          ),
          n.bindBuffer(n.ARRAY_BUFFER, null),
          (this.initialized = !0),
          !0
        );
      }
    };
  var Pe = {
      vert: "vec3",
      color: "vec4",
      normal: "vec3",
      uv: "vec2",
      uv2: "vec2",
    },
    Jh = ht.from(Pe);
  var Je = class extends Se {
    constructor(...e) {
      super("Mesh");
      (this.ctx = null),
        (this.initialized = !1),
        (this.vertexArray = null),
        (this.elementBuffer = null),
        (this.dirty = !0),
        (this.indices = new Uint32Array()),
        e.length === 0
          ? ((this.ctx = L()), (this.vertices = new Ge(Pe, 0, !0, this.ctx)))
          : e.length === 1
          ? e[0] instanceof at
            ? ((this.ctx = e[0]), (this.vertices = new Ge(Pe, 0, !0, this.ctx)))
            : ((this.ctx = L()),
              (this.vertices = new Ge(e[0], 0, !0, this.ctx)))
          : ((this.ctx = e[1] || L()),
            (this.vertices = new Ge(e[0], 0, !0, this.ctx))),
        this.tryInit(!1);
    }
    get verts() {
      return this.getVertexDataArray("vert", g.zero);
    }
    set verts(e) {
      this.setVertexDataArray("vert", e);
    }
    get uvs() {
      return this.getVertexDataArray("uv", m.zero);
    }
    set uvs(e) {
      this.setVertexDataArray("uv", e);
    }
    get colors() {
      return this.getVertexDataArray("color", () => I.black);
    }
    set colors(e) {
      this.setVertexDataArray("color", e);
    }
    get normals() {
      return this.getVertexDataArray("uv2", g.zero);
    }
    set normals(e) {
      this.setVertexDataArray("normal", e);
    }
    get uv2() {
      return this.getVertexDataArray("uv2", m.zero);
    }
    set uv2(e) {
      this.setVertexDataArray("uv2", e);
    }
    get triangles() {
      return Array.from(this.indices);
    }
    set triangles(e) {
      e.length > this.indices.length &&
        (this.indices = new Uint32Array(e.length)),
        this.indices.set(e);
    }
    getVertexDataArray(e, r) {
      return this.vertices.map(i => r().set(i[e]));
    }
    setVertexDataArray(e, r) {
      let i = this.vertices;
      r.length >= this.vertices.length && this.vertices.resize(r.length),
        r.forEach((n, s) => this.vertices[s][e].set(n));
    }
    resize(e, r, i = !1) {
      this.vertices.resize(e, i);
      let n = this.indices;
      (this.indices = new Uint32Array(r)),
        i &&
          (r < n.length && (n = new Uint32Array(n.buffer, 0, r)),
          this.indices.set(n, 0)),
        (this.dirty = !0);
    }
    update(e = !1) {
      (this.dirty = !0), this.vertices.markDirty(), e && this.upload();
    }
    upload() {
      if ((this.tryInit(!0), !this.dirty)) return !1;
      let e = this.ctx.gl;
      return (
        this.vertices.upload(),
        e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.elementBuffer),
        e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indices, e.STATIC_DRAW),
        (this.dirty = !1),
        !0
      );
    }
    bind() {
      this.upload();
      let e = this.ctx.gl;
      return (
        e.bindVertexArray(this.vertexArray),
        e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.elementBuffer),
        this.indices.length
      );
    }
    unbind() {
      this.tryInit(!0);
      let e = this.ctx.gl;
      e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null), e.bindVertexArray(null);
    }
    calculateNormals(e = 0) {
      if (this.triangles.length % 3 != 0) throw new Error("Invalid triangles.");
      for (let r = 0; r < this.triangles.length; r += 3) {
        let i = this.vertices[this.triangles[r + 0]].vert,
          n = this.vertices[this.triangles[r + 1]].vert,
          s = this.vertices[this.triangles[r + 2]].vert,
          a = He(n, i),
          o = He(s, i),
          h = Jr(a, o).normalize();
        g.plus(
          this.vertices[this.triangles[r + 0]].normal,
          this.vertices[this.triangles[r + 0]].normal,
          h
        ),
          g.plus(
            this.vertices[this.triangles[r + 1]].normal,
            this.vertices[this.triangles[r + 1]].normal,
            h
          ),
          g.plus(
            this.vertices[this.triangles[r + 2]].normal,
            this.vertices[this.triangles[r + 2]].normal,
            h
          );
      }
      for (let r = 0; r < this.vertices.length; r++)
        g.normalize(this.vertices[r].normal, this.vertices[r].normal);
    }
    destroy() {
      if ((super.destroy(), this.destroyed)) return;
      this.vertices.destroy();
      let e = this.ctx.gl;
      e.deleteBuffer(this.elementBuffer),
        e.deleteVertexArray(this.vertexArray),
        (this.destroyed = !0),
        (this.initialized = !1);
    }
    tryInit(e = !1) {
      var r, i;
      if (this.initialized) return !0;
      if (this.destroyed) throw new Error("Attempt to use destroyed mesh");
      if (((this.ctx = this.ctx || L()), !this.ctx)) {
        if (e) throw new Error("Failed to init mesh without global GL context");
        return !1;
      }
      let n = this.ctx.gl;
      return (
        (this.elementBuffer =
          (r = n.createBuffer()) !== null && r !== void 0
            ? r
            : ue("Failed to create element buffer object.")),
        (this.vertexArray =
          (i = n.createVertexArray()) !== null && i !== void 0
            ? i
            : ue("Failed to create vertex array object.")),
        n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, this.elementBuffer),
        n.bindVertexArray(this.vertexArray),
        this.vertices.bindVertexArray(),
        n.bindVertexArray(null),
        (this.initialized = !0),
        !0
      );
    }
  };
  var be;
  (function (t) {
    (t[(t.Disable = -1)] = "Disable"),
      (t[(t.Always = WebGL2RenderingContext.ALWAYS)] = "Always"),
      (t[(t.Never = WebGL2RenderingContext.NEVER)] = "Never"),
      (t[(t.Less = WebGL2RenderingContext.LESS)] = "Less"),
      (t[(t.Equal = WebGL2RenderingContext.EQUAL)] = "Equal"),
      (t[(t.LEqual = WebGL2RenderingContext.LEQUAL)] = "LEqual"),
      (t[(t.Greater = WebGL2RenderingContext.GREATER)] = "Greater"),
      (t[(t.NotEqual = WebGL2RenderingContext.NOTEQUAL)] = "NotEqual"),
      (t[(t.GEqual = WebGL2RenderingContext.GEQUAL)] = "GEqual");
  })(be || (be = {}));
  var O;
  (function (t) {
    (t[(t.Disable = -1)] = "Disable"),
      (t[(t.Zero = WebGL2RenderingContext.ZERO)] = "Zero"),
      (t[(t.One = WebGL2RenderingContext.ONE)] = "One"),
      (t[(t.SrcColor = WebGL2RenderingContext.SRC_COLOR)] = "SrcColor"),
      (t[(t.OneMinusSrcColor = WebGL2RenderingContext.ONE_MINUS_SRC_COLOR)] =
        "OneMinusSrcColor"),
      (t[(t.DstColor = WebGL2RenderingContext.DST_COLOR)] = "DstColor"),
      (t[(t.OneMinusDstColor = WebGL2RenderingContext.ONE_MINUS_DST_COLOR)] =
        "OneMinusDstColor"),
      (t[(t.SrcAlpha = WebGL2RenderingContext.SRC_ALPHA)] = "SrcAlpha"),
      (t[(t.OneMinusSrcAlpha = WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA)] =
        "OneMinusSrcAlpha"),
      (t[(t.DstAlpha = WebGL2RenderingContext.DST_ALPHA)] = "DstAlpha"),
      (t[(t.OneMinusDstAlpha = WebGL2RenderingContext.ONE_MINUS_DST_ALPHA)] =
        "OneMinusDstAlpha");
  })(O || (O = {}));
  var Ke;
  (function (t) {
    (t[(t.Disable = -1)] = "Disable"),
      (t[(t.Back = WebGL2RenderingContext.BACK)] = "Back"),
      (t[(t.Front = WebGL2RenderingContext.FRONT)] = "Front"),
      (t[(t.Both = WebGL2RenderingContext.FRONT_AND_BACK)] = "Both");
  })(Ke || (Ke = {}));
  var ni = {
      vert: "aPos",
      color: "aColor",
      uv: "aUV",
      uv2: "aUV2",
      normal: "aNormal",
    },
    he = class extends Se {
      constructor(e, r, i = {}, n = Ne()) {
        super(i.name);
        (this.attributes = {}),
          (this.initialized = !1),
          (this.gl = null),
          (this.program = null),
          (this.vertexShader = null),
          (this.fragmentShader = null),
          (this.pipelineStates = {}),
          (this.builtinUniformLocations = null),
          (this._compiled = !1),
          i.name || (this.name = `Shader_${this.assetID}`),
          (this.vertexShaderSource = e),
          (this.fragmentShaderSouce = r),
          (this.options = i),
          (this.gl = n),
          (this.vertexStruct = ht.from(this.options.vertexStructure || Pe)),
          (this.attributeNames = Object.assign(
            Object.assign({}, ni),
            i.attributes
          )),
          this.setPipelineStateInternal(this.options),
          this.tryInit();
      }
      get compiled() {
        return this._compiled;
      }
      uniformLocation(e) {
        return this.tryInit(!0), this.gl.getUniformLocation(this.program, e);
      }
      use() {
        this.tryInit(!0), this.gl.useProgram(this.program);
      }
      setupBuiltinUniform(e) {
        this.tryInit(!0);
        let r = this.gl;
        this.builtinUniformLocations.matM &&
          r.uniformMatrix4fv(
            this.builtinUniformLocations.matM,
            !1,
            e.matM.asMut()
          ),
          this.builtinUniformLocations.matVP &&
            r.uniformMatrix4fv(
              this.builtinUniformLocations.matVP,
              !1,
              e.matVP.asMut()
            ),
          this.builtinUniformLocations.matMVP &&
            r.uniformMatrix4fv(
              this.builtinUniformLocations.matMVP,
              !1,
              e.matMVP.asMut()
            ),
          this.builtinUniformLocations.matM_IT &&
            r.uniformMatrix4fv(
              this.builtinUniformLocations.matM_IT,
              !1,
              e.matM_IT.asMut()
            ),
          this.builtinUniformLocations.matMV_IT &&
            r.uniformMatrix4fv(
              this.builtinUniformLocations.matMV_IT,
              !1,
              e.matMV_IT.asMut()
            );
      }
      clone() {
        return new he(
          this.vertexShaderSource,
          this.fragmentShaderSouce,
          this.options
        );
      }
      setPipelineStateInternal(e) {
        let r = !1,
          i = [O.One, O.Zero],
          n = [O.One, O.OneMinusSrcAlpha];
        typeof e.blend == "number" && e.blend !== O.Disable
          ? ((r = !0), (i = [e.blend, e.blend]), (n = [e.blend, e.blend]))
          : e.blend instanceof Array && ((r = !0), (i = e.blend)),
          e.blendRGB &&
            ((r = e.blend !== !1 && e.blend !== O.Disable), (i = e.blendRGB)),
          e.blendAlpha &&
            ((r = e.blend !== !1 && e.blend !== O.Disable), (n = e.blendAlpha)),
          (this.pipelineStates = {
            depth: e.depth || be.Less,
            blend: r,
            blendRGB: i,
            blendAlpha: n,
            zWrite: e.zWrite !== !1,
            cull: e.cull || Ke.Back,
          });
      }
      _internal() {
        return this.tryInit(!0), { options: this.options };
      }
      tryInit(e = !1) {
        if (this.initialized) return !0;
        let r = this.gl || Ne();
        if (!r)
          return e
            ? ue("Failed to init shader without a global GL context")
            : !1;
        (this.gl = r),
          (this.program = Qe(
            r.createProgram(),
            "Failed to create shader program"
          )),
          (this.vertexShader = Qe(
            r.createShader(r.VERTEX_SHADER),
            "Failed to create vertex shader"
          )),
          (this.fragmentShader = Qe(
            r.createShader(r.FRAGMENT_SHADER),
            "Failed to create fragment shader"
          )),
          this.compile(),
          r.useProgram(this.program);
        let i = Object.assign(Object.assign({}, ni), this.options.attributes);
        this.attributes = {};
        for (let n in i)
          this.attributes[n] = r.getAttribLocation(this.program, i[n]);
        return (
          (this.builtinUniformLocations = ei(r, this.program, Ae)),
          (this.initialized = !0),
          !0
        );
      }
      compile() {
        if (
          (this.gl.shaderSource(this.vertexShader, this.vertexShaderSource),
          this.gl.compileShader(this.vertexShader),
          !this.gl.getShaderParameter(
            this.vertexShader,
            this.gl.COMPILE_STATUS
          ))
        )
          throw new Error(
            `Failed to compile vertex shader:\r
` + this.gl.getShaderInfoLog(this.vertexShader)
          );
        if (
          (this.gl.shaderSource(this.fragmentShader, this.fragmentShaderSouce),
          this.gl.compileShader(this.fragmentShader),
          !this.gl.getShaderParameter(
            this.fragmentShader,
            this.gl.COMPILE_STATUS
          ))
        )
          throw new Error(
            `Failed to compile fragment shader:\r
` + this.gl.getShaderInfoLog(this.fragmentShader)
          );
        this.gl.attachShader(this.program, this.vertexShader),
          this.gl.attachShader(this.program, this.fragmentShader);
        for (let e of this.vertexStruct.elements)
          this.attributeNames[e.key] &&
            this.gl.bindAttribLocation(
              this.program,
              e.location,
              this.attributeNames[e.key]
            );
        if (
          (this.gl.linkProgram(this.program),
          !this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS))
        )
          throw new Error(
            `Failed to link shader program:\r
` + this.gl.getProgramInfoLog(this.program)
          );
      }
    };
  var _;
  (function (t) {
    (t[(t.RGB = WebGL2RenderingContext.RGB)] = "RGB"),
      (t[(t.RGBA = WebGL2RenderingContext.RGBA)] = "RGBA"),
      (t[(t.LUMINANCE_ALPHA = WebGL2RenderingContext.LUMINANCE_ALPHA)] =
        "LUMINANCE_ALPHA"),
      (t[(t.LUMINANCE = WebGL2RenderingContext.LUMINANCE)] = "LUMINANCE"),
      (t[(t.ALPHA = WebGL2RenderingContext.ALPHA)] = "ALPHA"),
      (t[(t.R8 = WebGL2RenderingContext.R8)] = "R8"),
      (t[(t.R16F = WebGL2RenderingContext.R16F)] = "R16F"),
      (t[(t.R32F = WebGL2RenderingContext.R32F)] = "R32F"),
      (t[(t.R8UI = WebGL2RenderingContext.R8UI)] = "R8UI"),
      (t[(t.RG8 = WebGL2RenderingContext.RG8)] = "RG8"),
      (t[(t.RG16F = WebGL2RenderingContext.RG16F)] = "RG16F"),
      (t[(t.RG32F = WebGL2RenderingContext.RG32F)] = "RG32F"),
      (t[(t.RG8UI = WebGL2RenderingContext.RG8UI)] = "RG8UI"),
      (t[(t.RGB8 = WebGL2RenderingContext.RGB8)] = "RGB8"),
      (t[(t.SRGB8 = WebGL2RenderingContext.SRGB8)] = "SRGB8"),
      (t[(t.RGB565 = WebGL2RenderingContext.RGB565)] = "RGB565"),
      (t[(t.R11F_G11F_B10F = WebGL2RenderingContext.R11F_G11F_B10F)] =
        "R11F_G11F_B10F"),
      (t[(t.RGB9_E5 = WebGL2RenderingContext.RGB9_E5)] = "RGB9_E5"),
      (t[(t.RGB16F = WebGL2RenderingContext.RGB16F)] = "RGB16F"),
      (t[(t.RGB32F = WebGL2RenderingContext.RGB32F)] = "RGB32F"),
      (t[(t.RGB8UI = WebGL2RenderingContext.RGB8UI)] = "RGB8UI"),
      (t[(t.RGBA8 = WebGL2RenderingContext.RGBA8)] = "RGBA8"),
      (t[(t.SRGB8_ALPHA8 = WebGL2RenderingContext.SRGB8_ALPHA8)] =
        "SRGB8_ALPHA8"),
      (t[(t.RGB5_A1 = WebGL2RenderingContext.RGB5_A1)] = "RGB5_A1"),
      (t[(t.RGB10_A2 = WebGL2RenderingContext.RGB10_A2)] = "RGB10_A2"),
      (t[(t.RGBA4 = WebGL2RenderingContext.RGBA4)] = "RGBA4"),
      (t[(t.RGBA16F = WebGL2RenderingContext.RGBA16F)] = "RGBA16F"),
      (t[(t.RGBA32F = WebGL2RenderingContext.RGBA32F)] = "RGBA32F"),
      (t[(t.RGBA8UI = WebGL2RenderingContext.RGBA8UI)] = "RGBA8UI"),
      (t[(t.DEPTH_COMPONENT = WebGL2RenderingContext.DEPTH_COMPONENT)] =
        "DEPTH_COMPONENT"),
      (t[(t.DEPTH_STENCIL = WebGL2RenderingContext.DEPTH_STENCIL)] =
        "DEPTH_STENCIL"),
      (t[(t.DEPTH24_STENCIL8 = WebGL2RenderingContext.DEPTH24_STENCIL8)] =
        "DEPTH24_STENCIL8"),
      (t[(t.DEPTH32F_STENCIL8 = WebGL2RenderingContext.DEPTH32F_STENCIL8)] =
        "DEPTH32F_STENCIL8"),
      (t[(t.DEPTH_COMPONENT24 = WebGL2RenderingContext.DEPTH_COMPONENT24)] =
        "DEPTH_COMPONENT24"),
      (t[(t.DEPTH_COMPONENT32F = WebGL2RenderingContext.DEPTH_COMPONENT32F)] =
        "DEPTH_COMPONENT32F");
  })(_ || (_ = {}));
  function qt(t, e) {
    return {
      [_.RGB]: [t.RGB, t.RGB, t.UNSIGNED_BYTE],
      [_.RGBA]: [t.RGBA, t.RGBA, t.UNSIGNED_BYTE],
      [_.LUMINANCE_ALPHA]: [
        t.LUMINANCE_ALPHA,
        t.LUMINANCE_ALPHA,
        t.UNSIGNED_BYTE,
      ],
      [_.LUMINANCE]: [t.LUMINANCE, t.LUMINANCE, t.UNSIGNED_BYTE],
      [_.ALPHA]: [t.ALPHA, t.ALPHA, t.UNSIGNED_BYTE],
      [_.R8]: [t.R8, t.RED, t.UNSIGNED_BYTE],
      [_.R16F]: [t.R16F, t.RED, t.HALF_FLOAT],
      [_.R32F]: [t.R32F, t.RED, t.FLOAT],
      [_.R8UI]: [t.R8UI, t.RED_INTEGER, t.UNSIGNED_BYTE],
      [_.RG8]: [t.RG8, t.RG, t.UNSIGNED_BYTE],
      [_.RG16F]: [t.RG16F, t.RG, t.HALF_FLOAT],
      [_.RG32F]: [t.RG32F, t.RG, t.FLOAT],
      [_.RG8UI]: [t.RG8UI, t.RG_INTEGER, t.UNSIGNED_BYTE],
      [_.RGB8]: [t.RGB8, t.RGB, t.UNSIGNED_BYTE],
      [_.SRGB8]: [t.SRGB8, t.RGB, t.UNSIGNED_BYTE],
      [_.RGB565]: [t.RGB565, t.RGB, t.UNSIGNED_BYTE],
      [_.R11F_G11F_B10F]: [
        t.R11F_G11F_B10F,
        t.RGB,
        t.UNSIGNED_INT_10F_11F_11F_REV,
      ],
      [_.RGB9_E5]: [t.RGB9_E5, t.RGB, t.HALF_FLOAT],
      [_.RGB16F]: [t.RGB16F, t.RGB, t.HALF_FLOAT],
      [_.RGB32F]: [t.RGB32F, t.RGB, t.FLOAT],
      [_.RGB8UI]: [t.RGB8UI, t.RGB_INTEGER, t.UNSIGNED_BYTE],
      [_.RGBA8]: [t.RGBA8, t.RGBA, t.UNSIGNED_BYTE],
      [_.SRGB8_ALPHA8]: [t.SRGB8_ALPHA8, t.RGBA, t.UNSIGNED_BYTE],
      [_.RGB5_A1]: [t.RGB5_A1, t.RGBA, t.UNSIGNED_BYTE],
      [_.RGB10_A2]: [t.RGB10_A2, t.RGBA, t.UNSIGNED_INT_2_10_10_10_REV],
      [_.RGBA4]: [t.RGBA4, t.RGBA, t.UNSIGNED_BYTE],
      [_.RGBA16F]: [t.RGBA16F, t.RGBA, t.HALF_FLOAT],
      [_.RGBA32F]: [t.RGBA32F, t.RGBA, t.FLOAT],
      [_.RGBA8UI]: [t.RGBA8UI, t.RGBA_INTEGER, t.UNSIGNED_BYTE],
      [_.DEPTH_COMPONENT]: [
        t.DEPTH_COMPONENT,
        t.DEPTH_COMPONENT,
        t.UNSIGNED_INT,
      ],
      [_.DEPTH_STENCIL]: [t.DEPTH_STENCIL, t.DEPTH_COMPONENT, t.UNSIGNED_INT],
      [_.DEPTH_COMPONENT24]: [
        t.DEPTH_COMPONENT24,
        t.DEPTH_COMPONENT,
        t.UNSIGNED_INT,
      ],
      [_.DEPTH_COMPONENT32F]: [
        t.DEPTH_COMPONENT32F,
        t.DEPTH_COMPONENT,
        t.FLOAT,
      ],
    }[e];
  }
  var de;
  (function (t) {
    (t[(t.Stretch = 1)] = "Stretch"),
      (t[(t.Cover = 2)] = "Cover"),
      (t[(t.Contain = 3)] = "Contain"),
      (t[(t.KeepLower = 4)] = "KeepLower"),
      (t[(t.KeepHigher = 5)] = "KeepHigher"),
      (t[(t.Center = 6)] = "Center");
  })(de || (de = {}));
  function $t(t, e, r) {
    let i = new fe(m.zero(), t),
      n = new fe(m.zero(), e);
    if (r === de.Contain) {
      let s = t.x / t.y,
        a = e.x / e.y;
      if (s > a) {
        let o = e.y - t.y * (e.x / t.x);
        (n.min.y += o / 2), (n.max.y -= o / 2);
      } else {
        let o = e.x - t.x * (e.y / t.y);
        (n.min.x += o / 2), (n.max.x -= o / 2);
      }
    } else if (r === de.Cover) {
      let s = t.x / t.y,
        a = e.x / e.y;
      if (s > a) {
        let o = t.x - e.x * (t.y / e.y);
        (i.min.x += o / 2), (i.max.x -= o / 2);
      } else {
        let o = t.y - e.y * (t.x / e.x);
        (i.min.y += o / 2), (i.max.y -= o / 2);
      }
    } else {
      if (t.x < e.x)
        switch (r) {
          case de.Center:
            let s = e.x - t.x;
            (n.min.x += s / 2), (n.max.x -= s / 2);
            break;
          case de.KeepHigher:
            n.min.x = e.x - t.x;
            break;
          case de.KeepLower:
            n.max.x = t.x;
            break;
        }
      else if (t.x > e.x)
        switch (r) {
          case de.Center:
            let s = t.x - e.x;
            (i.min.x += s / 2), (i.max.x -= s / 2);
            break;
          case de.KeepHigher:
            i.min.x = t.x - e.x;
            break;
          case de.KeepLower:
            i.max.x = e.x;
            break;
        }
      if (t.y < e.y)
        switch (r) {
          case de.Center:
            let s = e.y - t.y;
            (n.min.y += s / 2), (n.max.y -= s / 2);
            break;
          case de.KeepHigher:
            n.min.y = e.y - t.y;
            break;
          case de.KeepLower:
            n.max.y = t.y;
            break;
        }
      else if (t.y > e.y)
        switch (r) {
          case de.Center:
            let s = t.y - e.y;
            (i.min.y += s / 2), (i.max.y -= s / 2);
            break;
          case de.KeepHigher:
            i.min.y = t.y - e.y;
            break;
          case de.KeepLower:
            i.max.y = e.y;
            break;
        }
    }
    return [i, n];
  }
  var vl = {
      canvasOutput: { tex: null, attachPoint: WebGL2RenderingContext.BACK },
      fromRenderTexture: t => ({ tex: t.glTex() }),
    },
    si = class {
      get name() {
        return "";
      }
      get assetID() {
        return -1;
      }
      get width() {
        return L().width;
      }
      get height() {
        return L().height;
      }
      get size() {
        return L().renderer.canvasSize;
      }
      bind() {
        let e = L().gl;
        e.bindFramebuffer(e.FRAMEBUFFER, null),
          e.viewport(0, 0, this.width, this.height);
      }
      destroy() {}
    },
    le = class extends ot {
      constructor(e = 0, r = 0, i = L()) {
        super(i);
        (this.frameBuffer = null),
          (this._colorAttachments = []),
          (this._depthAttachment = null),
          (this.activeBuffers = []),
          (this.dirty = !0),
          (this.size = m(Math.floor(e), Math.floor(r))),
          this.tryInit(!1);
      }
      get width() {
        return this.size.x;
      }
      get height() {
        return this.size.y;
      }
      get colorAttachments() {
        return this._colorAttachments;
      }
      get depthAttachment() {
        return this._depthAttachment;
      }
      glFBO() {
        return this.tryInit(!0), this.frameBuffer;
      }
      addColorAttachment(e, r = this._colorAttachments.length) {
        (e.width !== this.size.x || e.height !== this.size.y) &&
          console.warn(
            `Color attachment size [${e.width}, ${e.height}] missmatch with framebuffer.`
          ),
          (this._colorAttachments[r] = e),
          (this.dirty = !0);
      }
      setDepthAttachment(e) {
        (e.width !== this.size.x || e.height !== this.size.y) &&
          console.warn(
            `Depth attachment size [${e.width}, ${e.height}] missmatch with framebuffer.`
          ),
          (this._depthAttachment = e),
          (this.dirty = !0);
      }
      reset(e = this.width, r = this.height) {
        (this.size.x = e),
          (this.size.y = r),
          (this._colorAttachments = []),
          (this._depthAttachment = null),
          (this.dirty = !0);
      }
      init() {
        var e;
        let r = this.ctx.gl;
        return (
          (this.frameBuffer =
            (e = r.createFramebuffer()) !== null && e !== void 0
              ? e
              : ue("Failed to create frame buffer object")),
          !0
        );
      }
      bind() {
        this.tryInit(!0);
        let e = this.ctx.gl;
        (this.activeBuffers = []),
          e.bindFramebuffer(e.FRAMEBUFFER, this.frameBuffer);
        for (let r = 0; r < this._colorAttachments.length; r++)
          this._colorAttachments[r]
            ? (this._colorAttachments[r].bindFramebuffer(r),
              this.activeBuffers.push(e.COLOR_ATTACHMENT0 + r))
            : e.framebufferRenderbuffer(
                e.FRAMEBUFFER,
                e.COLOR_ATTACHMENT0 + r,
                e.RENDERBUFFER,
                null
              );
        this._depthAttachment
          ? this._depthAttachment.bindFramebuffer()
          : e.framebufferRenderbuffer(
              e.FRAMEBUFFER,
              e.DEPTH_ATTACHMENT,
              e.RENDERBUFFER,
              null
            ),
          e.viewport(0, 0, this.width, this.height),
          e.drawBuffers(this.activeBuffers);
      }
      destroy() {
        super.destroy(), this.ctx.gl.deleteFramebuffer(this.frameBuffer);
      }
    };
  le.CanvasBuffer = Object.freeze(new si());
  var pe;
  (function (t) {
    (t[(t.Linear = WebGL2RenderingContext.LINEAR)] = "Linear"),
      (t[(t.Nearest = WebGL2RenderingContext.NEAREST)] = "Nearest");
  })(pe || (pe = {}));
  var ve;
  (function (t) {
    (t[(t.Repeat = WebGL2RenderingContext.REPEAT)] = "Repeat"),
      (t[(t.Clamp = WebGL2RenderingContext.CLAMP_TO_EDGE)] = "Clamp"),
      (t[(t.Mirror = WebGL2RenderingContext.MIRRORED_REPEAT)] = "Mirror");
  })(ve || (ve = {}));
  var Ve;
  (function (t) {
    (t[(t.Discard = 0)] = "Discard"),
      (t[(t.Stretch = 1)] = "Stretch"),
      (t[(t.Cover = 2)] = "Cover"),
      (t[(t.Contain = 3)] = "Contain"),
      (t[(t.KeepLower = 4)] = "KeepLower"),
      (t[(t.KeepHigher = 5)] = "KeepHigher"),
      (t[(t.Center = 6)] = "Center");
  })(Ve || (Ve = {}));
  var Ye = class extends Se {
      constructor(e, r, i = _.RGBA, n = pe.Linear, s = L()) {
        super();
        (this.autoMipmap = !0),
          (this.wrapMode = ve.Repeat),
          (this._glTex = null),
          (this.initialized = !1),
          (this.created = !1),
          (this.name = `Texture_${this.assetID}`),
          (this.ctx = s),
          (this.format = i),
          (this.width = e),
          (this.height = r),
          (this.filterMode = n),
          this.tryInit(!1);
      }
      get size() {
        return m(this.width, this.height);
      }
      glTex() {
        return this.create(), this._glTex;
      }
      bind(e) {
        this.create();
        let r = this.ctx.gl;
        r.activeTexture(r.TEXTURE0 + e),
          r.bindTexture(r.TEXTURE_2D, this._glTex);
      }
      unbind(e) {
        this.create();
        let r = this.ctx.gl;
        r.activeTexture(r.TEXTURE0 + e), r.bindTexture(r.TEXTURE_2D, null);
      }
      destroy() {
        if (!this.initialized || this.destroyed) return;
        this.ctx.gl.deleteTexture(this._glTex), super.destroy();
      }
      resize(e, r, i = Ve.Discard) {
        this.tryInit(!0);
        let n = this.ctx.gl,
          s = Ye.wrapGlTex(
            this._glTex,
            this.width,
            this.height,
            this.format,
            this.filterMode,
            this.ctx
          ),
          a = new ne(e, r, !1, this.format, this.filterMode, this.ctx);
        (a.wrapMode = this.wrapMode),
          (a.autoMipmap = this.autoMipmap),
          a.create(),
          a.updateParameters();
        let o = this.size;
        switch (((this.width = e), (this.height = r), i)) {
          case Ve.Discard:
            break;
          default:
            let [h, l] = $t(o, a.size, i);
            this.ctx.renderer.blit(
              s,
              a,
              this.ctx.assets.materials.blitCopy,
              h,
              l
            );
            break;
        }
        return (
          this.autoMipmap && a.generateMipmap(),
          (this._glTex = a._glTex),
          n.deleteTexture(s._glTex),
          this
        );
      }
      generateMipmap() {
        this.create();
        let e = this.ctx.gl;
        e.bindTexture(e.TEXTURE_2D, this._glTex),
          e.generateMipmap(e.TEXTURE_2D);
      }
      updateParameters() {
        this.create();
        let e = this.ctx.gl;
        e.bindTexture(e.TEXTURE_2D, this._glTex),
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, this.filterMode),
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, this.filterMode),
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, this.wrapMode),
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, this.wrapMode);
      }
      create() {
        if (this.created) return;
        this.tryInit(!0);
        let e = this.ctx.gl;
        e.bindTexture(e.TEXTURE_2D, this._glTex);
        let [r, i, n] = qt(e, this.format);
        e.texImage2D(
          e.TEXTURE_2D,
          0,
          r,
          this.width,
          this.height,
          0,
          i,
          n,
          null
        ),
          (this.created = !0),
          this.updateParameters(),
          e.bindTexture(e.TEXTURE_2D, null);
      }
      setData(e) {
        this.create();
        let r = this.ctx.gl;
        r.bindTexture(r.TEXTURE_2D, this._glTex),
          co(
            this.ctx,
            this._glTex,
            e,
            this.width,
            this.height,
            this.format,
            this.filterMode,
            this.wrapMode,
            0
          );
      }
      tryInit(e = !1) {
        var r;
        if (this.initialized) return !0;
        let i = this.ctx || L();
        if (!i) {
          if (e)
            throw new Error(
              "Failed to initialize texture without a global GL context"
            );
          return !1;
        }
        let n = i.gl;
        return (
          (this._glTex =
            (r = n.createTexture()) !== null && r !== void 0
              ? r
              : ue("Failed to create texture.")),
          (this.initialized = !0),
          !0
        );
      }
      static wrapGlTex(e, r, i, n = _.RGBA, s = pe.Linear, a = L()) {
        var o = new Ye(r, i, n, s, a);
        return (o._glTex = e), (o.initialized = !0), (o.created = !0), o;
      }
    },
    _e = class extends Ye {
      constructor(e = 0, r = 0, i = _.RGBA, n = pe.Linear, s = L()) {
        super(e, r, i, n, s);
      }
      setData(e) {
        e.width !== void 0 &&
          e.height !== void 0 &&
          ((e = e), (this.width = e.width), (this.height = e.height)),
          super.setData(e);
      }
      clone() {
        this.created || this.create();
        let e = new ne(
          this.width,
          this.height,
          !1,
          this.format,
          this.filterMode,
          this.ctx
        );
        this.ctx.renderer.blit(this, e);
        let r = new _e(
          this.width,
          this.height,
          this.format,
          this.filterMode,
          this.ctx
        );
        return (
          (r._glTex = e.glTex()), (r.initialized = !0), (r.created = !0), r
        );
      }
    },
    Mt = class extends Ye {
      constructor(e, r, i = L()) {
        super(e, r, _.DEPTH_COMPONENT32F, pe.Nearest, i);
        this.autoMipmap = !1;
      }
      bindFramebuffer() {
        this.create();
        let e = this.ctx.gl;
        e.framebufferTexture2D(
          e.FRAMEBUFFER,
          e.DEPTH_COMPONENT32F,
          e.TEXTURE_2D,
          this._glTex,
          0
        );
      }
    },
    ne = class extends Ye {
      constructor(e, r, i = !1, n = _.RGBA, s = pe.Linear, a = L()) {
        super(e, r, n, s, a);
        (this.depthTexture = null), i && (this.depthTexture = new Mt(e, r, a));
      }
      setData(e) {
        super.setData(e);
      }
      destroy() {
        var e;
        !this.initialized ||
          this.destroyed ||
          ((e = this.depthTexture) === null || e === void 0 || e.destroy(),
          super.destroy());
      }
      bindFramebuffer(e) {
        this.create();
        let r = this.ctx.gl;
        r.framebufferTexture2D(
          r.FRAMEBUFFER,
          r.COLOR_ATTACHMENT0 + e,
          r.TEXTURE_2D,
          this._glTex,
          0
        );
      }
      createFramebuffer() {
        this.create();
        let e = new le(this.width, this.height);
        return e.addColorAttachment(this, 0), e;
      }
    };
  function co(t, e, r, i, n, s, a, o, h) {
    var l, f;
    let c = t.gl,
      p = t.renderer,
      u =
        (l = c.createTexture()) !== null && l !== void 0
          ? l
          : ue("Failed to create texture."),
      [x, M, v] = qt(c, s);
    c.bindTexture(c.TEXTURE_2D, u),
      c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.NEAREST),
      c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.NEAREST),
      c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, o),
      c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, o),
      r.width !== void 0 && r.height !== void 0
        ? ((r = r), c.texImage2D(c.TEXTURE_2D, h, x, M, v, r))
        : ((r = r), c.texImage2D(c.TEXTURE_2D, h, x, i, n, 0, M, v, r));
    let E =
      (f = c.createFramebuffer()) !== null && f !== void 0
        ? f
        : ue("Failed to create frame buffer");
    c.bindFramebuffer(c.FRAMEBUFFER, E),
      c.framebufferTexture2D(
        c.FRAMEBUFFER,
        c.COLOR_ATTACHMENT0,
        c.TEXTURE_2D,
        e,
        0
      ),
      c.viewport(0, 0, i, n),
      c.drawBuffers([c.COLOR_ATTACHMENT0]),
      c.disable(c.CULL_FACE);
    let F = t.assets.shaders.FlipTexture;
    F.use(),
      c.activeTexture(c.TEXTURE0),
      c.bindTexture(c.TEXTURE_2D, u),
      c.uniform1i(F.uniformLocation(Ae.mainTex), 0);
    let D = t.assets.meshes.screenQuad;
    D.bind(),
      c.drawElements(c.TRIANGLE_STRIP, D.indices.length, c.UNSIGNED_INT, 0),
      c.activeTexture(c.TEXTURE0),
      c.bindTexture(c.TEXTURE_2D, null),
      c.deleteFramebuffer(E),
      c.bindFramebuffer(c.FRAMEBUFFER, null),
      c.deleteTexture(u);
  }
  var ai = function (t, e, r, i) {
      var n = arguments.length,
        s =
          n < 3
            ? e
            : i === null
            ? (i = Object.getOwnPropertyDescriptor(e, r))
            : i,
        a;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        s = Reflect.decorate(t, e, r, i);
      else
        for (var o = t.length - 1; o >= 0; o--)
          (a = t[o]) &&
            (s = (n < 3 ? a(s) : n > 3 ? a(e, r, s) : a(e, r)) || s);
      return n > 3 && s && Object.defineProperty(e, r, s), s;
    },
    oi;
  (function (t) {
    (t[(t.Field = 0)] = "Field"), (t[(t.Dynamic = 1)] = "Dynamic");
  })(oi || (oi = {}));
  var lt = class extends Se {
      constructor(e, r = Ne()) {
        super();
        (this.properties = {}),
          (this.textureCount = 0),
          (this.boundTextures = []),
          (this.initialized = !1),
          (this.name = `Material_${this.assetID}`),
          (this.gl = r),
          (this._shader = e),
          (this.pipelineStateOverride = Object.assign({}, e.pipelineStates));
      }
      get shader() {
        return this._shader;
      }
      upload(e) {
        this.tryInit(!0), this.setupPipelineStateOverride();
        for (let r in this.properties) {
          let i = this.properties[r],
            n = i.key ? this[i.key] : i.value;
          n !== void 0 && this.uploadUniform(i, n);
        }
      }
      setProp(e, r, i) {
        this.tryInit(!0);
        let n = this.getOrCreatePropInfo(e, r);
        if (r !== n.type) {
          console.warn("Uniform type missmatch");
          return;
        }
        n.key ? (this[n.key] = i) : (n.value = i);
      }
      unbindRenderTextures() {
        this.tryInit(!0);
        let e = this.gl;
        for (let r = 0; r < this.boundTextures.length; r++) {
          let i = this.boundTextures[r];
          i instanceof ne && i.unbind(r);
        }
        this.boundTextures.length = 0;
      }
      tryInit(e = !1) {
        if (this.initialized) return !0;
        let r = this.gl || Ne();
        if (!r) {
          if (e)
            throw new Error(
              "Failed to intialize material without global GL context"
            );
          return !1;
        }
        this.gl = r;
        for (let i in this) {
          let n = fo(this, i);
          if (!n) continue;
          let s = this.getOrCreatePropInfo(n.name, n.type);
          s.key = i;
        }
        return (this.initialized = !0), !0;
      }
      setUniformDirectly(e, r, i) {
        if (i === void 0) throw new Error("");
        this.tryInit(!0);
        let n = this.getOrCreatePropInfo(e, r);
        !n.location || this.uploadUniform(n, i);
      }
      getOrCreatePropInfo(e, r) {
        let i = this.properties[e];
        return (
          i ||
          (r === "tex2d"
            ? (i = {
                type: r,
                value: void 0,
                uploaed: void 0,
                location: this.shader.uniformLocation(e),
              })
            : r === "tex2d[]"
            ? (i = {
                type: r,
                value: void 0,
                uploaded: void 0,
                location: this.shader.uniformLocation(e),
                buffer: new Array(),
              })
            : r.endsWith("[]")
            ? (i = {
                type: r,
                value: void 0,
                uploaded: void 0,
                location: this.shader.uniformLocation(e),
                buffer: new Float32Array(),
              })
            : (i = {
                type: r,
                value: void 0,
                uploaded: void 0,
                location: this.shader.uniformLocation(e),
              }),
          (this.properties[e] = i),
          i)
        );
      }
      setPipelineStateOverride(e) {
        let r = !1,
          i = [O.One, O.Zero],
          n = [O.One, O.OneMinusSrcAlpha];
        typeof e.blend == "number" && e.blend !== O.Disable
          ? ((r = !0), (i = [e.blend, e.blend]), (n = [e.blend, e.blend]))
          : e.blend instanceof Array && ((r = !0), (i = e.blend)),
          e.blendRGB &&
            ((r = e.blend !== !1 && e.blend !== O.Disable), (i = e.blendRGB)),
          e.blendAlpha &&
            ((r = e.blend !== !1 && e.blend !== O.Disable), (n = e.blendAlpha)),
          (this.pipelineStateOverride = {
            depth: e.depth || be.Less,
            blend: r,
            blendRGB: i,
            blendAlpha: n,
            zWrite: e.zWrite !== !1,
            cull: e.cull || Ke.Back,
          });
      }
      setupPipelineStateOverride() {
        let e = this.gl;
        if (
          (this.pipelineStateOverride.depth === be.Disable
            ? e.disable(e.DEPTH_TEST)
            : (e.enable(e.DEPTH_TEST),
              e.depthMask(this.pipelineStateOverride.zWrite),
              e.depthFunc(this.pipelineStateOverride.depth)),
          !this.pipelineStateOverride.blend)
        )
          e.disable(e.BLEND);
        else {
          let [r, i] = this.pipelineStateOverride.blendRGB,
            [n, s] = this.pipelineStateOverride.blendAlpha;
          e.enable(e.BLEND), e.blendFuncSeparate(r, i, n, s);
        }
        this.pipelineStateOverride.cull === Ke.Disable
          ? e.disable(e.CULL_FACE)
          : (e.enable(e.CULL_FACE),
            e.cullFace(this.pipelineStateOverride.cull),
            e.frontFace(e.CCW));
      }
      uploadUniform(e, r) {
        var i;
        let n = this.gl,
          s = L();
        if (!e.location) return !1;
        let a = !1;
        if (e.uploaded === null && r === null && e.type !== "tex2d") return !1;
        let o = r;
        switch (e.type) {
          case "int":
            n.uniform1i(e.location, r);
            break;
          case "float":
            n.uniform1f(e.location, r);
            break;
          case "vec2":
            n.uniform2fv(e.location, r);
            break;
          case "vec3":
            n.uniform3fv(e.location, r);
            break;
          case "vec4":
            n.uniform4fv(e.location, r);
            break;
          case "color":
            n.uniform4fv(e.location, r);
            break;
          case "mat4":
            n.uniformMatrix4fv(e.location, !1, r);
            break;
          case "int[]":
            r.length && n.uniform1iv(e.location, r);
            break;
          case "float[]":
            r.length && n.uniform1fv(e.location, r);
            break;
          case "vec2[]": {
            let h = this.setVectorUniformBuffer(e, 2, r);
            h && n.uniform2fv(e.location, e.buffer, 0, h);
            break;
          }
          case "vec3[]": {
            let h = this.setVectorUniformBuffer(e, 3, r);
            h && n.uniform3fv(e.location, e.buffer, 0, h);
            break;
          }
          case "color[]":
          case "vec4[]": {
            let h = this.setVectorUniformBuffer(e, 4, r);
            h && n.uniform4fv(e.location, e.buffer, 0, h);
            break;
          }
          case "mat4[]": {
            let h = this.setVectorUniformBuffer(e, 16, r);
            h && n.uniform4fv(e.location, e.buffer, 0, h);
            break;
          }
          case "tex2d": {
            let h = e;
            r = r || s.renderer.assets.textures.default;
            let l = this.bindNextTexture(r);
            h.uploaded !== l && (n.uniform1i(h.location, l), (h.uploaded = l)),
              (o = l);
            break;
          }
          case "tex2d[]": {
            let h = e,
              l = r,
              f = !1,
              c = h.uploaded || [];
            for (let p = 0; p < l.length; p++) {
              let u = l[p] || s.renderer.assets.textures.default,
                x = this.bindNextTexture(u);
              ((i = h.uploaded) === null || i === void 0 ? void 0 : i[p]) !==
                x && (f = !0),
                (c[p] = x);
            }
            f && (n.uniform1iv(h.location, c, 0, l.length), (h.uploaded = c)),
              (o = c);
          }
        }
        e.uploaded = o;
      }
      bindNextTexture(e) {
        return (
          e.bind(this.boundTextures.length), this.boundTextures.push(e) - 1
        );
      }
      setVectorUniformBuffer(e, r, i) {
        e.buffer.length < r * i.length &&
          (e.buffer = new Float32Array(r * i.length));
        for (let n = 0; n < i.length; n++) e.buffer.set(i[n], n * r);
        return r * i.length;
      }
    },
    hi = Symbol("shaderProp");
  function N(t, e) {
    return Reflect.metadata(hi, { name: t, type: e });
  }
  function fo(t, e) {
    return Reflect.getMetadata(hi, t, e);
  }
  function Be(t) {
    let e = t.clone();
    return class extends lt {
      constructor(i = Ne()) {
        e.valid() || (e = t.clone()), super(e, i);
      }
    };
  }
  function yt(t) {
    class e extends Be(t) {
      constructor() {
        super(...arguments);
        (this.texture = null), (this.color = new I(1, 1, 1, 1));
      }
    }
    return (
      ai([N(Ae.mainTex, "tex2d")], e.prototype, "texture", void 0),
      ai([N(Ae.color, "color")], e.prototype, "color", void 0),
      e
    );
  }
  function Rt(t) {
    return class extends t {
      constructor(...e) {
        super(...e);
      }
    };
  }
  var xe = function (t, e, r, i) {
    var n = arguments.length,
      s =
        n < 3
          ? e
          : i === null
          ? (i = Object.getOwnPropertyDescriptor(e, r))
          : i,
      a;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      s = Reflect.decorate(t, e, r, i);
    else
      for (var o = t.length - 1; o >= 0; o--)
        (a = t[o]) && (s = (n < 3 ? a(s) : n > 3 ? a(e, r, s) : a(e, r)) || s);
    return n > 3 && s && Object.defineProperty(e, r, s), s;
  };
  function li(t, e, r, i) {
    let n = new lt(r.ErrorShader, t);
    return (
      n.setProp("uMainTex", "tex2d", i.error),
      {
        error: n,
        default: new e.DefaultMaterial(t),
        blitCopy: new e.BlitCopy(t),
        ColoredLine: new lt(r.ColoredLine, t),
      }
    );
  }
  function ci(t, e, r) {
    let i = class extends Be(r.DefaultShader) {
      constructor() {
        super(...arguments);
        (this.color = I.white), (this.mainTexture = e.default);
      }
    };
    xe([N("uColor", "color")], i.prototype, "color", void 0),
      xe([N("uMainTex", "tex2d")], i.prototype, "mainTexture", void 0),
      (i = xe([Rt], i));
    let n = class extends Be(r.BlitCopy) {
      constructor() {
        super(...arguments);
        (this.source = null), (this.flip = m(0, 0));
      }
    };
    xe([N("uMainTex", "tex2d")], n.prototype, "source", void 0),
      xe([N("uFlip", "vec2")], n.prototype, "flip", void 0),
      (n = xe([Rt], n));
    let s = class extends Be(r.DefaultShader) {
      constructor() {
        super(...arguments);
        (this.color = I.white),
          (this.mainTexture = e.default),
          (this.normalTexture = e.defaultNormal),
          (this.emission = I.black),
          (this.specular = I.white),
          (this.metiallic = 0.023),
          (this.smoothness = 0.5),
          (this.fresnel = 5);
      }
    };
    return (
      xe([N("uColor", "color")], s.prototype, "color", void 0),
      xe([N("uMainTex", "tex2d")], s.prototype, "mainTexture", void 0),
      xe([N("uNormalTex", "tex2d")], s.prototype, "normalTexture", void 0),
      xe([N("uEmission", "color")], s.prototype, "emission", void 0),
      xe([N("uSpecular", "color")], s.prototype, "specular", void 0),
      xe([N("uMetallic", "float")], s.prototype, "metiallic", void 0),
      xe([N("uSmoothness", "float")], s.prototype, "smoothness", void 0),
      xe([N("uFresnel", "float")], s.prototype, "fresnel", void 0),
      (s = xe([Rt], s)),
      { DefaultMaterial: i, BlitCopy: n, DefaultLit: s }
    );
  }
  function fi(t) {
    var e;
    let r = 64,
      i = document.createElement("canvas");
    i.width = i.height = r;
    let n =
      (e = i.getContext("2d")) !== null && e !== void 0
        ? e
        : ue("Failed to create default texture.");
    (n.fillStyle = "black"),
      n.fillRect(0, 0, r, r),
      (n.fillStyle = "cyan"),
      n.fillRect(0, 0, r / 2, r / 2),
      n.fillRect(r / 2, r / 2, r / 2, r / 2);
    let s = new _e(r, r, _.RGBA, pe.Linear, t);
    s.setData(i),
      (s.name = "Texture-Error"),
      (n.fillStyle = "blue"),
      n.fillRect(0, 0, r, r);
    let a = new _e(r, r, _.RGBA, pe.Linear, t);
    a.setData(i),
      (a.name = "Default-Normal"),
      (n.fillStyle = "white"),
      n.fillRect(0, 0, r, r);
    let o = new _e(r, r, _.RGBA, pe.Linear, t);
    return (
      o.setData(i),
      (o.name = "Default-White"),
      { default: o, defaultNormal: a, error: s }
    );
  }
  var Te = class {
    constructor(e = 16, r = e * 3, i = Pe, n = L()) {
      (this.verticesCount = 0),
        (this.indicesCount = 0),
        (this.mesh = new Je(i, n)),
        this.mesh.resize(e, r);
    }
    addPolygon(...e) {
      if (e.length <= 0) return;
      this.verticesCount + e.length > this.mesh.vertices.length &&
        this.mesh.resize(
          this.mesh.vertices.length * 2,
          this.mesh.indices.length * 2,
          !0
        );
      let r = this.verticesCount;
      for (let i in e[0])
        for (let n = 0; n < e.length; n++)
          this.mesh.vertices[r + n][i].set(e[n][i]);
      for (let i = 0; i < e.length - 2; i++)
        (this.mesh.indices[this.indicesCount + i * 3 + 0] = r + 0),
          (this.mesh.indices[this.indicesCount + i * 3 + 1] = r + i + 1),
          (this.mesh.indices[this.indicesCount + i * 3 + 2] = r + i + 2);
      (this.verticesCount += e.length),
        (this.indicesCount += (e.length - 2) * 3);
    }
    toMesh() {
      return (
        this.mesh.indices.length != this.indicesCount
          ? this.mesh.resize(this.verticesCount, this.indicesCount, !0)
          : this.mesh.vertices.length != this.verticesCount &&
            this.mesh.vertices.resize(this.verticesCount, !0),
        this.mesh
      );
    }
    static quad(e = m.zero(), r = m.one(), i = L()) {
      let n = m.mul(r, 0.5),
        s = new Je(i);
      return (
        s.resize(4, 6),
        s.vertices[0].vert.set([e.x - n.x, e.y - n.y, 0]),
        s.vertices[1].vert.set([e.x + n.x, e.y - n.y, 0]),
        s.vertices[2].vert.set([e.x + n.x, e.y + n.y, 0]),
        s.vertices[3].vert.set([e.x - n.x, e.y + n.y, 0]),
        s.vertices[0].uv.set([0, 0]),
        s.vertices[1].uv.set([1, 0]),
        s.vertices[2].uv.set([1, 1]),
        s.vertices[3].uv.set([0, 1]),
        s.vertices[0].normal.set([0, 0, 1]),
        s.vertices[1].normal.set([0, 0, 1]),
        s.vertices[2].normal.set([0, 0, 1]),
        s.vertices[3].normal.set([0, 0, 1]),
        s.vertices[0].color.fill(1),
        s.vertices[1].color.fill(1),
        s.vertices[2].color.fill(1),
        s.vertices[3].color.fill(1),
        s.indices.set([0, 1, 2, 0, 2, 3]),
        s
      );
    }
    static ndcQuad(e = L()) {
      return this.quad(m.zero(), m(2, 2), e);
    }
    static ndcTriangle(e = L()) {
      let r = new Je(e);
      return (
        r.resize(3, 3),
        r.vertices[0].vert.set([-1, -1, 0]),
        r.vertices[1].vert.set([3, -1, 0]),
        r.vertices[2].vert.set([-1, 3, 0]),
        r.vertices[0].uv.set([0, 0]),
        r.vertices[1].uv.set([2, 0]),
        r.vertices[2].uv.set([0, 2]),
        r.vertices[0].normal.set([0, 0, 1]),
        r.vertices[1].normal.set([0, 0, 1]),
        r.vertices[2].normal.set([0, 0, 1]),
        r.vertices[0].color.fill(1),
        r.vertices[1].color.fill(1),
        r.vertices[2].color.fill(1),
        r.indices.set([0, 1, 2]),
        (r.name = "mesh_ndc_triangle"),
        r
      );
    }
    static cube(e = g.zero(), r = g.one(), i = L()) {
      let n = [
          g(-0.5, -0.5, -0.5).mul(r).plus(e),
          g(0.5, -0.5, -0.5).mul(r).plus(e),
          g(0.5, 0.5, -0.5).mul(r).plus(e),
          g(-0.5, 0.5, -0.5).mul(r).plus(e),
          g(-0.5, -0.5, 0.5).mul(r).plus(e),
          g(0.5, -0.5, 0.5).mul(r).plus(e),
          g(0.5, 0.5, 0.5).mul(r).plus(e),
          g(-0.5, 0.5, 0.5).mul(r).plus(e),
        ],
        s = [m(0, 0), m(1, 0), m(1, 1), m(0, 1)],
        a = new Te(24, 36, Pe, i);
      a.addPolygon(
        { vert: n[1], uv: s[0], normal: g(0, 0, -1) },
        { vert: n[0], uv: s[1], normal: g(0, 0, -1) },
        { vert: n[3], uv: s[2], normal: g(0, 0, -1) },
        { vert: n[2], uv: s[3], normal: g(0, 0, -1) }
      ),
        a.addPolygon(
          { vert: n[5], uv: s[0], normal: g(1, 0, 0) },
          { vert: n[1], uv: s[1], normal: g(1, 0, 0) },
          { vert: n[2], uv: s[2], normal: g(1, 0, 0) },
          { vert: n[6], uv: s[3], normal: g(1, 0, 0) }
        ),
        a.addPolygon(
          { vert: n[4], uv: s[0], normal: g(0, 0, 1) },
          { vert: n[5], uv: s[1], normal: g(0, 0, 1) },
          { vert: n[6], uv: s[2], normal: g(0, 0, 1) },
          { vert: n[7], uv: s[3], normal: g(0, 0, 1) }
        ),
        a.addPolygon(
          { vert: n[0], uv: s[0], normal: g(-1, 0, 0) },
          { vert: n[4], uv: s[1], normal: g(-1, 0, 0) },
          { vert: n[7], uv: s[2], normal: g(-1, 0, 0) },
          { vert: n[3], uv: s[3], normal: g(-1, 0, 0) }
        ),
        a.addPolygon(
          { vert: n[7], uv: s[0], normal: g(0, 1, 0) },
          { vert: n[6], uv: s[1], normal: g(0, 1, 0) },
          { vert: n[2], uv: s[2], normal: g(0, 1, 0) },
          { vert: n[3], uv: s[3], normal: g(0, 1, 0) }
        ),
        a.addPolygon(
          { vert: n[0], uv: s[0], normal: g(0, -1, 0) },
          { vert: n[1], uv: s[1], normal: g(0, -1, 0) },
          { vert: n[5], uv: s[2], normal: g(0, -1, 0) },
          { vert: n[4], uv: s[3], normal: g(0, -1, 0) }
        );
      let o = a.toMesh();
      return (
        o.vertices.forEach(h => h.color.fill(1)), (o.name = "mesh_cube"), o
      );
    }
    static sphereNormalizedCube(e = g.zero(), r = 0.5, i = 12, n = L()) {
      let s = 6 * (i + 1) * (i + 1),
        a = i * i * 3 * 2 * 6,
        o = new Je();
      o.resize(s, a);
      let h = 0,
        l = [],
        f = [];
      for (let p = 0; p < 6; ++p)
        for (let u = 0; u <= i; ++u)
          for (let x = 0; x <= i; ++x) {
            let M = [
                () => g(0, u, x),
                () => g(i, u, x),
                () => g(u, x, 0),
                () => g(u, x, i),
                () => g(u, 0, x),
                () => g(u, i, x),
              ][p](),
              v = f[M.x] || (f[M.x] = []),
              E = v[M.y] || (v[M.y] = []);
            E[M.z] === void 0 && ((E[M.z] = l.length), l.push(M));
          }
      o.resize(l.length, a),
        l.forEach((p, u) => {
          let x = g.div(p, i).mul(2).minus(1).normalize(),
            M = g.mul(x, r),
            [v, E, F] = uo(M),
            D = [F / (Math.PI * 2), E / Math.PI];
          o.vertices[u].vert.set(M),
            o.vertices[u].normal.set(x),
            o.vertices[u].color.set(I.white),
            o.vertices[u].uv.set(D),
            o.vertices[u].uv2.set(D);
        });
      let c = [];
      for (let p = 0; p < 6; ++p) {
        for (let u = 0; u <= i; ++u)
          for (let x = 0; x <= i; ++x) {
            let M = [
              () => g(i, u, x),
              () => g(0, u, i - x),
              () => g(u, x, i),
              () => g(u, i - x, 0),
              () => g(u, i, i - x),
              () => g(u, 0, x),
            ][p]();
            c.push(f[M.x][M.y][M.z]);
          }
        for (let u = 0; u < i; ++u)
          for (let x = 0; x < i; ++x) {
            let M = p * (i + 1) * (i + 1) + u * (i + 1) + x,
              v = M + (i + 1);
            (o.indices[h++] = c[v + 0]),
              (o.indices[h++] = c[M + 1]),
              (o.indices[h++] = c[M + 0]),
              (o.indices[h++] = c[v + 0]),
              (o.indices[h++] = c[v + 1]),
              (o.indices[h++] = c[M + 1]);
          }
      }
      return o;
    }
  };
  function uo(t) {
    let e = t.magnitude,
      r = Math.acos(t.y / e),
      i = Math.atan2(t.z, t.x);
    return [e, r, i];
  }
  function ui(t) {
    return {
      quad: Te.quad(m.zero(), m.one(), t),
      screenQuad: Te.ndcQuad(t),
      cube: Te.cube(g.zero(), g.one(), t),
    };
  }
  var Qt = class {
    constructor(e) {
      let r = e.gl;
      (this.gl = r),
        (e.assets = this),
        (this.BuiltinUniforms = Ae),
        (this.shaderSources = Re),
        (this.shaders = ri(r)),
        (this.meshes = ui(e)),
        (this.textures = fi(e)),
        (this.types = ci(r, this.textures, this.shaders)),
        (this.materials = li(r, this.types, this.shaders, this.textures));
    }
  };
  var Zt = class {
    constructor(e) {
      (this.pool = []), (this.allocator = e);
    }
    get(...e) {
      return this.pool.length <= 0 ? this.allocator(...e) : this.pool.pop();
    }
    release(e) {
      this.pool.push(e);
    }
  };
  var Kt = class {
    constructor(e, r, i) {
      (this.viewProjectionMatrix = w.identity()),
        (this.viewMatrix = w.identity()),
        (this.projectionMatrix = w.identity()),
        (this.target = le.CanvasBuffer),
        (this.shader = null),
        (this.globalUniforms = new Map()),
        (this.globalTextures = new Map()),
        (this.framebufferPool = new Zt((n, s) => new le(n, s))),
        (this.canvas = e),
        (this.width = r === void 0 ? e.width : r),
        (this.height = i === void 0 ? e.height : i),
        (this.canvas.width = this.width),
        (this.canvas.height = this.height),
        (this.scissor = new fe(m.zero(), m(this.width, this.height))),
        (this.gl = Qe(
          this.canvas.getContext("webgl2"),
          "WebGL2 is not support on current device."
        )),
        this.gl.getExtension("EXT_color_buffer_float"),
        this.gl.getExtension("EXT_color_buffer_half_float"),
        this.gl.getExtension("WEBGL_depth_texture"),
        console.log(
          this.gl.getExtension("WEBGL_depth_texture") ||
            this.gl.getExtension("MOZ_WEBGL_depth_texture") ||
            this.gl.getExtension("WEBKIT_WEBGL_depth_texture")
        ),
        console.log(this.gl.getSupportedExtensions()),
        (this.ctx = new at()),
        Object.assign(this.ctx, {
          gl: this.gl,
          width: this.width,
          height: this.height,
          assets: {},
          renderer: this,
        }),
        (this.assets = new Qt(this.ctx)),
        (this.ctx.assets = this.assets),
        (this.blitFramebuffer = [
          new le(0, 0, this.ctx),
          new le(0, 0, this.ctx),
        ]),
        L() || this.use(),
        (this.helperAssets = {
          clipBlitMesh: Te.ndcQuad(),
          blitMesh: Te.ndcTriangle(),
          depthBlitTex: new Mt(this.width, this.height),
        });
    }
    use() {
      Wt(this.ctx);
    }
    setSize(e, r) {
      (e = Math.floor(e)),
        (r = Math.floor(r)),
        (this.canvas.width = e),
        (this.canvas.height = r),
        (this.width = e),
        (this.height = r),
        (this.ctx.width = e),
        (this.ctx.height = r);
    }
    get canvasSize() {
      return m(this.width, this.height);
    }
    setViewProjection(e, r) {
      w.mul(this.viewProjectionMatrix, r, e);
    }
    setFramebuffer(e, r) {
      let i;
      if (e === le.CanvasBuffer) i = le.CanvasBuffer;
      else if (e instanceof le) i = e;
      else if (e instanceof Array) {
        let n = 0,
          s = 0;
        e.length > 0
          ? ((n = e[0].width), (s = e[0].height))
          : r && ((n = r.width), (s = r.height));
        let a = this.getTempFramebuffer(n, s);
        for (let o = 0; o < e.length; o++) a.addColorAttachment(e[o], o);
        r && a.setDepthAttachment(r), (i = a);
      } else {
        let n = e,
          s = this.getTempFramebuffer(n.width, n.height);
        s.addColorAttachment(n, 0), r && s.setDepthAttachment(r), (i = s);
      }
      i !== this.target && (this.detachCurrentFramebuffer(), (this.target = i)),
        this.scissor.min.set([0, 0]),
        this.scissor.max.set(this.target.size),
        this.target.bind();
    }
    detachCurrentFramebuffer() {
      this.target.__isTemp && this.framebufferPool.release(this.target);
    }
    getTempFramebuffer(e, r) {
      let i = this.framebufferPool.get(e, r);
      return (i.__isTemp = !0), i.reset(e, r), i;
    }
    blitCopy(e, r) {
      let i = this.gl,
        [n, s] = this.blitFramebuffer;
      n.reset(e.width, e.height),
        n.addColorAttachment(e),
        n.bind(),
        s.reset(e.width, e.height),
        i.bindFramebuffer(i.READ_FRAMEBUFFER, n.glFBO()),
        e instanceof ne
          ? i.framebufferTexture2D(
              i.READ_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.RENDERBUFFER,
              e.glTex(),
              0
            )
          : i.framebufferRenderbuffer(
              i.READ_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.RENDERBUFFER,
              e.glBuf()
            ),
        i.bindFramebuffer(i.DRAW_FRAMEBUFFER, s.glFBO()),
        r instanceof ne
          ? i.framebufferTexture2D(
              i.DRAW_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_2D,
              r.glTex(),
              0
            )
          : i.framebufferRenderbuffer(
              i.DRAW_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_2D,
              r.glBuf()
            ),
        i.blitFramebuffer(
          0,
          0,
          e.width,
          e.height,
          0,
          0,
          r.width,
          r.height,
          i.COLOR_BUFFER_BIT,
          i.NEAREST
        ),
        i.bindFramebuffer(i.READ_FRAMEBUFFER, null),
        i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null);
    }
    blitCopyDepth(e, r) {
      let i = this.gl;
      if (e instanceof Jt) {
        let n = this.helperAssets.depthBlitTex;
        n.resize(e.width, e.height);
        let [s, a] = this.blitFramebuffer;
        s.reset(e.width, e.height),
          s.bind(),
          a.reset(e.width, e.height),
          a.bind(),
          i.bindFramebuffer(i.READ_FRAMEBUFFER, s.glFBO()),
          i.framebufferRenderbuffer(
            i.READ_FRAMEBUFFER,
            i.DEPTH_ATTACHMENT,
            i.RENDERBUFFER,
            e.glBuf()
          ),
          i.bindFramebuffer(i.DRAW_FRAMEBUFFER, a.glFBO()),
          i.framebufferTexture2D(
            i.DRAW_FRAMEBUFFER,
            i.DEPTH_ATTACHMENT,
            i.TEXTURE_2D,
            n.glTex(),
            0
          ),
          i.blitFramebuffer(
            0,
            0,
            e.width,
            e.height,
            0,
            0,
            r.width,
            r.height,
            i.DEPTH_BUFFER_BIT,
            i.NEAREST
          ),
          (e = n);
      }
      this.blit(e, r);
    }
    clear(e = I.black, r = !0) {
      this.target.bind(),
        this.setupScissor(),
        this.gl.clearColor(e.r, e.g, e.b, e.a),
        this.gl.clearDepth(1),
        this.gl.depthMask(r),
        this.gl.clear(
          this.gl.COLOR_BUFFER_BIT |
            this.gl.DEPTH_BUFFER_BIT |
            this.gl.STENCIL_BUFFER_BIT
        );
    }
    blit(e, r, i = this.assets.materials.blitCopy, n, s) {
      let a = this.target;
      this.setFramebuffer(r), (r = this.target);
      let o = this.viewProjectionMatrix,
        h = this.helperAssets.blitMesh,
        l =
          r === le.CanvasBuffer
            ? new fe(m.zero(), this.canvasSize)
            : new fe(m.zero(), r.size.clone());
      if (e && (n || s) && ((l = s || l), n)) {
        h = this.helperAssets.clipBlitMesh;
        let f = We(n.min, e.size),
          c = We(n.max, e.size);
        (h.uvs = [m(f.x, f.y), m(c.x, f.y), m(c.x, c.y), m(f.x, c.y)]),
          h.update();
      }
      (this.target = r),
        (this.scissor = l),
        (this.viewProjectionMatrix = w.identity()),
        e && i.setProp(Ae.mainTex, "tex2d", e),
        this.drawMesh(h, w.identity(), i),
        this.setFramebuffer(a),
        (this.viewProjectionMatrix = o);
    }
    useShader(e) {
      let r = this.gl;
      (this.shader = e), e.use();
    }
    setupTransforms(e, r) {
      let i = this.gl,
        n = w.mul(this.viewProjectionMatrix, r),
        s = w.create();
      w.invert(s, r) ? w.transpose(s, s) : s.fill(0);
      let a = w.mul(this.viewMatrix, r);
      w.invert(a, a) ? w.transpose(a, a) : a.fill(0),
        e.setupBuiltinUniform({
          matM: r,
          matVP: this.viewProjectionMatrix,
          matMVP: n,
          matM_IT: s,
          matMV_IT: a,
        });
    }
    setupGlobalUniforms(e) {
      for (let r of this.globalUniforms.values())
        e.setUniformDirectly(r.name, r.type, r.value);
    }
    drawMeshInstance(e, r, i, n) {
      i || (i = this.assets.materials.error);
      let s = this.gl,
        a = {
          assets: this.assets,
          gl: s,
          nextTextureUnit: 0,
          size: m(this.width, this.height),
        };
      this.target.bind(),
        this.setupScissor(),
        this.useShader(i.shader),
        i.upload(a),
        this.setupTransforms(i.shader, w.identity());
      let o = e.bind();
      r.bindVertexArray(!0, i.shader.attributes),
        s.drawElementsInstanced(s.TRIANGLES, o, s.UNSIGNED_INT, 0, n),
        r.unbindVertexArray(!0, i.shader.attributes),
        e.unbind(),
        i.unbindRenderTextures();
    }
    drawMeshProceduralInstance(e, r, i) {
      r || (r = this.assets.materials.error);
      let n = this.gl,
        s = {
          assets: this.assets,
          gl: n,
          nextTextureUnit: 0,
          size: m(this.width, this.height),
        };
      this.target.bind(),
        this.setupScissor(),
        this.useShader(r.shader),
        r.upload(s),
        this.setupTransforms(r.shader, w.identity());
      let a = e.bind();
      n.drawElementsInstanced(n.TRIANGLES, a, n.UNSIGNED_INT, 0, i),
        r.unbindRenderTextures();
    }
    drawMesh(e, r, i) {
      i || (i = this.assets.materials.error);
      let n = this.gl,
        s = {
          assets: this.assets,
          gl: n,
          nextTextureUnit: 0,
          size: m(this.width, this.height),
        };
      this.target.bind(),
        this.setupScissor(),
        this.useShader(i.shader),
        i.upload(s),
        this.setupTransforms(i.shader, r),
        this.setupGlobalUniforms(i);
      let a = e.bind();
      n.drawElements(n.TRIANGLES, a, n.UNSIGNED_INT, 0),
        e.unbind(),
        i.unbindRenderTextures();
    }
    drawLines(e, r, i) {
      let n = this.gl,
        s = {
          assets: this.assets,
          gl: n,
          nextTextureUnit: 0,
          size: m(this.width, this.height),
        };
      this.target.bind(),
        this.setupScissor(),
        this.useShader(i.shader),
        i.upload(s),
        this.setupTransforms(i.shader, r),
        e.bind(i.shader),
        n.drawElements(n.LINES, e.lines.length, n.UNSIGNED_INT, 0);
    }
    setGlobalUniform(e, r, i) {
      this.globalUniforms.set(e, { name: e, type: r, value: i });
    }
    unsetGlobalUniform(e) {
      this.globalUniforms.delete(e);
    }
    destroy() {
      Ze.destroyAll(), Wt(null);
    }
    setupScissor() {
      this.gl.viewport(
        this.scissor.xMin,
        this.scissor.yMin,
        this.scissor.size.x,
        this.scissor.size.y
      );
    }
  };
  var Jt = class extends ot {
    constructor(e, r, i = 0, n = L()) {
      super(n);
      (this.multiSampling = 0),
        (this.format = _.DEPTH_COMPONENT),
        (this._glBuf = null),
        (this.size = m(e, r)),
        (this.format = _.DEPTH_COMPONENT),
        (this.multiSampling = i),
        this.tryInit(!1);
    }
    glBuf() {
      return this.tryInit(!0), this._glBuf;
    }
    get width() {
      return this.size.x;
    }
    set width(e) {
      this.size.x = e;
    }
    get height() {
      return this.size.y;
    }
    set height(e) {
      this.size.y = e;
    }
    updateParams() {
      this.tryInit(!0);
      let e = this.ctx.gl;
      e.bindRenderbuffer(e.RENDERBUFFER, this._glBuf),
        e.renderbufferStorageMultisample(
          e.RENDERBUFFER,
          this.multiSampling,
          WebGL2RenderingContext.DEPTH_COMPONENT32F,
          this.size.x,
          this.size.y
        );
    }
    init() {
      var e;
      let r = this.ctx.gl;
      return (
        (this._glBuf =
          (e = r.createRenderbuffer()) !== null && e !== void 0
            ? e
            : ue("Failed to create render buffer.")),
        r.bindRenderbuffer(r.RENDERBUFFER, this._glBuf),
        r.renderbufferStorageMultisample(
          r.RENDERBUFFER,
          this.multiSampling,
          WebGL2RenderingContext.DEPTH_COMPONENT32F,
          this.size.x,
          this.size.y
        ),
        r.bindRenderbuffer(r.RENDERBUFFER, null),
        !0
      );
    }
    bindFramebuffer() {
      this.tryInit(!0);
      let e = this.ctx.gl;
      e.framebufferRenderbuffer(
        e.FRAMEBUFFER,
        e.DEPTH_ATTACHMENT,
        e.RENDERBUFFER,
        this._glBuf
      );
    }
    destroy() {
      super.destroy(), this.ctx.gl.deleteRenderbuffer(this._glBuf);
    }
  };
  var er = class {
    constructor(e) {
      this.importers = e;
    }
    async url(e, r = L()) {
      let i = await fetch(e).then(n => n.arrayBuffer());
      return await this.buffer(i, r);
    }
    async blob(e, r = L()) {
      let i = await e.arrayBuffer();
      return await this.buffer(i, r);
    }
    async buffer(e, r = L()) {
      let i = {};
      for (let n in this.importers)
        i[n] = s => this.importers[n].import(e, s, r);
      return i;
    }
  };
  var po = {
      import(t, e, r = L()) {
        return new Promise((i, n) => {
          let s = new Blob([t]),
            a = new Image();
          a.src = URL.createObjectURL(s);
          let o = () => {
            let h = {
                width: a.width,
                height: a.height,
                filterMode: pe.Linear,
                format: _.RGBA,
                mipmap: !0,
                wrapMpde: ve.Repeat,
              },
              l = Object.assign(Object.assign({}, h), e),
              f = new _e(l.width, l.height, l.format, l.filterMode, r);
            (f.autoMipmap = l.mipmap),
              (f.wrapMode = l.wrapMpde),
              f.updateParameters(),
              f.setData(a),
              i(f);
          };
          a.complete ? o() : (a.onload = o);
        });
      },
    },
    mo = { tex2d: po },
    tr = new er(mo);
  var et = {};
  $e(et, { ImageSizing: () => de, imageResize: () => $t });
  var di = dr(
    "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QIZBzY36WJJGwAAABJ0RVh0RmlsZSBOYW1lAM60serM4i0xjMwnJwAAOd9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAyMS0wMi0yNVQxNTo1NDo1MyswODowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjEtMDItMjVUMTU6NTQ6NTMrMDg6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDIxLTAyLTI1VDE1OjU0OjUzKzA4OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDo4MjdmMjExZi1iNjczLWVlNDktYTc5NC05YTVjMWJmY2EzZmU8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxNTVhOWVmYy1kMmYwLTBkNDItYTcwYS02ZGY5M2UwNjljYWE8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo2NjBiMDZmYi0xZjczLWFkNDQtYWQwMS1kNGU5ZDlhOTE4NDM8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6NjYwYjA2ZmItMWY3My1hZDQ0LWFkMDEtZDRlOWQ5YTkxODQzPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIxLTAyLTI1VDE1OjU0OjUzKzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo4MjdmMjExZi1iNjczLWVlNDktYTc5NC05YTVjMWJmY2EzZmU8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjEtMDItMjVUMTU6NTQ6NTMrMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI1NjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4yNTY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PsD6WFoAAAAYdEVYdFNvZnR3YXJlAEFkb2JlIFBob3Rvc2hvcDTLjmcAAAAPdEVYdFdyaXRlcgBTdXBlclBOR8XEr90AACAASURBVHja7V3pduPMCgTZz32f/LO4P6KFpllb7YyTKOfMxIvseFEVRUHT+L//wf1z/9w/f/RnuT+C++f++bs/z/sj+DU/+M1/j+6P/CaA++d3gnvWa7pJ4iaA++eHA/0d7+cmhpsA7p9fCPjR930Twk0AN+B/KInQTQg3Adw/7wUn/tD3SDch3ARwg/4zwF59XnrT36SLz3OTwU0Avwr4+A/+5uznpgvPS4Ov6yaCmwD+FOi/W1nQxeemgceO/s2bDG4C+Hjg4xuO/WQFMEIKV8ngJoKbAD4K+DOBjG98nVdVAQ6SAk0mg5sIbgL4McDHN98/gxCo8Dw0AHYsksFNBDcBfCzwr4L+Hfd9x/unpArAAmFklAbdRHATwE8H/qzb300Eo8DHJCHQAHDxJoKb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"
  );
  var je = `#version 300 es\r
precision mediump float;\r
\r
in vec3 aPos;\r
in vec4 aColor;\r
in vec2 aUV;\r
in vec3 aNormal;\r
\r
uniform mat4 uTransformM;\r
uniform mat4 uTransformVP;\r
uniform mat4 uTransformMVP;\r
uniform mat4 uTransformM_IT;\r
\r
out vec4 vColor;\r
out vec4 vPos;\r
out vec2 vUV;\r
out vec3 vNormal;\r
out vec3 vWorldPos;\r
\r
void main()\r
{\r
    gl_Position = uTransformMVP * vec4(aPos, 1);\r
    vPos = gl_Position;\r
    vColor = aColor;\r
    vUV = aUV;\r
    vNormal = (uTransformM_IT *  vec4(aNormal, 0)).xyz;\r
    vWorldPos = (uTransformM * vec4(aPos, 1)).xyz;\r
    \r
}`;
  var pi = `#version 300 es\r
precision mediump float;\r
\r
in vec4 vColor;\r
in vec4 vPos;\r
in vec2 vUV;\r
\r
uniform sampler2D uMainTex;\r
uniform vec4 uTexSize; // (w, h, 1/w, 1/h)\r
uniform float uSampleOffset;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    vec2 delta = vec2(-uSampleOffset, uSampleOffset);\r
    vec4 color = \r
      texture(uMainTex, clamp(vUV.xy + uTexSize.zw * delta.xx, vec2(0), vec2(1)))\r
    + texture(uMainTex, clamp(vUV.xy + uTexSize.zw * delta.yx, vec2(0), vec2(1)))\r
    + texture(uMainTex, clamp(vUV.xy + uTexSize.zw * delta.yy, vec2(0), vec2(1)))\r
    + texture(uMainTex, clamp(vUV.xy + uTexSize.zw * delta.xy, vec2(0), vec2(1)));\r
\r
    color /= vec4(4.0);\r
\r
    fragColor = color.rgba;\r
}`;
  var ct = class extends Be(new he(je, pi)) {
    constructor() {
      super(...arguments);
      this.texture = null;
      this.textureSize = A.one();
      this.sampleOffset = 1;
    }
  };
  q([N("uMainTex", "tex2d")], ct.prototype, "texture", 2),
    q([N("uTexSize", "vec4")], ct.prototype, "textureSize", 2),
    q([N("uSampleOffset", "float")], ct.prototype, "sampleOffset", 2);
  var rr = class {
    constructor(e) {
      this.steps = [];
      this.mateiralBlur = new ct();
      this.renderer = e;
    }
    init(e) {
      this.steps[0] ||
        ((this.steps[0] = new ne(
          e.width,
          e.height,
          !1,
          e.format,
          e.filterMode
        )),
        (this.steps[0].wrapMode = ve.Clamp),
        this.steps[0].updateParameters()),
        (this.steps[0].width !== e.width ||
          this.steps[0].height !== e.height) &&
          this.steps[0].resize(e.width, e.height, Ve.Discard);
    }
    blur(e, r = 4, i = this.steps[0]) {
      return (
        this.steps[0] ||
          (this.steps[0] = new ne(
            e.width,
            e.height,
            !1,
            e.format,
            e.filterMode
          )),
        (i = i || this.steps[0]),
        (this.steps[0].width !== e.width ||
          this.steps[0].height !== e.height) &&
          this.steps[0].resize(e.width, e.height, Ve.Discard),
        this.downSample(e, r),
        this.upSample(r, i)
      );
    }
    downSample(e, r) {
      for (let i = 1; i <= r; i++) {
        let n = m.floor(We(e.size, m(2)));
        this.steps[i] ||
          ((this.steps[i] = new ne(n.x, n.y, !1, _.RGBA, pe.Linear)),
          (this.steps[i].wrapMode = ve.Clamp),
          this.steps[i].updateParameters());
        let s = this.steps[i];
        (s.width !== n.x || s.height !== n.y) && s.resize(n.x, n.y, Ve.Discard),
          (this.mateiralBlur.texture = e),
          (this.mateiralBlur.textureSize = A(
            e.width,
            e.height,
            1 / e.width,
            1 / e.height
          )),
          (this.mateiralBlur.sampleOffset = 1),
          this.renderer.blit(e, s, this.mateiralBlur),
          (e = s);
      }
    }
    upSample(e, r = this.steps[0]) {
      let i = this.steps[e];
      for (let n = e - 1; n >= 0; n--) {
        let s = Ie(i.size, m(2));
        this.steps[n] ||
          ((this.steps[n] = new ne(s.x, s.y, !1, _.RGBA, pe.Linear)),
          (this.steps[n].wrapMode = ve.Clamp),
          this.steps[n].updateParameters());
        let a = n === 0 ? r : this.steps[n];
        (this.mateiralBlur.texture = i),
          (this.mateiralBlur.textureSize = A(
            i.width,
            i.height,
            1 / i.width,
            1 / i.height
          )),
          (this.mateiralBlur.sampleOffset = 1),
          this.renderer.blit(i, a, this.mateiralBlur),
          (i = a);
      }
      return i;
    }
  };
  function mi(t) {
    return m(Math.random(), Math.random()).mul(t.size).plus(t.min);
  }
  function vi() {
    return Math.random() * 2 - 1;
  }
  function Ee(t, e) {
    return Math.random() * (e - t) + t;
  }
  var xi = `#version 300 es\r
precision mediump float;\r
\r
in vec4 vColor;\r
in vec4 vPos;\r
in vec2 vUV;\r
\r
uniform sampler2D uMainTex;\r
uniform vec4 uColor;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    vec4 color = texture(uMainTex, vUV.xy).rgba;\r
    color.rgba = color * uColor;\r
    fragColor = color.rgba;\r
}`;
  var gi = `#version 300 es\r
precision mediump float;\r
\r
in vec2 vUV;\r
\r
uniform sampler2D uMainTex;\r
uniform sampler2D uMistTex;\r
uniform vec4 uMistColor;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    vec4 color = texture(uMainTex, vUV.xy).rgba;\r
    color.rgb += vec3(uMistColor);\r
    color.a = texture(uMistTex, vUV.xy).r * uMistColor.a;\r
    fragColor = color.rgba;\r
}`;
  var Mi = `#version 300 es\r
precision mediump float;\r
\r
in vec4 vColor;\r
in vec4 vPos;\r
in vec2 vUV;\r
\r
uniform sampler2D uMainTex;\r
uniform vec4 uBackgroundSize; // (x, y, 1/x, 1/y)\r
uniform sampler2D uRaindropTex;\r
uniform sampler2D uDropletTex;\r
uniform sampler2D uMistTex;\r
uniform vec4 uColor;\r
uniform vec2 uSmoothRaindrop;\r
uniform vec2 uRefractParams; // (refractBase, refractScale)\r
uniform vec4 uLightPos;\r
uniform vec4 uDiffuseColor; // (color.rgb, shadowOffset)\r
uniform vec4 uSpecularParams; // (color.rgb, exponent)\r
uniform float uBump;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    // vec3 lightPos = vec3(0.5, 1, 1);\r
\r
    vec4 raindrop = texture(uRaindropTex, vUV.xy).rgba;\r
    vec4 droplet = texture(uDropletTex, vUV.xy).rgba;\r
    float mist = texture(uMistTex, vUV.xy).r;\r
\r
    vec4 compose = vec4(raindrop.rgb + droplet.rgb - vec3(2.0) * raindrop.rgb * droplet.rgb, max(droplet.a, raindrop.a));\r
\r
    float mask = smoothstep(uSmoothRaindrop.x, uSmoothRaindrop.y, compose.a);\r
    \r
    vec2 uv = vUV.xy + -(compose.xy - vec2(0.5)) * vec2(compose.b * uRefractParams.y + uRefractParams.x);\r
    vec3 normal = normalize(vec3((compose.xy - vec2(0.5)) * vec2(2), 1.0));\r
\r
    // vec3 lightDir = lightPos - vec3(vUV, 0);\r
    vec3 lightDir = uLightPos.xyz - uLightPos.w * vec3(vUV.xy, 0.0);\r
    vec3 viewDir = vec3(0, 0, 1);\r
    vec3 halfDir = normalize(lightDir + viewDir);\r
    float lambertian = clamp(dot(normalize(lightDir), normal), 0.0, 1.0);\r
    float blinnPhon = pow(max(dot(normal, halfDir), 0.0), uSpecularParams.a);\r
\r
\r
    // offset = pow(offset, vec2(2));\r
    vec4 color = texture(uMainTex, uv.xy).rgba;\r
    vec3 diffuse = vec3((lambertian - uDiffuseColor.a) * uDiffuseColor.rgb);\r
\r
    color.rgb += vec3((lambertian - uDiffuseColor.a) * uDiffuseColor.rgb);\r
    color.rgb += vec3(blinnPhon) * uSpecularParams.rgb;\r
    \r
\r
    // fragColor = vec4(mask, mask, mask, 1);\r
    // color = color * vec3(uColor);\r
\r
    fragColor = vec4(color.rgb, mask);// vec4(color.rgb, mask);\r
}`;
  var yi = `#version 300 es\r
precision mediump float;\r
\r
in vec3 aPos;\r
in vec2 aUV;\r
\r
uniform mat4 uTransformVP;\r
\r
uniform float uSeed;\r
uniform vec4 uSpawnRect; // (xmin, ymin, xsize, ysize)\r
uniform vec2 uSizeRange; \r
\r
out vec2 vUV;\r
\r
// Gold Noise \xA92015 dcerisano@standard3d.com\r
// - based on the Golden Ratio\r
// - uniform normalized distribution\r
// - fastest static noise generator function (also runs at low precision)\r
// Ref: https://www.shadertoy.com/view/ltB3zD\r
const float PHI = 1.61803398874989484820459; // \u03A6 = Golden Ratio \r
\r
float gold_noise(in vec2 xy, in float seed)\r
{\r
    return fract(tan(distance(xy*PHI, xy)*seed)*xy.x);\r
}\r
\r
vec2 lerp(vec2 a, vec2 b, vec2 t)\r
{\r
    return a + (b - a) * t;\r
}\r
\r
void main()\r
{\r
    int id = gl_InstanceID + 1;\r
    vec2 pos = uSpawnRect.xy + uSpawnRect.zw * vec2(\r
        gold_noise(vec2(1, id), uSeed + 1.0),\r
        gold_noise(vec2(id, 1), uSeed + 2.0));\r
\r
    vec2 size = vec2(\r
        gold_noise(vec2(1, id), uSeed + 3.0),\r
        gold_noise(vec2(id, 1), uSeed + 4.0));\r
    size = lerp(vec2(uSizeRange.x), vec2(uSizeRange.y), size);\r
    \r
    mat4 model = mat4(size.x, 0.0, 0.0, 0.0,  \r
                      0.0, size.x, 0.0, 0.0,  \r
                      0.0, 0.0, 1, 0.0,  \r
                      pos.x, pos.y, 0.0, 1.0); \r
    mat4 mvp = uTransformVP * model;\r
    gl_Position = mvp * vec4(aPos, 1);\r
    vUV = aUV;\r
}`;
  var Ri = `#version 300 es\r
precision mediump float;\r
\r
in vec2 vUV;\r
\r
uniform sampler2D uMainTex;\r
uniform vec4 uColor;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    vec4 color = texture(uMainTex, vUV.xy).rgba;\r
    color.rgb *= color.a;\r
    fragColor = vec4(color.rg, 0.0, color.a);\r
}`;
  var bi = `#version 300 es\r
precision mediump float;\r
\r
in vec4 vColor;\r
in vec4 vPos;\r
in vec2 vUV;\r
\r
uniform sampler2D uMainTex;\r
uniform vec4 uColor;\r
uniform vec2 uEraserSmooth;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    vec4 color = texture(uMainTex, vUV.xy).rgba;\r
    color.a = smoothstep(uEraserSmooth.x, uEraserSmooth.y, color.a);\r
    fragColor = color.rgba;\r
}`;
  var Ei = `#version 300 es\r
precision mediump float;\r
\r
in vec4 vColor;\r
in vec4 vPos;\r
in vec2 vUV;\r
in float vSize;\r
\r
uniform sampler2D uMainTex;\r
uniform float uSize;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    vec4 color = texture(uMainTex, vUV.xy).rgba;\r
    \r
    fragColor = vec4(color.rg * color.a, vSize * color.a, color.a);\r
}`;
  var wi = `#version 300 es\r
precision mediump float;\r
\r
in vec3 aPos;\r
in vec4 aColor;\r
in vec2 aUV;\r
in vec3 aNormal;\r
\r
in float aSize;\r
in mat4 aModelMatrix;\r
\r
uniform mat4 uTransformM;\r
uniform mat4 uTransformVP;\r
uniform mat4 uTransformMVP;\r
uniform mat4 uTransformM_IT;\r
\r
out vec4 vColor;\r
out vec4 vPos;\r
out vec2 vUV;\r
out vec3 vNormal;\r
out vec3 vWorldPos;\r
out float vSize;\r
\r
void main()\r
{\r
    mat4 mvp = uTransformVP * aModelMatrix;\r
    gl_Position = mvp * vec4(aPos, 1);\r
    vPos = gl_Position;\r
    vColor = aColor;\r
    vUV = aUV;\r
    vNormal = (uTransformM_IT *  vec4(aNormal, 0)).xyz;\r
    vWorldPos = (uTransformM * vec4(aPos, 1)).xyz;\r
    vSize = aSize;\r
}`;
  var vo = jt({ size: "float", modelMatrix: "mat4" }),
    bt = class extends Be(
      new he(wi, Ei, {
        blendRGB: [O.OneMinusDstColor, O.OneMinusSrcColor],
        depth: be.Disable,
        zWrite: !1,
        attributes: { size: "aSize", modelMatrix: "aModelMatrix" },
      })
    ) {
      constructor() {
        super(...arguments);
        this.texture = null;
        this.size = 0;
      }
    };
  q([N("uMainTex", "tex2d")], bt.prototype, "texture", 2),
    q([N("uSize", "float")], bt.prototype, "size", 2);
  var tt = class extends Be(
    new he(yi, Ri, {
      vertexStructure: Pe,
      blendRGB: [O.OneMinusDstColor, O.OneMinusSrcColor],
      depth: be.Disable,
      zWrite: !1,
      attributes: { size: "aSize", modelMatrix: "aModelMatrix" },
    })
  ) {
    constructor() {
      super(...arguments);
      this.texture = null;
      this.spawnRect = A(0, 0, 1, 1);
      this.sizeRange = m(10, 20);
      this.seed = 1;
    }
  };
  q([N("uMainTex", "tex2d")], tt.prototype, "texture", 2),
    q([N("uSpawnRect", "vec4")], tt.prototype, "spawnRect", 2),
    q([N("uSizeRange", "vec2")], tt.prototype, "sizeRange", 2),
    q([N("uSeed", "float")], tt.prototype, "seed", 2);
  var we = class extends Be(
    new he(je, Mi, {
      blend: [O.SrcAlpha, O.OneMinusSrcAlpha],
      depth: be.Disable,
      zWrite: !1,
    })
  ) {
    constructor() {
      super(...arguments);
      this.background = null;
      this.backgroundSize = A.one();
      this.raindropTex = null;
      this.dropletTex = null;
      this.mistTex = null;
      this.smoothRaindrop = m(0.95, 1);
      this.refractParams = m(0.4, 0.6);
      this.lightPos = A(0.5, 0.5, 2, 1);
      this.diffuseLight = new I(0.3, 0.3, 0.3, 0.8);
      this.specularParams = A(1, 1, 1, 32);
      this.bump = 1;
    }
  };
  q([N("uMainTex", "tex2d")], we.prototype, "background", 2),
    q([N("uBackgroundSize", "vec4")], we.prototype, "backgroundSize", 2),
    q([N("uRaindropTex", "tex2d")], we.prototype, "raindropTex", 2),
    q([N("uDropletTex", "tex2d")], we.prototype, "dropletTex", 2),
    q([N("uMistTex", "tex2d")], we.prototype, "mistTex", 2),
    q([N("uSmoothRaindrop", "vec2")], we.prototype, "smoothRaindrop", 2),
    q([N("uRefractParams", "vec2")], we.prototype, "refractParams", 2),
    q([N("uLightPos", "vec4")], we.prototype, "lightPos", 2),
    q([N("uDiffuseColor", "color")], we.prototype, "diffuseLight", 2),
    q([N("uSpecularParams", "vec4")], we.prototype, "specularParams", 2),
    q([N("uBump", "float")], we.prototype, "bump", 2);
  var ir = class extends yt(
    new he(je, bi, {
      blendRGB: [O.Zero, O.OneMinusSrcAlpha],
      blendAlpha: [O.Zero, O.OneMinusSrcAlpha],
    })
  ) {
    constructor() {
      super(...arguments);
      this.eraserSize = m(0.93, 1);
    }
  };
  q([N("uEraserSmooth", "vec2")], ir.prototype, "eraserSize", 2);
  var xo = yt(new he(je, xi, { blend: [O.One, O.One] })),
    Et = class extends yt(
      new he(je, gi, { blend: [O.SrcAlpha, O.OneMinusSrcAlpha] })
    ) {
      constructor() {
        super(...arguments);
        this.mistColor = new I(0.01, 0.01, 0.01, 1);
        this.mistTex = null;
      }
    };
  q([N("uMistColor", "color")], Et.prototype, "mistColor", 2),
    q([N("uMistTex", "tex2d")], Et.prototype, "mistTex", 2);
  var nr = class {
    constructor(e) {
      this.raindropTex = null;
      this.originalBackground = null;
      this.matrlCompose = new we();
      this.matrlRaindrop = new bt();
      this.matrlDroplet = new tt();
      this.matrlErase = new ir();
      this.matrlMist = new xo();
      this.matrlMistCompose = new Et();
      this.raindropBuffer = new Ge(vo, 3e3);
      (this.renderer = new Kt(e.canvas)),
        this.renderer.gl.getExtension("EXT_color_buffer_float"),
        (this.options = e),
        (this.projectionMatrix = w.ortho(0, e.width, 0, e.height, 1, -1)),
        (this.raindropComposeTex = new ne(e.width, e.height, !1)),
        (this.background = new ne(e.width, e.height, !1)),
        (this.dropletTexture = new ne(e.width, e.height, !1)),
        (this.blurryBackground = new ne(e.width, e.height, !1)),
        (this.mistBackground = new ne(e.width, e.height, !1)),
        (this.mistTexture = new ne(e.width, e.height, !1, _.R16F)),
        (this.blurRenderer = new rr(this.renderer)),
        (this.mesh = Te.quad()),
        this.renderer.setViewProjection(w.identity(), this.projectionMatrix);
    }
    async loadAssets() {
      (this.raindropTex = await tr.buffer(di).then(e => e.tex2d())),
        (this.matrlRaindrop.texture = this.raindropTex),
        (this.matrlDroplet.texture = this.raindropTex),
        await this.reloadBackground();
    }
    async reloadBackground() {
      this.originalBackground?.destroy(),
        typeof this.options.background == "string"
          ? ((this.originalBackground = await tr
              .url(this.options.background)
              .then(n => n.tex2d({ wrapMpde: ve.Clamp }))),
            (this.originalBackground.wrapMode = ve.Clamp),
            this.originalBackground.updateParameters())
          : ((this.originalBackground = new _e()),
            this.originalBackground.setData(this.options.background),
            this.originalBackground.updateParameters());
      let [e, r] = et.imageResize(
        this.originalBackground.size,
        this.background.size,
        et.ImageSizing.Cover
      );
      this.renderer.blit(
        this.originalBackground,
        this.background,
        this.renderer.assets.materials.blitCopy,
        e,
        r
      ),
        this.background.generateMipmap(),
        this.blurBackground();
      let i = { clamp: ve.Clamp, mirror: ve.Mirror, repeat: ve.Repeat };
      (this.background.wrapMode = this.blurryBackground.wrapMode =
        i[this.options.backgroundWrapMode]),
        this.background.updateParameters(),
        this.blurryBackground.updateParameters();
    }
    resize() {
      this.renderer.setSize(this.options.width, this.options.height),
        (this.projectionMatrix = w.ortho(
          0,
          this.options.width,
          0,
          this.options.height,
          1,
          -1
        )),
        this.renderer.setViewProjection(w.identity(), this.projectionMatrix),
        this.raindropComposeTex.resize(this.options.width, this.options.height),
        this.background.resize(this.options.width, this.options.height),
        this.dropletTexture.resize(this.options.width, this.options.height),
        this.blurryBackground.resize(this.options.width, this.options.height),
        this.mistBackground.resize(this.options.width, this.options.height),
        this.mistTexture.resize(this.options.width, this.options.height);
      let [e, r] = et.imageResize(
        this.originalBackground.size,
        this.background.size,
        et.ImageSizing.Cover
      );
      this.renderer.blit(
        this.originalBackground,
        this.background,
        this.renderer.assets.materials.blitCopy,
        e,
        r
      ),
        this.background.generateMipmap(),
        this.blurBackground();
    }
    render(e, r) {
      this.drawDroplet(r),
        this.drawMist(r.dt),
        this.drawRaindrops(e),
        this.renderer.setFramebuffer(le.CanvasBuffer),
        this.renderer.clear(I.black),
        this.drawBackground(),
        (this.matrlCompose.background = this.blurryBackground),
        (this.matrlCompose.backgroundSize = A(
          this.options.width,
          this.options.height,
          1 / this.options.width,
          1 / this.options.height
        )),
        (this.matrlCompose.raindropTex = this.raindropComposeTex),
        (this.matrlCompose.dropletTex = this.dropletTexture),
        (this.matrlCompose.mistTex = this.mistTexture),
        (this.matrlCompose.smoothRaindrop = m(...this.options.smoothRaindrop)),
        (this.matrlCompose.refractParams = m(
          this.options.refractBase,
          this.options.refractScale
        )),
        (this.matrlCompose.lightPos = A(...this.options.raindropLightPos)),
        (this.matrlCompose.diffuseLight = new I(
          ...this.options.raindropDiffuseLight,
          this.options.raindropShadowOffset
        )),
        (this.matrlCompose.specularParams = A(
          ...this.options.raindropSpecularLight,
          this.options.raindropSpecularShininess
        )),
        (this.matrlCompose.bump = this.options.raindropLightBump),
        this.renderer.blit(null, le.CanvasBuffer, this.matrlCompose);
    }
    blurBackground() {
      this.options.mist
        ? (this.blurRenderer.init(this.background),
          this.blurRenderer.downSample(
            this.background,
            Math.max(
              this.options.backgroundBlurSteps,
              this.options.mistBlurStep
            )
          ),
          this.options.backgroundBlurSteps === this.options.mistBlurStep
            ? (this.blurRenderer.upSample(
                this.options.backgroundBlurSteps,
                this.blurryBackground
              ),
              this.renderer.blit(this.blurryBackground, this.mistBackground))
            : this.options.mistBlurStep > this.options.backgroundBlurSteps
            ? (this.blurRenderer.upSample(
                this.options.backgroundBlurSteps,
                this.blurryBackground
              ),
              this.blurRenderer.upSample(
                this.options.mistBlurStep,
                this.mistBackground
              ))
            : (this.blurRenderer.upSample(
                this.options.mistBlurStep,
                this.mistBackground
              ),
              this.blurRenderer.upSample(
                this.options.backgroundBlurSteps,
                this.blurryBackground
              )))
        : this.blurRenderer.blur(
            this.background,
            this.options.backgroundBlurSteps,
            this.blurryBackground
          );
    }
    drawMist(e) {
      !this.options.mist ||
        ((this.matrlMist.color.r = e / this.options.mistTime),
        this.renderer.blit(
          this.renderer.assets.textures.default,
          this.mistTexture,
          this.matrlMist
        ));
    }
    drawBackground() {
      this.renderer.blit(this.blurryBackground, le.CanvasBuffer),
        this.options.mist &&
          ((this.matrlMistCompose.mistTex = this.mistTexture),
          (this.matrlMistCompose.texture = this.mistBackground),
          (this.matrlMistCompose.mistColor = new I(...this.options.mistColor)),
          this.renderer.blit(
            this.mistBackground,
            le.CanvasBuffer,
            this.matrlMistCompose
          ));
    }
    drawRaindrops(e) {
      e.length > this.raindropBuffer.length &&
        this.raindropBuffer.resize(this.raindropBuffer.length * 2),
        this.renderer.setFramebuffer(this.raindropComposeTex),
        this.renderer.clear(I.black.transparent());
      for (let r = 0; r < e.length; r++) {
        let i = e[r],
          n = w.rts(re.identity(), i.pos.toVec3(), i.size.toVec3(1));
        this.raindropBuffer[r].modelMatrix.set(n),
          (this.raindropBuffer[r].size[0] = i.size.x / 100);
      }
      switch ((this.raindropBuffer.markDirty(), this.options.raindropCompose)) {
        case "smoother":
          this.matrlRaindrop.setPipelineStateOverride({
            blendRGB: [O.OneMinusDstColor, O.OneMinusSrcColor],
          }),
            this.matrlDroplet.setPipelineStateOverride({
              blendRGB: [O.OneMinusDstColor, O.OneMinusSrcColor],
            });
          break;
        case "harder":
          this.matrlRaindrop.setPipelineStateOverride({
            blendRGB: [O.One, O.OneMinusSrcAlpha],
          }),
            this.matrlDroplet.setPipelineStateOverride({
              blendRGB: [O.One, O.OneMinusSrcAlpha],
            });
          break;
      }
      this.renderer.drawMeshInstance(
        this.mesh,
        this.raindropBuffer,
        this.matrlRaindrop,
        e.length
      ),
        (this.matrlErase.eraserSize = m(...this.options.raindropEraserSize)),
        this.renderer.blit(
          this.raindropComposeTex,
          this.dropletTexture,
          this.matrlErase
        ),
        this.options.mist &&
          this.renderer.blit(
            this.raindropComposeTex,
            this.mistTexture,
            this.matrlErase
          );
    }
    drawDroplet(e) {
      this.renderer.setFramebuffer(this.dropletTexture);
      let r = this.options.dropletsPerSeconds * e.dt;
      (this.matrlDroplet.spawnRect = A(
        0,
        0,
        this.options.width,
        this.options.height
      )),
        (this.matrlDroplet.sizeRange = m(...this.options.dropletSize)),
        (this.matrlDroplet.seed = Ee(0, 133)),
        this.renderer.drawMeshProceduralInstance(
          this.mesh,
          this.matrlDroplet,
          r
        );
    }
  };
  function Ti(t, e, r) {
    return t + (e - t) * r;
  }
  var wt = class {
    constructor(e, r, i, n = 1) {
      this.density = 1;
      this.velocity = m.zero();
      this.destroied = !1;
      this._mass = 0;
      this._size = m.zero();
      this.resistance = 0;
      this.shifting = 0;
      this.nextRandomTime = 0;
      (this.pos = r),
        (this.simulator = e),
        (this.density = n),
        (this.lastTrailPos = r.clone()),
        (this.nextTrailDistance = Ee(...e.options.trailDistance)),
        (this.spread = m(e.options.initialSpread)),
        (this.mass = (i * n) ** 2);
    }
    get mass() {
      return this._mass;
    }
    set mass(e) {
      this._mass = e;
      let r = Math.sqrt(e) / this.density;
      (this._size.x = (this.spread.x + 1) * r),
        (this._size.y = (this.spread.y + 1) * r);
    }
    get size() {
      return this._size;
    }
    get mergeDistance() {
      return (
        this.size.x *
        (1 + this.spread.x) *
        0.16 *
        this.simulator.options.colliderSize
      );
    }
    get options() {
      return this.simulator.options;
    }
    updateRaindrop(e) {
      this.nextRandomTime <= e.total &&
        ((this.nextRandomTime =
          e.total + Ee(...this.simulator.options.motionInterval)),
        this.randomMotion()),
        (this.mass -= this.simulator.options.evaporate * e.dt);
      let i = (this.options.gravity * this.mass - this.resistance) / this.mass;
      (this.velocity.y -= i * e.dt),
        this.velocity.y > 0 && (this.velocity.y = 0),
        (this.velocity.x = Math.abs(this.velocity.y) * this.shifting),
        (this.pos.x += this.velocity.x * e.dt),
        (this.pos.y += this.velocity.y * e.dt);
      let n =
        (this.simulator.options.velocitySpread *
          2 *
          Math.atan(Math.abs(this.velocity.y * 0.005))) /
        Math.PI;
      (this.spread.y = Math.max(this.spread.y, n)),
        (this.spread.x *= Math.pow(this.simulator.options.shrinkRate, e.dt)),
        (this.spread.y *= Math.pow(this.simulator.options.shrinkRate, e.dt)),
        Q.distanceSquared(this.lastTrailPos, this.pos) >
          this.nextTrailDistance * this.nextTrailDistance && this.split();
    }
    split() {
      if (this.mass < 1e3) return;
      let e = this.size.x * Ee(...this.simulator.options.trailDropSize),
        r = Ue(m(Ee(-5, 5), this.size.y / 4), this.pos),
        i = this.simulator.spawner.spawn(
          r.clone(),
          e,
          this.simulator.options.trailDropDensity
        );
      (i.spread = m(
        0.1,
        Math.abs(this.velocity.y) * 0.01 * this.options.trailSpread
      )),
        (i.parent = this),
        (this.mass -= i.mass),
        this.simulator.add(i),
        (this.lastTrailPos = this.pos.clone()),
        (this.nextTrailDistance = Ee(...this.simulator.options.trailDistance));
    }
    randomMotion() {
      let e =
        Ti(
          ...this.simulator.options.spawnSize,
          1 - this.simulator.options.slipRate
        ) **
          2 *
        4;
      (this.resistance = Ee(0, 1) * this.options.gravity * e),
        (this.shifting = vi() * Ee(...this.simulator.options.xShifting));
    }
    merge(e) {
      let r = Ie(this.velocity, this.mass),
        i = Ie(e.velocity, e.mass),
        n = Ue(r, i);
      (this.mass += e.mass), (this.velocity = We(n, this.mass));
    }
  };
  var sr = class {
    constructor(e, r) {
      this.currentTime = 0;
      this.nextSpawn = 0;
      this.simulator = e;
    }
    get interval() {
      return this.simulator.options.spawnInterval;
    }
    get size() {
      return this.simulator.options.spawnSize;
    }
    get spawnRect() {
      return this.simulator.options.viewport;
    }
    update(e) {
      return (this.currentTime += e), this;
    }
    *trySpawn() {
      for (; this.currentTime >= this.nextSpawn; ) {
        let e = Ee(...this.size),
          r = mi(this.spawnRect);
        (this.nextSpawn += Ee(...this.interval)),
          yield new wt(this.simulator, r, e);
      }
      this.currentTime >= this.nextSpawn;
    }
    spawn(e, r, i = 1) {
      return new wt(this.simulator, e, r, i);
    }
  };
  var Ai = class extends Array {
      push(...e) {
        return super.push(...e);
      }
      add(e) {
        let r = super.push(e);
        (e.gridIdx = r - 1), (e.grid = this);
      }
      delete(e) {
        (this[e.gridIdx] = this[this.length - 1]),
          (this[e.gridIdx].gridIdx = e.gridIdx),
          this.length--,
          (e.gridIdx = -1),
          (e.grid = void 0);
      }
    },
    ar = class {
      constructor(e) {
        this.raindrops = [];
        this.grid = [];
        (this.options = e), (this.spawner = new sr(this, e)), this.resize();
      }
      get gridSize() {
        return this.options.spawnSize[1] * 0.3;
      }
      resize() {
        let e = Math.ceil(this.options.viewport.size.x / this.gridSize),
          r = Math.ceil(this.options.viewport.size.y / this.gridSize),
          i = 0;
        this.grid.length < e * r &&
          ((i = this.grid.length), (this.grid.length = e * r));
        for (let n = i; n < this.grid.length; n++) this.grid[n] = new Ai();
      }
      gridAt(e, r) {
        if (e < 0 || r < 0) return;
        let i = Math.ceil(
            (this.options.viewport.xMax - this.options.viewport.xMin) /
              this.gridSize
          ),
          n = r * i + e;
        if (!(n >= this.grid.length)) return this.grid[n];
      }
      gridAtWorldPos(e, r) {
        return this.gridAt(...this.worldToGrid(e, r));
      }
      worldToGrid(e, r) {
        let i = Math.floor(e / this.gridSize),
          n = Math.floor(r / this.gridSize);
        return [i, n];
      }
      add(e) {
        this.raindrops.push(e);
        let r = this.gridAtWorldPos(e.pos.x, e.pos.y);
        r && (r.add(e), (e.gridIdx = r.length - 1));
      }
      update(e) {
        if (this.raindrops.length <= this.options.spawnLimit)
          for (let r of this.spawner.update(e.dt).trySpawn())
            this.raindrops.push(r);
        this.raindropUpdate(e), this.collisionUpdate();
        for (let r = 0; r < this.raindrops.length; r++)
          this.raindrops[r].destroied &&
            (this.raindrops[r].grid?.delete(this.raindrops[r]),
            (this.raindrops[r] = this.raindrops[this.raindrops.length - 1]),
            this.raindrops.length--);
      }
      raindropUpdate(e) {
        for (let r = 0; r < this.raindrops.length; r++) {
          let i = this.raindrops[r];
          if (
            i.destroied ||
            (i.updateRaindrop(e),
            i.pos.y < -100 && (i.destroied = !0),
            i.destroied)
          )
            continue;
          let [n, s] = this.worldToGrid(i.pos.x, i.pos.y),
            a = this.gridAt(n, s);
          a !== i.grid && (i.grid?.delete(i), a?.add(i), (i.grid = a));
        }
      }
      collisionUpdate() {
        for (let e = 0; e < this.raindrops.length; e++) {
          let r = this.raindrops[e];
          if (r.destroied) continue;
          let [i, n] = this.worldToGrid(r.pos.x, r.pos.y);
          for (let s = -1; s <= 1; s++)
            for (let a = -1; a <= 1; a++) {
              let o = this.gridAt(i + s, n + a);
              if (!!o)
                for (let h of o) {
                  let l = h === r,
                    f = h.parent === r || r.parent === h,
                    c = r.parent && r.parent === h.parent;
                  if (h.destroied || f || c || l) continue;
                  let p = r.pos.x - h.pos.x,
                    u = r.pos.y - h.pos.y;
                  Math.sqrt(p * p + u * u) - r.mergeDistance - h.mergeDistance <
                    0 &&
                    (r.mass >= h.mass
                      ? (r.merge(h), (h.destroied = !0))
                      : (h.merge(r), (r.destroied = !0)));
                }
            }
        }
      }
    };
  return Di();
})();
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
//# sourceMappingURL=index.js.map
