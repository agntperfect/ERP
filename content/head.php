<?php 
    // This is use for head of the page
    include "database/index.php";
?>
<div class="head">
    <aside>
        <div class="top">
            <div class="logo">
                <kab-logo></kab-logo>
                <h2><div class="company">Cybercratic Nations</div></h2>
            </div> 
            <div class="close" id="close-btn"><i id="close-icon" class="close-icon"></i></div>
        </div>
        <div class="navigator">
            <div class="sidebar">
                <button class="dashboard-btn"><i class="dashboard-icon" id="dashboard-icon"></i><h3>Dashboard</h3></button>
                <button class="customers-btn"><i class="person-icon" id="person-icon"></i><h3>Customers</h3></button>
                <button class="orders-btn"> <i class="receipt_long-icon" id="recipt_long-icon"></i><h3>Orders</h3></button>
                <button class="analytics-btn"><i id="insights-icon" class="insights-icon"></i><h3>Analytics</h3></button>
                <button class="messages-btn"><i id="mail-icon" class="mail-icon"></i><h3>Messages</h3></button>
                <button class="products-btn"><i id="product-icon" class="product-icon"></i><h3>Products</h3></button>
                <button class="reports-btn"><i id="report-icon" class="report-icon"></i><h3>Reports</h3></button>
                <button class="add_product-btn"><i id="add-icon" class="add-icon"></i> <h3>Add Product</h3></button>
                <button class="settings-btn"><i id="settings-icon" class="settings-icon"></i><h3> Settings</h3></button>
            </div>
        </div>
    </aside>
</div>