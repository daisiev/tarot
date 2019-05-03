import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Reading } from '../models/reading.model';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
    addCardForm;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.createFormControls();
    }

    createFormControls() {
        this.addCardForm = this.formBuilder.group({
            date: Date.now(),
            spreadType: null,
            thoughts: null,
            reading: this.formBuilder.group({
                title: this.addCardForm.get('spreadType')
            })
        });
    }

    createCardControls(spread: Reading) {
        spread.cards.forEach(card => {
            this.addCardForm.get('reading').addControl(card.spreadPosition);
        });
    }

}
