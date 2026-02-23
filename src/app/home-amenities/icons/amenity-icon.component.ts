import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type AmenityIconName =
  | 'high-speed-wifi'
  | 'clean-spaces'
  | 'free-parking'
  | 'fitness-center'
  | 'fine-dining'
  | 'technology-driven'
  | 'room-service'
  | 'laundry-service';

@Component({
  selector: 'app-amenity-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './amenity-icon.component.html',
  styleUrl: './amenity-icon.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AmenityIconComponent {
  @Input({ required: true }) name!: AmenityIconName;
  @Input() title?: string;
}
