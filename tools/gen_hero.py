"""Generate the matched dark/light flight-deck hero pair.

One geometry, two palettes, so the two layers crossfade in perfect register.
Every label on the panel is real avionics text describing one consistent
flight state: ILS approach to runway 05L, 5.2 DME, 2,500 ft, 180 KIAS.
"""
import io

DARK = dict(
    name='dark',
    sky=[('0', '#101a28'), ('0.34', '#1d2f45'), ('0.62', '#33475d'), ('0.84', '#5b5a63'), ('1', '#6d6058')],
    cloud='#39434f', cloud_op='0.55',
    shell='#26282b', shell_hi='#34373b', shell_lo='#141517',
    panel='#1d1f22', bezel='#0d0e10',
    screen='#050e09', screen_edge='#16321f', grid='#12301d',
    sym='#4ade80', sym_dim='#2b6f47', warn='#f0b429', alert='#ef4444',
    label='#8d9299', label_dim='#5a5f66',
    adi_sky='#17618f', adi_gnd='#6d4320', adi_line='#c9d4dc',
    map_land='#123020', map_water='#12283c', map_line='#3c6f52', map_route='#f0b429',
    hud='#7dfab4', hud_op='0.92',
    glow_op='0.5', wash='#0b1016', wash_op='0.32',
)

LIGHT = dict(
    name='light',
    sky=[('0', '#9dc4e6'), ('0.34', '#c2dcf0'), ('0.62', '#e2eef6'), ('0.84', '#f6efe1'), ('1', '#f2e3cd')],
    cloud='#ffffff', cloud_op='0.9',
    shell='#c8c2b6', shell_hi='#d9d4ca', shell_lo='#a49d8f',
    panel='#b4ada0', bezel='#8e8879',
    screen='#dbe4da', screen_edge='#b9c6b8', grid='#c3d0c2',
    sym='#1d5533', sym_dim='#5c7a66', warn='#8a5d0d', alert='#9c2323',
    label='#4c4c47', label_dim='#6f6f68',
    adi_sky='#7cb0d6', adi_gnd='#bb8b5d', adi_line='#3d4348',
    map_land='#d8dfc9', map_water='#c2d6e4', map_line='#7d9a86', map_route='#9a6b12',
    hud='#1f6b3f', hud_op='0.75',
    glow_op='0.18', wash='#fdfaf4', wash_op='0.3',
)

MONO = "ui-monospace,'SF Mono',Menlo,Consolas,'DejaVu Sans Mono',monospace"


def txt(x, y, s, fill, size=13, anchor='start', weight='400', op='1', ls='0.5'):
    return (f'<text x="{x}" y="{y}" fill="{fill}" font-family="{MONO}" font-size="{size}" '
            f'font-weight="{weight}" text-anchor="{anchor}" opacity="{op}" letter-spacing="{ls}">{s}</text>')


