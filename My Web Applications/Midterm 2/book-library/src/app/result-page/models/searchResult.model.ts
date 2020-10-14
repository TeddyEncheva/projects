import { Volume } from './volume.model';

export interface VolumeList {
  kind?: string;
  totalItems?: number;
  items?: Array<Volume>;
}
