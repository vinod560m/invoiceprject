let labour_charge_input 		= document.getElementById('labour_charges');
let labourChargesOutput 		= document.getElementById('labourCharges');
let pfOutput 					= document.getElementById('pfOutput');
let esiOutput 					= document.getElementById('esi');
let lwfOutput 					= document.getElementById('lwf');
let service_charges_input 		= document.getElementById('service_charges');
let serviceChargeOutput 		= document.getElementById('serviceCharge');
let totalAmountOutput 			= document.getElementById('total_amount');
let gstOutput 					= document.getElementById('gst_amount');
let afterGstTotalAmountOutput 	= document.getElementById('after_gst_amount');
let pf 							= document.getElementById('pf');  //value in percent
let esi 						= 3.25; //value in percent
let lwf 						= 0.4;  //value in percent
let gst 						= 18; 	//value in percent
function calculateAmount(){
	let labour_cost 			= labour_charge_input.value;
	let service_charges_cost 	= service_charges_input.value;
	let pf_cost 				= 0;
	if(pf.value){
		pf_cost 				= pf.value
	}
	let pf_amount 				= 0;
	let esi_amount 				= 0;
	let lwf_amount 				= 0;
	let service_charge_amount 	= 0;
	let total_amout 			= 0;
	let gst_amount 				= 0;
	let after_gst_total 		= 0;
	if(labour_cost){
		labour_cost 				= parseInt(labour_cost);
		pf_amount 					= Math.round((labour_cost*pf_cost)/100);
		esi_amount 					= Math.round((labour_cost*esi)/100);
		lwf_amount 					= Math.round((labour_cost*lwf)/100);
		service_charge_amount 		= Math.round((labour_cost*service_charges_cost)/100);
		total_amout 				= Math.round(labour_cost+pf_amount+esi_amount+lwf_amount+service_charge_amount);
		gst_amount 					= Math.round((total_amout*gst)/100);
		after_gst_total 			= Math.round(total_amout + gst_amount);
	}
	labourChargesOutput.innerHTML 			= labour_cost
	pfOutput.innerHTML 						= pf_amount
	esiOutput.innerHTML 					= esi_amount
	lwfOutput.innerHTML 					= lwf_amount
	serviceChargeOutput.innerHTML 			= service_charge_amount	
	totalAmountOutput.innerHTML 			= total_amout	
	gstOutput.innerHTML 					= gst_amount	
	afterGstTotalAmountOutput.innerHTML 	= after_gst_total	
}


let company_details 			= document.getElementById('company_details');
let consignee_details 			= document.getElementById('consignee_details');
let buyer_details 				= document.getElementById('buyer_details');
let invoice_no 					= document.getElementById('invoice_no');
let dated 						= document.getElementById('dated');
let delivery_note 				= document.getElementById('delivery_note');
let mode 						= document.getElementById('mode');
let reference_no 				= document.getElementById('reference_no');
let other_references 			= document.getElementById('other_references');
let buyers_order_no 			= document.getElementById('buyers_order_no');
let buyers_date 				= document.getElementById('buyers_date');
let dispatch_doc_no 			= document.getElementById('dispatch_doc_no');
let delivery_note_date 			= document.getElementById('delivery_note_date');
let dispatch_through 			= document.getElementById('dispatch_through');
let destination 				= document.getElementById('destination');
let terms_of_delivery 			= document.getElementById('terms_of_delivery');

// pdf converter

