[class.is-invalid]="orderForm.get('fuelOption')?.invalid && orderForm.get('fuelOption')?.touched"
            required



            <small class="text-danger" [class.d-none]="orderForm.get('fuelOption')?.valid || orderForm.get('fuelOption')?.untouched">Please choose a fuel option</small>