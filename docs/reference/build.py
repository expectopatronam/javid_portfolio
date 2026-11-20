import json, html
A = json.load(open('assets.json'))
ICON = {
 'ios': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.37 12.6c.02 2.6 2.28 3.47 2.3 3.48-.02.06-.36 1.24-1.19 2.45-.72 1.05-1.47 2.1-2.65 2.12-1.16.02-1.53-.69-2.86-.69-1.33 0-1.74.67-2.84.71-1.14.04-2.01-1.13-2.74-2.18-1.49-2.15-2.62-6.08-1.1-8.73.76-1.31 2.11-2.14 3.58-2.16 1.12-.02 2.17.75 2.86.75.68 0 1.96-.93 3.31-.79.56.02 2.15.23 3.17 1.71-.08.05-1.89 1.1-1.87 3.3M14.2 4.2c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.55 1.31-.56.65-1.05 1.68-.92 2.67.97.08 1.96-.49 2.57-1.22"/></svg>',
 'play': '<svg viewBox="0 0 24 24"><path fill="#34A853" d="M3.6 2.2 13.3 12l-9.7 9.8c-.4-.2-.6-.6-.6-1.1V3.3c0-.5.2-.9.6-1.1z"/><path fill="#FBBC04" d="m16.6 15.3-3.3-3.3 3.3-3.3 3.8 2.2c1.1.6 1.1 1.6 0 2.2z"/><path fill="#4285F4" d="M16.6 15.3 13.3 12l-9.7 9.8c.3.2.8.2 1.3-.1z"/><path fill="#EA4335" d="M16.6 8.7 4.9 2.3c-.5-.3-1-.3-1.3-.1l9.7 9.8z"/></svg>',
 'web': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"/></svg>',
}
LABEL = {'ios':'App Store','play':'Google Play','web':'Website'}
apps = [
 dict(k='selfitoons', name='Selfitoons', where='Doubletap', tags='ai', color='#7C5CFF',
      line='Turn a selfie and a voice note into a short AI video, then share it on a social feed.',
      stack=['Flutter','Riverpod','FFmpeg','FastAPI','OpenAI','Kling AI'],
      links=[('ios','https://apps.apple.com/in/app/selfitoons/id6758597947'),('play','https://play.google.com/store/apps/details?id=com.doubletap.ai.selfitoons'),('web','https://selfitoons.ai/')]),
 dict(k='internsharks', name='Internsharks', where='Doubletap', tags='ai community', color='#19D3E6',
      line='A career network for students and recruiters. The AI resume builder shows a live PDF as you type.',
      stack=['Flutter','GetX','React','ChatGPT'],
      links=[('play','https://play.google.com/store/apps/details?id=com.doubletap.internsharks.ai'),('web','https://internsharks.ai/')]),
 dict(k='fulupo', name='Fulupo Store', where='Doubletap', tags='ai fintech', color='#9BD12E',
      line='Retail billing app. Scan several items with the camera and they land in the cart, no barcodes.',
      stack=['Flutter','Camera','Computer Vision'],
      links=[('play','https://play.google.com/store/apps/details?id=com.doubletap.fulupostore')]),
 dict(k='ubill', name='Ubill', where='Ecfile Solutions', tags='fintech', color='#5B3FD6',
      line='Cloud accounting and GST billing. Live GST while you edit an invoice, ledgers, bulk Excel import.',
      stack=['Flutter Web','Provider','Node.js','MongoDB','JS Interop'],
      links=[('play','https://play.google.com/store/apps/details?id=com.ubill.tech'),('web','https://app.ubill.tech/')]),
 dict(k='bizstack', name='Bizstack', where='Independent', tags='fintech', color='#2F80ED',
      line='Offline-first POS. Works with no internet and syncs to the cloud when it comes back.',
      stack=['Kotlin','Jetpack Compose','Room','Django','Cloud Run'],
      links=[('play','https://play.google.com/store/apps/details?id=com.nativedesk.bizstack')]),
 dict(k='ern', name='Engine Room Ninja', where='Freelance', tags='community', color='#2DBE5A',
      line='A Q&A community where marine engineers ask and answer technical questions, with real-time chat.',
      stack=['Flutter','BLoC','WebSockets','Express','AWS S3'],
      links=[('play','https://play.google.com/store/apps/details?id=com.engine_room_ninja.marine_ninja')]),
]
cards=[]
for a in apps:
    links=''.join(f'<a class="store" href="{u}" target="_blank" rel="noopener">{ICON[t]}{LABEL[t]}</a>' for t,u in a['links'])
    chips=''.join(f'<span class="chip">{html.escape(s)}</span>' for s in a['stack'])
    cards.append(f'''
      <article class="app-card reveal card spot group flex flex-col" data-tags="{a['tags']}">
        <div class="relative h-[300px] overflow-hidden" style="background:radial-gradient(120% 90% at 50% 100%, {a['color']}55, transparent 60%), linear-gradient(180deg,#0E1118,#0B0D12)">
          <div class="absolute inset-0 grid-bg opacity-60"></div>
          <div class="phone sm absolute left-1/2 -translate-x-1/2 top-8 w-[170px] transition duration-500 group-hover:-translate-y-3 group-hover:rotate-[-2deg]">
            <div class="screen"><img src="{A['SHOT_'+a['k']]}" alt="{a['name']} screenshot" /></div>
          </div>
        </div>
        <div class="p-6 flex flex-col flex-1 border-t border-white/[.06]">
          <div class="flex items-center gap-3">
            <img src="{A['ICON_'+a['k']]}" alt="" class="w-11 h-11 rounded-xl ring-1 ring-white/10" />
            <div>
              <h3 class="font-display text-xl font-bold leading-tight">{a['name']}</h3>
              <div class="text-[12.5px] text-zinc-500">{a['where']}</div>
            </div>
          </div>
          <p class="text-zinc-400 text-[14.5px] leading-relaxed mt-4">{a['line']}</p>
          <div class="flex flex-wrap gap-1.5 mt-4">{chips}</div>
          <div class="flex flex-wrap gap-2 mt-auto pt-6">{links}</div>
        </div>
      </article>''')