def build(P):
    o = []
    A = o.append
    A('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" '
      'role="img" aria-label="Forward view from a glass flight deck, primary flight displays on an ILS approach to runway 05L at 2,500 feet">')

    # ---------- defs ----------
    A('<defs>')
    stops = ''.join(f'<stop offset="{a}" stop-color="{b}"/>' for a, b in P['sky'])
    A(f'<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">{stops}</linearGradient>')
    A(f'<linearGradient id="shell" x1="0" y1="0" x2="0" y2="1">'
      f'<stop offset="0" stop-color="{P["shell_hi"]}"/><stop offset="0.55" stop-color="{P["shell"]}"/>'
      f'<stop offset="1" stop-color="{P["shell_lo"]}"/></linearGradient>')
    A(f'<linearGradient id="panel" x1="0" y1="0" x2="0" y2="1">'
      f'<stop offset="0" stop-color="{P["panel"]}"/><stop offset="1" stop-color="{P["shell_lo"]}"/></linearGradient>')
    A(f'<linearGradient id="scr" x1="0" y1="0" x2="0" y2="1">'
      f'<stop offset="0" stop-color="{P["screen"]}"/><stop offset="1" stop-color="{P["screen_edge"]}"/></linearGradient>')
    A('<filter id="glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="4"/></filter>')
    A('<filter id="soft" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="14"/></filter>')
    A('<filter id="cloudb" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="18"/></filter>')
    A('<clipPath id="cpADI"><circle cx="330" cy="631" r="88"/></clipPath>')
    A('<clipPath id="cpMAP"><rect x="838" y="540" width="300" height="182" rx="4"/></clipPath>')
    A('<clipPath id="cpSVS"><rect x="1160" y="540" width="286" height="182" rx="4"/></clipPath>')
    A('<clipPath id="cpHUD"><path d="M566 96 H1034 V300 L800 336 L566 300 Z"/></clipPath>')
    A('</defs>')

    # ---------- outside world ----------
    A('<rect width="1600" height="1000" fill="url(#sky)"/>')
    A(f'<g filter="url(#cloudb)" opacity="{P["cloud_op"]}" fill="{P["cloud"]}">')
    for cx, cy, rx, ry in [(300, 300, 260, 34), (1180, 268, 300, 30), (760, 336, 220, 24),
                           (1480, 318, 200, 26), (120, 350, 210, 22)]:
        A(f'<ellipse cx="{cx}" cy="{cy}" rx="{rx}" ry="{ry}"/>')
    A('</g>')
    # horizon band
    A(f'<g filter="url(#soft)" opacity="0.55"><rect x="0" y="352" width="1600" height="26" fill="{P["cloud"]}"/></g>')

    # ---------- HUD combiner ----------
    A(f'<path d="M566 96 H1034 V300 L800 336 L566 300 Z" fill="{P["hud"]}" opacity="0.05"/>')
    A(f'<path d="M566 96 H1034 V300 L800 336 L566 300 Z" fill="none" stroke="{P["shell_hi"]}" stroke-width="5" opacity="0.85"/>')
    A(f'<g clip-path="url(#cpHUD)" opacity="{P["hud_op"]}" filter="url(#glow)">')
    A(f'<g stroke="{P["hud"]}" fill="{P["hud"]}" stroke-linecap="round">')
    # heading tape
    A('<line x1="640" y1="130" x2="960" y2="130" stroke-width="1.6" opacity="0.75"/>')
    for i, hx in enumerate(range(640, 961, 40)):
        h = 30 + i * 5
        A(f'<line x1="{hx}" y1="124" x2="{hx}" y2="130" stroke-width="1.6"/>')
        A(txt(hx, 118, f'{h:03d}', P['hud'], 11, 'middle'))
    A('<path d="M800 134 L794 144 H806 Z" stroke-width="1.4"/>')
    # pitch ladder
    for dy, lab in [(-46, '10'), (0, '00'), (46, '-10')]:
        y = 224 + dy
        if lab == '00':
            A(f'<line x1="668" y1="{y}" x2="756" y2="{y}" stroke-width="1.8"/>')
            A(f'<line x1="844" y1="{y}" x2="932" y2="{y}" stroke-width="1.8"/>')
        else:
            A(f'<line x1="700" y1="{y}" x2="758" y2="{y}" stroke-width="1.5" opacity="0.85"/>')
            A(f'<line x1="842" y1="{y}" x2="900" y2="{y}" stroke-width="1.5" opacity="0.85"/>')
            A(txt(688, y + 4, lab, P['hud'], 11, 'end', op='0.85'))
    # flight path marker
    A('<circle cx="800" cy="224" r="11" fill="none" stroke-width="2"/>')
    A('<line x1="789" y1="224" x2="775" y2="224" stroke-width="2"/>')
    A('<line x1="811" y1="224" x2="825" y2="224" stroke-width="2"/>')
    A('<line x1="800" y1="213" x2="800" y2="203" stroke-width="2"/>')
    # speed + altitude boxes
    A(f'<rect x="596" y="208" width="62" height="30" fill="none" stroke-width="1.6"/>')
    A(txt(627, 229, '180', P['hud'], 19, 'middle', weight='600'))
    A(txt(627, 196, 'KIAS', P['hud'], 10, 'middle', op='0.8'))
    A(f'<rect x="942" y="208" width="76" height="30" fill="none" stroke-width="1.6"/>')
    A(txt(980, 229, '2500', P['hud'], 19, 'middle', weight='600'))
    A(txt(980, 196, 'ALT', P['hud'], 10, 'middle', op='0.8'))
    A(txt(627, 268, 'M 0.28', P['hud'], 12, 'middle', op='0.9'))
    A(txt(980, 268, 'R 5.2', P['hud'], 12, 'middle', op='0.9'))
    A(txt(800, 292, 'ILS 05L', P['hud'], 13, 'middle', weight='600'))
    A('</g></g>')

    # ---------- glareshield ----------
    A(f'<path d="M0 300 H1600 V430 C1200 470, 1000 484, 800 484 S400 470, 0 430 Z" fill="url(#shell)"/>')
    A(f'<path d="M0 424 C400 464, 600 478, 800 478 S1200 464, 1600 424 V446 C1200 486, 1000 500, 800 500 '
      f'S400 486, 0 446 Z" fill="{P["shell_lo"]}" opacity="0.55"/>')
    # windscreen posts
    A(f'<path d="M0 0 H88 L64 200 L80 310 H0 Z" fill="url(#shell)"/>')
    A(f'<path d="M1600 0 H1512 L1536 200 L1520 310 H1600 Z" fill="url(#shell)"/>')
    A(f'<path d="M534 96 L520 300 H548 L562 96 Z" fill="{P["shell"]}" opacity="0.9"/>')
    A(f'<path d="M1066 96 L1080 300 H1052 L1038 96 Z" fill="{P["shell"]}" opacity="0.9"/>')
    # glareshield annunciators
    for x, w, c in [(470, 96, P['warn']), (586, 60, P['sym']), (672, 96, P['warn']),
                    (788, 60, P['sym']), (874, 96, P['alert']), (990, 60, P['sym'])]:
        A(f'<rect x="{x}" y="384" width="{w}" height="13" rx="6" fill="{c}" opacity="0.55"/>')
    for x, s in [(470, 'MASTER CAUT'), (672, 'AP DISC'), (874, 'FIRE')]:
        A(txt(x, 376, s, P['label_dim'], 10))

    # ---------- MFD bezel ----------
    A(f'<rect x="140" y="452" width="1320" height="316" rx="14" fill="url(#panel)"/>')
    A(f'<rect x="152" y="464" width="1296" height="292" rx="8" fill="{P["bezel"]}"/>')
    A(f'<rect x="160" y="472" width="1280" height="276" rx="5" fill="url(#scr)"/>')

    # ---------- top data band ----------
    A(f'<line x1="160" y1="514" x2="1440" y2="514" stroke="{P["sym_dim"]}" stroke-width="1.2" opacity="0.8"/>')
    band = [
        (176, [('FLAP', '20'), ('GEAR', 'DN')]),
        (300, [('COM1', '128.450'), ('COM2', '121.500')]),
        (452, [('TCN', '054X'), ('VOR', '113.40')]),
        (588, [('ILS', '110.30'), ('DME', '5.2')]),
        (716, [('IFF', '4271'), ('SQ', 'ALT')]),
        (836, [('AP', 'APR'), ('FD', 'CPLD')]),
        (952, [('FUEL', '5400 LB'), ('FF', '1150 PPH')]),
        (1128, [('ALT', '2500'), ('BARO', '30.06')]),
        (1290, [('HDG', '047'), ('CRS', '050')]),
    ]
    for x, rows in band:
        for i, (k, v) in enumerate(rows):
            y = 490 + i * 16
            A(txt(x, y, k, P['label'], 11, op='0.95'))
            col = P['warn'] if k in ('IFF', 'FUEL') else P['sym']
            A(txt(x + 46, y, v, col, 11, weight='600'))
    for x in (288, 440, 576, 704, 824, 940, 1116, 1278):
        A(f'<line x1="{x}" y1="478" x2="{x}" y2="512" stroke="{P["sym_dim"]}" stroke-width="1" opacity="0.55"/>')

    # ---------- pane 1: ADI ----------
    A(f'<g clip-path="url(#cpADI)">')
    A(f'<rect x="242" y="540" width="176" height="91" fill="{P["adi_sky"]}"/>')
    A(f'<rect x="242" y="631" width="176" height="91" fill="{P["adi_gnd"]}"/>')
    A(f'<line x1="242" y1="631" x2="418" y2="631" stroke="{P["adi_line"]}" stroke-width="2.4"/>')
    for dy, lab in [(-40, '20'), (-20, '10'), (20, '10'), (40, '20')]:
        y = 631 + dy
        w = 30 if lab == '10' else 20
        A(f'<line x1="{330-w}" y1="{y}" x2="{330+w}" y2="{y}" stroke="{P["adi_line"]}" stroke-width="1.4" opacity="0.9"/>')
    A('</g>')
    A(f'<circle cx="330" cy="631" r="88" fill="none" stroke="{P["sym_dim"]}" stroke-width="2"/>')
    # roll pointer + bank scale
    for ang, ln in [(-60, 8), (-45, 6), (-30, 8), (-20, 5), (0, 10), (20, 5), (30, 8), (45, 6), (60, 8)]:
        A(f'<line x1="330" y1="543" x2="330" y2="{543+ln}" stroke="{P["sym"]}" stroke-width="1.6" '
          f'transform="rotate({ang} 330 631)"/>')
    A(f'<path d="M330 557 L322 571 H338 Z" fill="{P["sym"]}" transform="rotate(-8 330 631)"/>')
    # aircraft reference
    A(f'<g stroke="{P["warn"]}" stroke-width="3" fill="none" stroke-linecap="round">'
      f'<line x1="284" y1="631" x2="312" y2="631"/><line x1="348" y1="631" x2="376" y2="631"/>'
      f'<line x1="330" y1="631" x2="330" y2="631.1"/></g>')
    A(f'<circle cx="330" cy="631" r="3.4" fill="{P["warn"]}"/>')
    A(txt(170, 532, 'ADI', P['label'], 12, weight='600'))
    A(txt(330, 740, 'PITCH -2.4   ROLL 2L', P['sym_dim'], 11, 'middle'))

    # ---------- pane 2: HSI ----------
    cx, cy, r = 660, 631, 88
    A(f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="none" stroke="{P["sym_dim"]}" stroke-width="2"/>')
    for i in range(36):
        ang = i * 10
        long = (i % 3 == 0)
        ln = 12 if long else 6
        A(f'<line x1="{cx}" y1="{cy-r}" x2="{cx}" y2="{cy-r+ln}" stroke="{P["sym"]}" '
          f'stroke-width="{1.6 if long else 1}" transform="rotate({ang} {cx} {cy})" opacity="0.9"/>')
    # course needle
    A(f'<g transform="rotate(3 {cx} {cy})" stroke="{P["sym"]}" stroke-width="2.6" stroke-linecap="round">'
      f'<line x1="{cx}" y1="{cy-r+16}" x2="{cx}" y2="{cy-24}"/>'
      f'<line x1="{cx}" y1="{cy+24}" x2="{cx}" y2="{cy+r-16}"/>'
      f'<path d="M{cx} {cy-r+8} L{cx-7} {cy-r+22} H{cx+7} Z" fill="{P["sym"]}" stroke="none"/></g>')
    # deviation bar
    A(f'<line x1="{cx+8}" y1="{cy-22}" x2="{cx+8}" y2="{cy+22}" stroke="{P["warn"]}" stroke-width="2.6"/>')
    for dx in (-30, -15, 15, 30):
        A(f'<circle cx="{cx+dx}" cy="{cy}" r="2.4" fill="none" stroke="{P["sym_dim"]}" stroke-width="1.4"/>')
    # heading bug
    A(f'<path d="M{cx-6} {cy-r-2} L{cx} {cy-r+8} L{cx+6} {cy-r-2} Z" fill="{P["warn"]}" transform="rotate(12 {cx} {cy})"/>')
    A(f'<path d="M{cx} {cy-r-10} L{cx-7} {cy-r-1} H{cx+7} Z" fill="{P["label"]}"/>')
    import math
    for lab, ang in [('N', 0), ('E', 90), ('S', 180), ('W', 270)]:
        rad = math.radians(ang - 90)
        lx = cx + (r - 24) * math.cos(rad)
        ly = cy + (r - 24) * math.sin(rad) + 5
        A(f'<circle cx="{lx}" cy="{ly-5}" r="10" fill="{P["screen"]}" opacity="0.85"/>')
        A(txt(lx, ly, lab, P['sym'], 13, 'middle', weight='600'))
    A(txt(500, 532, 'HSI', P['label'], 12, weight='600'))
    A(txt(660, 740, 'HDG 047   CRS 050   DME 5.2', P['sym_dim'], 11, 'middle'))

    # ---------- pane 3: moving map ----------
    A('<g clip-path="url(#cpMAP)">')
    A(f'<rect x="838" y="540" width="300" height="182" fill="{P["map_land"]}"/>')
    A(f'<path d="M838 648 C900 630, 950 672, 1010 656 C1070 640, 1110 678, 1138 664 V722 H838 Z" fill="{P["map_water"]}" opacity="0.8"/>')
    for y in range(552, 723, 26):
        A(f'<line x1="838" y1="{y}" x2="1138" y2="{y}" stroke="{P["map_line"]}" stroke-width="0.6" opacity="0.35"/>')
    for x in range(852, 1139, 26):
        A(f'<line x1="{x}" y1="540" x2="{x}" y2="722" stroke="{P["map_line"]}" stroke-width="0.6" opacity="0.35"/>')
    # airways + route
    A(f'<path d="M988 716 L988 646 L1040 588 L1086 556" fill="none" stroke="{P["map_route"]}" '
      f'stroke-width="2.6" stroke-linejoin="round"/>')
    for wx, wy, nm in [(988, 646, 'TYI'), (1040, 588, 'PSK'), (1086, 556, 'KGSO')]:
        A(f'<path d="M{wx} {wy-6} L{wx+6} {wy} L{wx} {wy+6} L{wx-6} {wy} Z" fill="none" stroke="{P["sym"]}" stroke-width="1.8"/>')
        A(txt(wx + 11, wy + 4, nm, P['sym'], 10))
    A(f'<circle cx="988" cy="716" r="46" fill="none" stroke="{P["sym_dim"]}" stroke-width="1" opacity="0.7"/>')
    A(f'<circle cx="988" cy="716" r="92" fill="none" stroke="{P["sym_dim"]}" stroke-width="1" opacity="0.5"/>')
    A(f'<path d="M988 704 L980 724 L988 718 L996 724 Z" fill="{P["warn"]}"/>')
    A('</g>')
    A(f'<rect x="838" y="540" width="300" height="182" rx="4" fill="none" stroke="{P["sym_dim"]}" stroke-width="1.4"/>')
    A(txt(838, 532, 'MAP', P['label'], 12, weight='600'))
    A(txt(1138, 532, '10 NM', P['sym'], 11, 'end'))
    A(txt(988, 740, 'TRK 047   GS 165 KT', P['sym_dim'], 11, 'middle'))

    # ---------- pane 4: synthetic vision ----------
    A('<g clip-path="url(#cpSVS)">')
    A(f'<rect x="1160" y="540" width="286" height="90" fill="{P["adi_sky"]}" opacity="0.75"/>')
    A(f'<rect x="1160" y="630" width="286" height="92" fill="{P["map_land"]}"/>')
    A(f'<line x1="1160" y1="630" x2="1446" y2="630" stroke="{P["sym"]}" stroke-width="1.8" opacity="0.9"/>')
    for i in range(-6, 7):
        A(f'<line x1="{1303 + i*10}" y1="630" x2="{1303 + i*52}" y2="722" stroke="{P["map_line"]}" '
          f'stroke-width="0.8" opacity="0.55"/>')
    for j, y in enumerate(range(642, 723, 16)):
        A(f'<line x1="1160" y1="{y}" x2="1446" y2="{y}" stroke="{P["map_line"]}" stroke-width="0.8" opacity="0.45"/>')
    # runway
    A(f'<path d="M1292 632 L1314 632 L1336 700 L1270 700 Z" fill="{P["screen"]}" opacity="0.65" '
      f'stroke="{P["sym"]}" stroke-width="1.6"/>')
    A(f'<line x1="1303" y1="634" x2="1303" y2="698" stroke="{P["sym"]}" stroke-width="1" '
      f'stroke-dasharray="6 7" opacity="0.9"/>')
    A(f'<circle cx="1303" cy="606" r="9" fill="none" stroke="{P["warn"]}" stroke-width="2"/>')
    A(f'<line x1="1294" y1="606" x2="1284" y2="606" stroke="{P["warn"]}" stroke-width="2"/>')
    A(f'<line x1="1312" y1="606" x2="1322" y2="606" stroke="{P["warn"]}" stroke-width="2"/>')
    A('</g>')
    A(f'<rect x="1160" y="540" width="286" height="182" rx="4" fill="none" stroke="{P["sym_dim"]}" stroke-width="1.4"/>')
    A(txt(1160, 532, 'SVS', P['label'], 12, weight='600'))
    A(txt(1446, 532, 'RWY 05L', P['sym'], 11, 'end'))
    A(txt(1303, 740, 'TERR   RA 1560 FT', P['sym_dim'], 11, 'middle'))

    # pane dividers
    for x in (490, 820, 1148):
        A(f'<line x1="{x}" y1="518" x2="{x}" y2="744" stroke="{P["bezel"]}" stroke-width="3"/>')

    # ---------- bezel soft keys ----------
    for i, s in enumerate(['MENU', 'DCLT', 'RNG', 'TEST', 'BRT']):
        x = 200 + i * 118
        A(f'<rect x="{x}" y="774" width="86" height="20" rx="4" fill="{P["shell_lo"]}" opacity="0.9"/>')
        A(txt(x + 43, 788, s, P['label'], 10, 'middle'))

    # ---------- side consoles ----------
    A(f'<path d="M0 452 H140 V1000 H0 Z" fill="url(#shell)"/>')
    A(f'<path d="M1460 452 H1600 V1000 H1460 Z" fill="url(#shell)"/>')
    left = ['LDG GEAR', 'FLAPS', 'ANTI ICE', 'PITOT HT', 'EXT LTS', 'BATT']
    right = ['RADAR', 'IFF', 'FUEL PMP', 'HYD 1', 'HYD 2', 'GEN']
    for i, s in enumerate(left):
        y = 500 + i * 62
        A(f'<rect x="20" y="{y}" width="100" height="30" rx="4" fill="{P["panel"]}"/>')
        A(f'<rect x="28" y="{y+7}" width="16" height="16" rx="3" fill="{P["sym"]}" opacity="0.45"/>')
        A(txt(52, y + 20, s, P['label'], 10))
    for i, s in enumerate(right):
        y = 500 + i * 62
        A(f'<rect x="1480" y="{y}" width="100" height="30" rx="4" fill="{P["panel"]}"/>')
        A(f'<rect x="1488" y="{y+7}" width="16" height="16" rx="3" fill="{P["warn"] if s=="IFF" else P["sym"]}" opacity="0.45"/>')
        A(txt(1512, y + 20, s, P['label'], 10))

    # ---------- lower pedestal + stick ----------
    A(f'<path d="M140 768 H1460 V1000 H140 Z" fill="url(#panel)"/>')
    A(f'<path d="M300 810 H1300 V1000 H300 Z" fill="{P["shell_lo"]}" opacity="0.5"/>')
    # throttle quadrant
    A(f'<rect x="360" y="846" width="150" height="120" rx="10" fill="{P["shell"]}"/>')
    for i in range(2):
        A(f'<rect x="{382 + i*54}" y="862" width="30" height="88" rx="12" fill="{P["shell_lo"]}"/>')
        A(f'<rect x="{382 + i*54}" y="{876 + i*10}" width="30" height="26" rx="12" fill="{P["shell_hi"]}"/>')
    A(txt(435, 986, 'THROTTLE', P['label_dim'], 10, 'middle'))
    # centre stick
    A(f'<path d="M770 1000 L782 900 H818 L830 1000 Z" fill="{P["shell_lo"]}"/>')
    A(f'<path d="M778 916 C778 880, 822 880, 822 916 L818 946 H782 Z" fill="{P["shell"]}"/>')
    A(f'<circle cx="800" cy="892" r="15" fill="{P["shell_hi"]}"/>')
    A(f'<circle cx="794" cy="886" r="4" fill="{P["shell_lo"]}"/>')
    A(f'<circle cx="807" cy="890" r="3.4" fill="{P["shell_lo"]}"/>')
    # standby instruments
    A(f'<rect x="1020" y="846" width="120" height="120" rx="8" fill="{P["bezel"]}"/>')
    A(f'<circle cx="1080" cy="906" r="42" fill="none" stroke="{P["sym_dim"]}" stroke-width="2"/>')
    A(f'<line x1="1080" y1="906" x2="1080" y2="874" stroke="{P["sym"]}" stroke-width="2.4" transform="rotate(38 1080 906)"/>')
    A(txt(1080, 986, 'STBY ALT', P['label_dim'], 10, 'middle'))

    # ---------- ambient wash ----------
    A(f'<rect width="1600" height="1000" fill="{P["wash"]}" opacity="{P["wash_op"]}"/>')
    A('</svg>')
    return '\n'.join(o)


for P in (DARK, LIGHT):
    out = f'src/assets/hero/hero_home_{P["name"]}.svg'
    io.open(out, 'w', encoding='utf-8').write(build(P))
    print('wrote', out)
