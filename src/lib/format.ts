import type { PianoApp } from '../data/apps';
import { LAST_VERIFIED_LABEL } from '../data/apps';

export function money(n: number | undefined): string {
  if (n === undefined) return 'See site';
  return `$${n.toLocaleString('en-US')}`;
}

export function annualLine(app: PianoApp): string {
  const p = app.pricing;
  const parts: string[] = [];
  if (p.annual !== undefined) parts.push(`${money(p.annual)}/yr`);
  if (p.monthly !== undefined) parts.push(`${money(p.monthly)}/mo`);
  if (p.lifetime !== undefined) parts.push(`${money(p.lifetime)} lifetime`);
  return parts.length ? parts.join(' · ') : 'Pricing varies — see site';
}

export function inputLabel(input: PianoApp['inputMethod']): string {
  if (input === 'both') return 'Mic or MIDI';
  if (input === 'mic') return 'Microphone';
  if (input === 'none') return 'Visual — no note detection';
  return 'MIDI';
}

export function libraryLabel(app: PianoApp): string {
  if (app.songLibrarySize == null) return 'Undisclosed';
  return `${app.songLibrarySize.toLocaleString('en-US')}+`;
}

export function totalRatings(app: PianoApp): number {
  return (app.ratings.appStore?.count ?? 0) + (app.ratings.googlePlay?.count ?? 0);
}

export function verifiedStamp(): string {
  return `Prices and ratings verified ${LAST_VERIFIED_LABEL}.`;
}

export function reviewUrl(app: PianoApp): string {
  return `/${app.slug}-review/`;
}

export function vsUrl(a: PianoApp, b: PianoApp): string {
  return `/${a.slug}-vs-${b.slug}/`;
}

export function alternativesUrl(app: PianoApp): string {
  return `/${app.slug}-alternatives/`;
}