tl = [
 dict(date='Dec 2025 — Present', role='Flutter Developer · Full-Stack & AI', org='Doubletap Innovations and Technologies', now=True,
      pts=['Built the Selfitoons feed with Riverpod and GoRouter, plus a pooled video player setup that stays smooth on cheap phones.',
           'Built the FastAPI video pipeline: Whisper, ChatGPT image editing, structured prompts with Pydantic, Kling and Grok.',
           'Own App Store and Play Store releases end to end for Selfitoons, Internsharks and Fulupo Store.'],
      tags=['Flutter','Riverpod','Node.js','FastAPI','Redis','OpenAI']),
 dict(date='Oct 2023 — Nov 2025', role='Flutter Full-Stack Developer', org='Ecfile Solutions', now=False,
      pts=['Built Ubill as a web-first Flutter app, with live Indian GST calculation (CGST/SGST vs IGST) while editing invoices.',
           'Rendered PDF invoices in the browser through JS Interop, reusing the backend HTML template.',
           'Wrote the Node.js + MongoDB APIs with JWT and role-based access, and migrated 650 users from the old billing app.'],
      tags=['Flutter Web','Provider','Node.js','Express','MongoDB']),
 dict(date='Alongside', role='Freelance & independent', org='Bizstack · Engine Room Ninja · InvusProp', now=False,
      pts=['Bizstack: offline-first POS in Kotlin and Jetpack Compose, with a Django backend on Cloud Run.',
           'Engine Room Ninja: community app in Flutter with BLoC, WebSocket chat and Google Play Billing.',
           'InvusProp: real-estate admin platform in Next.js and NestJS, with AWS Cognito and Terraform.'],
      tags=['Kotlin','Compose','BLoC','Next.js','NestJS','AWS']),
]
items=[]
for t in tl:
    dot = '<span class="absolute -left-8 sm:-left-10 top-1.5 w-[15px] h-[15px] sm:w-[19px] sm:h-[19px] rounded-full grid place-items-center bg-ink-950 border border-lime/70"><span class="w-[7px] h-[7px] rounded-full bg-lime"></span></span>' if t['now'] else '<span class="absolute -left-8 sm:-left-10 top-1.5 w-[15px] h-[15px] sm:w-[19px] sm:h-[19px] rounded-full bg-ink-950 border border-white/25"></span>'
    pts=''.join(f'<li class="flex gap-3"><span class="mt-[9px] w-1 h-1 rounded-full bg-zinc-500 shrink-0"></span><span>{p}</span></li>' for p in t['pts'])
    chips=''.join(f'<span class="chip">{c}</span>' for c in t['tags'])
    now = '<span class="ml-2 inline-flex items-center gap-1.5 rounded-full bg-lime/10 text-lime px-2 py-0.5 text-[11px] font-mono">now</span>' if t['now'] else ''
    items.append(f'''
      <li class="reveal relative pb-12 last:pb-0">
        {dot}
        <div class="font-mono text-[12.5px] text-zinc-500">{t['date']}{now}</div>
        <h3 class="font-display text-2xl font-bold mt-2">{t['role']}</h3>
        <div class="text-zinc-300 mt-1">{t['org']}</div>
        <ul class="mt-4 space-y-2.5 text-zinc-400 text-[15px] leading-relaxed">{pts}</ul>
        <div class="flex flex-wrap gap-1.5 mt-5">{chips}</div>
      </li>''')