function convertPdf(){
	let htmlEl = `<div>
    <h3 style="text-align: center;">Tax Invoice</h3>
    <table style="width: 100%;" border="1" cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td style="width:45%;vertical-align: text-top;">
                <table style="width:100%" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td style="padding:10px;border-bottom: 1px solid black;">${company_details.value}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px;border-bottom: 1px solid black;"><p style="font-weight:600; margin-top:0px;margin-bottom:0px;">Consignee (Ship to)</p>${consignee_details.value}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px;border-bottom: 1px solid black;"><p style="font-weight:600; margin-top:0px;margin-bottom:0px;">Buyer (Bill to)</p>${buyer_details.value}</td>
                    </tr>
                  </tbody>
                </table>
            </td>
            <td style="width:55%;vertical-align: text-top;">
                <table style="width:100%;vertical-align: text-top;" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td style="padding:10px;border-bottom: 1px solid black;border-right: 1px solid black;">
                        <p style="margin-bottom: 0px;margin-top: 0px;">Invoice No. / e-Way Bill No.</p>
                        <h5 style="margin-bottom: 0px;margin-top: 0px;" id="invoice_no_output">${invoice_no.value}</h5>
                      </td>
                      <td style="padding:10px;border-bottom: 1px solid black;">
                        <p style="margin-bottom: 0px;margin-top: 0px;">Dated</p>
                        <h5 style="margin-bottom: 0px;margin-top: 0px;" id="dated_output">${dated.value}</h5>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:10px;border-bottom: 1px solid black;border-right: 1px solid black;">
                        <p style="margin-bottom: 0px;margin-top: 0px;">Delivary Note</p>
                        <h5 style="margin-bottom: 0px;margin-top: 0px;" id="delivery_note_output">${delivery_note.value}</h5>
                      </td>
                      <td style="padding:10px;border-bottom: 1px solid black;">
                        <p style="margin-bottom: 0px;margin-top: 0px;">Mode/Terms of Payment</p>
                        <h5 style="margin-bottom: 0px;margin-top: 0px;" id="mode_output">${mode.value}</h5>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:10px;border-bottom: 1px solid black;border-right: 1px solid black;">
                        <p style="margin-bottom: 0px;margin-top: 0px;">Reference No & Date.</p>
                        <h5 style="margin-bottom: 0px;margin-top: 0px;" id="reference_no_output">${reference_no.value}</h5>
                      </td>
                      <td style="padding:10px;border-bottom: 1px solid black;">
                        <p style="margin-bottom: 0px;margin-top: 0px;">Other References</p>
                        <h5 style="margin-bottom: 0px;margin-top: 0px;" id="other_references_output">${other_references.value}</h5>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:10px;border-bottom: 1px solid black;border-right: 1px solid black;">
                        <p style="margin-bottom: 0px;margin-top: 0px;">Buyer's Order No.</p>
                        <h5 style="margin-bottom: 0px;margin-top: 0px;" id="buyers_order_no_output">${buyers_order_no.value}</h5>
                      </td>
                      <td style="padding:10px;border-bottom: 1px solid black;">
                        <p style="margin-bottom: 0px;margin-top: 0px;">Date.</p>
                        <h5 style="margin-bottom: 0px;margin-top: 0px;" id="buyer_date_output">${buyers_date.value}</h5>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:10px;border-bottom: 1px solid black;border-right: 1px solid black;">
                        <p style="margin-bottom: 0px;margin-top: 0px;">Dispatch Doc No.</p>
                        <h5 style="margin-bottom: 0px;margin-top: 0px;" id="dispatch_doc_no_output">${dispatch_doc_no.value}</h5>
                      </td>
                      <td style="padding:10px;border-bottom: 1px solid black;">
                        <p style="margin-bottom: 0px;margin-top: 0px;">Delivery Note Date</p>
                        <h5 style="margin-bottom: 0px;margin-top: 0px;" id="delivery_note_date_output">${delivery_note_date.value}</h5>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:10px;border-bottom: 1px solid black;border-right: 1px solid black;">
                        <p style="margin-bottom: 0px;margin-top: 0px;">Dispatch Through</p>
                        <h5 style="margin-bottom: 0px;margin-top: 0px;" id="dispatch_through_output">${dispatch_through.value}</h5>
                      </td>
                      <td style="padding:10px;border-bottom: 1px solid black;">
                        <p style="margin-bottom: 0px;margin-top: 0px;">Destination</p>
                        <h5 style="margin-bottom: 0px;margin-top: 0px;" id="destination_output">${destination.value}</h5>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:10px 10px;" colspan="2">
                        <p style="margin-bottom: 0px;margin-top: 0px;">Terms of Delivery</p>
                        <h5 style="margin-bottom: 0px;margin-top: 0px;" id="terms_of_delivery_output">${terms_of_delivery.value}</h5>
                      </td>
                      
                    </tr>
                  </tbody>
                </table>
            </td>
          </tr>
          <tr>
            <td colspan="2">
                <table style="width:100%;" cellspacing="0" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="padding:10px;border-right:1px solid black;border-bottom:1px solid black;text-align: center;">Sr. No.</th>
                      <th style="padding:10px;border-right:1px solid black;border-bottom:1px solid black;text-align: center;">
                        <p style="margin-bottom:0px;margin-top:0px;">Description of</p>
                        <h4 style="margin-bottom:0px;margin-top:0px;">Goods and Services</h4>
                      </th>
                      <th style="padding:10px;border-right:1px solid black;border-bottom:1px solid black;text-align: center;">HSN/SAC</th>
                      <th style="padding:10px;border-right:1px solid black;border-bottom:1px solid black;text-align: center;">Rate</th>
                      <th style="padding:10px;border-right:1px solid black;border-bottom:1px solid black;text-align: center;">Per</th>
                      <th style="padding:10px;border-bottom:1px solid black;text-align: center;">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="padding:2px 10px;border-right:1px solid black;">1</td>
                      <td style="padding:2px 10px;border-right:1px solid black;">LABOUR CHARGES</td>
                      <td style="padding:2px 10px;border-right:1px solid black;">998519</td>
                      <td style="padding:2px 10px;border-right:1px solid black;text-align: right;">${labourChargesOutput.innerHTML}</td>
                      <td style="padding:2px 10px;border-right:1px solid black;">Month</td>
                      <td style="padding:2px 10px;text-align: right;">${labourChargesOutput.innerHTML}</td>
                    </tr>
                    <tr>
                      <td style="padding:2px 10px;border-right:1px solid black;">2</td>
                      <td style="padding:2px 10px;border-right:1px solid black;">P.F 13%</td>
                      <td style="padding:2px 10px;border-right:1px solid black;">998519</td>
                      <td style="padding:2px 10px;border-right:1px solid black;text-align: right;">${pfOutput.innerHTML}</td>
                      <td style="padding:2px 10px;border-right:1px solid black;">Month</td>
                      <td style="padding:2px 10px;text-align: right;">${pfOutput.innerHTML}</td>
                    </tr>
                    <tr>
                      <td style="padding:2px 10px;border-right:1px solid black;">3</td>
                      <td style="padding:2px 10px;border-right:1px solid black;">E.S.I 13%</td>
                      <td style="padding:2px 10px;border-right:1px solid black;">998519</td>
                      <td style="padding:2px 10px;border-right:1px solid black;text-align: right;">${esiOutput.innerHTML}</td>
                      <td style="padding:2px 10px;border-right:1px solid black;">Month</td>
                      <td style="padding:2px 10px;text-align: right;">${esiOutput.innerHTML}</td>
                    </tr>
                    <tr>
                      <td style="padding:2px 10px;border-right:1px solid black;">4</td>
                      <td style="padding:2px 10px;border-right:1px solid black;">L.W.F 13%</td>
                      <td style="padding:2px 10px;border-right:1px solid black;">998519</td>
                      <td style="padding:2px 10px;border-right:1px solid black;text-align: right;">${lwfOutput.innerHTML}</td>
                      <td style="padding:2px 10px;border-right:1px solid black;">Month</td>
                      <td style="padding:2px 10px;text-align: right;">${lwfOutput.innerHTML}</td>
                    </tr>
                    <tr>
                      <td style="padding:2px 10px;border-right:1px solid black;">4</td>
                      <td style="padding:2px 10px;border-right:1px solid black;">SERVICE CHARGES</td>
                      <td style="padding:2px 10px;border-right:1px solid black;">998519</td>
                      <td style="padding:2px 10px;border-right:1px solid black;text-align: right;">${serviceChargeOutput.innerHTML}</td>
                      <td style="padding:2px 10px;border-right:1px solid black;">Month</td>
                      <td style="padding:2px 10px;text-align: right;">${serviceChargeOutput.innerHTML}</td>
                    </tr>
                    <tr>
                      <td style="padding:2px 10px;border-right:1px solid black;"></td>
                      <td style="padding:2px 10px;border-right:1px solid black;"></td>
                      <td style="padding:2px 10px;border-right:1px solid black;"></td>
                      <td style="padding:2px 10px;border-right:1px solid black;"></td>
                      <td style="padding:2px 10px;border-right:1px solid black;"></td>
                      <td style="padding:2px 10px;border-top:1px solid black;text-align: right;">${totalAmountOutput.innerHTML}</td>
                    </tr>
                      <td style="padding:20px 10px 50px;border-right:1px solid black;"></td>
                      <td style="padding:20px 10px 50px;border-right:1px solid black;text-align: right;">I GST @ 18%</td>
                      <td style="padding:20px 10px 50px;border-right:1px solid black;"></td>
                      <td style="padding:20px 10px 50px;border-right:1px solid black;text-align: right;">18%</td>
                      <td style="padding:20px 10px 50px;border-right:1px solid black;"></td>
                      <td style="padding:20px 10px 50px;text-align: right;text-align: right;">${gstOutput.innerHTML}</td>
                    </tr>
                    <tr>
                      <td style="padding:2px 10px;border-right:1px solid black;border-top:1px solid black;"></td>
                      <td style="padding:2px 10px;border-right:1px solid black;border-top:1px solid black;text-align: right;">Total</td>
                      <td style="padding:2px 10px;border-right:1px solid black;border-top:1px solid black;"></td>
                      <td style="padding:2px 10px;border-right:1px solid black;border-top:1px solid black;"></td>
                      <td style="padding:2px 10px;border-right:1px solid black;border-top:1px solid black;"></td>
                      <td style="padding:2px 10px;border-top:1px solid black;text-align: right;">₹ ${afterGstTotalAmountOutput.innerHTML}</td>
                    </tr>
                  </tbody>
                </table>
            </td>  
          </tr>
          <tr>
            <td colspan="2">
              <table style="width:100%" cellspacing="0" cellpadding="0">
                	<tr>
                      <td style="padding:2px 10px 30px;">Amount Chargeable (in words)
                      	<p style="margin-top:0px">${numberToWords(afterGstTotalAmountOutput.innerHTML)}</p>
                      </td>
                      <td style="padding:2px 10px 30px;text-align: right;">E. & O.E</td>
                    </tr>
                    <tr>
                      <td style="padding:2px 10px;" colspan="2"><span style="text-decoration: underline;">Declaration</span>
                        <p style="margin-top:0px">
                          We declare that this invoice shows the actual price of the<br> goods described and that all particulars are true and correct.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:2px 10px 10px;border-top:1px solid black;border-right:1px solid black;">Customer's Seal and Signature</td>
                      <td style="padding:2px 10px 10px;border-top:1px solid black;text-align: right;">for M/S INDIA RISING WAVE
                        <P style="margin-top: 30px;margin-bottom: 0px;">Authorised Signatory</P>
                      </td>
                    </tr>
              </table>
            </td>
          </tr>
        </tbody>
    </table>
  </div>`;
    let printWindow = window.open('', '', 'height=600,width=900');
    printWindow.document.write('<html><head><title>Invoce</title>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(htmlEl);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();                
}

function numberToWords(num) {
    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const thousands = ["", "Thousand", "Million", "Billion", "Trillion"];
    
    if (num === 0) return "Zero";

    let words = "";
    let i = 0;

    while (num > 0) {
        if (num % 1000 !== 0) {
            words = `${helper(num % 1000)} ${thousands[i]} ${words}`;
        }
        num = Math.floor(num / 1000);
        i++;
    }

    return words.trim();

    function helper(num) {
        if (num === 0) return "";
        if (num < 20) return ones[num];
        if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? " " + ones[num % 10] : "");
        return ones[Math.floor(num / 100)] + " Hundred" + (num % 100 !== 0 ? " " + helper(num % 100) : "");
    }
}









