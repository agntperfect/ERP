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
                <button class="dashboard-btn"><i class="dashboard-icon" id="dashboard-icon"></i>Dashboard</button>
                <button class="customers-btn"><i class="person-icon" id="person-icon"></i>Customers</button>
                <button class="orders-btn"> <i class="receipt_long-icon" id="recipt_long-icon"></i>Orders</button>
                <button class="analytics-btn"><i id="insights-icon" class="insights-icon"></i>Analytics</button>
                <button class="messages-btn"><i id="mail-icon" class="mail-icon"></i>Messages</button>
                <button class="products-btn"><i id="product-icon" class="product-icon"></i>Products</button>
                <button class="reports-btn"><i id="report-icon" class="report-icon"></i>Reports</button>
                <button class="add_product-btn"><i id="add-icon" class="add-icon"></i> Add Product</button>
                <button class="settings-btn"><i id="settings-icon" class="settings-icon"></i> Settings</button>
            </div>
        </div>
    </aside>
</div>