stack = [
 ('Mobile', '▢', ['Flutter','Dart','iOS','Android','Flutter Web','Kotlin','Jetpack Compose'], 'lg:col-span-2'),
 ('State management', '◇', ['Riverpod','BLoC','GetX','Provider'], ''),
 ('AI & GenAI', '✦', ['OpenAI Whisper','ChatGPT image editing','Structured outputs','Pydantic','Kling AI','Grok','Computer vision'], ''),
 ('Backend', '⌘', ['Node.js','Express','NestJS','FastAPI','Django','REST','WebSockets'], ''),
 ('Data', '▤', ['MongoDB','PostgreSQL','Redis','Firebase','Hive','Room'], ''),
 ('Cloud & DevOps', '☁', ['AWS S3','AWS Cognito','Cloud Run','Docker','Terraform','Git'], ''),
 ('Video & payments', '▶', ['FFmpeg','Razorpay','Cashfree','Google Play Billing','AdMob'], ''),
 ('Shipping', '↗', ['App Store Connect','TestFlight','Play Console','Staged rollouts','Privacy manifests'], 'lg:col-span-1'),
]
sc=[]
for title, ic, items_, span in stack:
    chips=''.join(f'<span class="chip !text-[12.5px] !text-zinc-300 !py-1.5 !px-3">{c}</span>' for c in items_)
    sc.append(f'''
      <div class="reveal card spot p-6 {span}">
        <div class="flex items-center gap-3"><span class="w-9 h-9 rounded-xl grid place-items-center bg-white/[.05] border border-white/10 text-[15px] text-lime">{ic}</span><h3 class="font-display text-lg font-bold">{title}</h3></div>
        <div class="flex flex-wrap gap-2 mt-5">{chips}</div>
      </div>''')

marq = ''.join(f'<span class="flex items-center gap-10">{w}<span class="text-lime/60">✦</span></span>' for w in
  ['Flutter','Dart','Riverpod','BLoC','GetX','FFmpeg','FastAPI','Node.js','OpenAI','Kling AI','Grok','Redis','MongoDB','Firebase','Jetpack Compose','AWS','Docker','TestFlight','Play Console'])

out = open('src/template.html').read()
out = out.replace('{{APP_CARDS}}', ''.join(cards)).replace('{{TIMELINE}}', ''.join(items)).replace('{{STACK}}', ''.join(sc)).replace('{{MARQUEE}}', marq)
for k,v in A.items(): out = out.replace('{{'+k+'}}', v)
assert '{{' not in out, [l for l in out.split('\n') if '{{' in l][:3]
open('index.html','w').write(out)
print(len(out)//1024, 'KB')
