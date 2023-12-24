import type { DocumentLink, DocumentMeta } from "@builder.io/qwik-city";
import { PWAOptions } from "./types";

export interface ResolvedIconAsset {
  path: string;
  mimeType: string;
  buffer: Promise<Buffer>;
  age: number;
  lastModified: number;
}

export interface DevHtmlAssets {
  meta: DocumentMeta[];
  link: DocumentLink[];
}

export interface ResolvedPWAOptions
  extends Required<Omit<PWAOptions, "image">> {
  images: string[];
}

export interface PWAAssetsGenerator {
  generate(): Promise<void>;
  findIconAsset(path: string): Promise<ResolvedIconAsset | undefined>;
  resolveHtmlLinks(wsEvent: string): Promise<string>;
  resolveDevHtmlAssets(): Promise<DevHtmlAssets>;
  checkHotUpdate(path: string): Promise<boolean>;
}