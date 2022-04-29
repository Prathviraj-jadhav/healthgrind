import React from 'react'

export default function SellerDashboard() {
  return (
	 
    <div>
<div class="container-fluid"/>
	<div class="row">
		<nav class="col-md-2 d-none d-md-block sidebar"/>
			<div class="sidebar-sticky">
				<ul class="nav flex-column"/>
					<li class="nav-item">
						<a class="nav-link active" href="#">
                  <i class="zmdi zmdi-widgets"></i>
                  Dashboard <span class="sr-only">(current)</span>
                </a>
					</li>

					<li class="nav-item"/>
						<a class="nav-link" href="/Asset/Components/Profile.html">
				  <i class="zmdi zmdi-chart"></i>
				  Profile
				</a>

				<li class="nav-item">
					<a class="nav-link" href="/Asset/Components/Profilecard.html">
			  <i class="zmdi zmdi-chart"></i>
			  Profilecards
			</a>
</li>
					<li class="nav-item">
						<a class="nav-link" href="/Asset/Components/Orders.html">
                  <i class="zmdi zmdi-file-text"></i>
                  Orders History
                </a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/Asset/Components/Products.html">
                  <i class="zmdi zmdi-shopping-cart"></i>
                  Products
                </a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/Asset/Components/Cutsomers.html">
                  <i class="zmdi zmdi-accounts"></i>
                  Customers
                </a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
                  <i class="zmdi zmdi-chart"></i>
                  Reports
                </a>
				</li>
				
				<ul/>

				<h6 class="sidebar-heading d-flex justify-content-between align-items-center pl-3 mt-4 mb-1 text-muted">
					<span>Saved reports</span>
					<a class="d-flex align-items-center text-muted" href="#">
						<i class="zmdi zmdi-plus-circle-o"></i>
					</a>
				</h6>
				<ul class="nav flex-column mb-2">
					<li class="nav-item">
						<a class="nav-link" href="#">
                  <i class="zmdi zmdi-file-text"></i>
                  Current month
                </a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
                  <i class="zmdi zmdi-file-text"></i>
                  Last quarter
                </a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
                  <i class="zmdi zmdi-file-text"></i>
                  Social engagement
                </a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
                  <i class="zmdi zmdi-file-text"></i>
                  Year-end sale
                </a>
					</li>
				</ul>
			</div>
		<nav/>
		<main role="main" class="col-md-9 ml-sm-auto col-lg-10 my-3">
			<div class="card-list">
				<div class="row">
					<div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
						<div class="card blue">
							<div class="title">All Products</div>
							<i class="zmdi zmdi-upload"></i>
							<div class="value">300</div>
							<div class="stat"><b>13</b>% increase</div>
						</div>
					</div>
					<div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
						<div class="card green">
							<div class="title">Sell Products</div>
							<i class="zmdi zmdi-upload"></i>
							<div class="value">1000</div>
							<div class="stat"><b>5</b>% increase</div>
						</div>
					</div>
					<div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
						<div class="card orange">
							<div class="title">total budget</div>
							<i class="zmdi zmdi-download"></i>
							<div class="value">Rs 100000</div>
							<div class="stat"><b>13</b>% decrease</div>
						</div>
					</div>
					<div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
						<div class="card red">
							<div class="title">new customers</div>
							<i class="zmdi zmdi-download"></i>
							<div class="value">50</div>
							<div class="stat"><b>13</b>% decrease</div>
						</div>
					</div>
				</div>
			</div>
			<div class="projects mb-4">
				<div class="projects-inner">
					<header class="projects-header">
						<div class="title">Products</div>
						<div class="count">| Products Available</div>
						<i class="zmdi zmdi-download"></i>
					</header>
					<table class="projects-table">
						<thead>
							<tr>
								<th>Medicines</th>
								<th>Delivery Date</th>
								<th>Delivery Boy</th>
								<th>Bill Process</th>
								<th>Status</th>
							</tr>
						</thead>
						<tr>
							<td>
								<p>New Medicine</p>
							</td>
							<td>
								<p>17th April, 22</p>
								<p class="text-danger">Overdue</p>
							</td>
							<td class="member">
								<figure><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png" /></figure>
								<div class="member-info">
									<p>Myrtle Erickson</p>
									<p>UK Design Team</p>
								</div>
							</td>
							<td>
								<p>RS 44,670</p>
								<p>Paid</p>
							</td>
							<td class="status">
								<span class="status-text status-orange">In progress</span>
							</td>
							<td>
								
							</td>
						</tr>
						<tr class="danger-item">
							<td>
								<p>New Medicine</p>
							</td>
							<td>
								<p>17th April, 22</p>
								<p class="text-danger">Overdue</p>
							</td>
							<td class="member">
								<figure><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png" /></figure>
								<div class="member-info">
									<p>Myrtle Erickson</p>
									<p>UK Design Team</p>
								</div>
							</td>
							<td>
								<p>RS 44,670</p>
								<p>Paid</p>
							</td>
							<td class="status">
								<span class="status-text status-red">Blocked</span>
							</td>
							<td>
								
								
							</td>
						</tr>
						<tr>
							<td>
								<p>New Medicine</p>
						
							</td>
							<td>
								<p>17th April, 22</p>
								<p class="text-danger">Overdue</p>
							</td>
							<td class="member">
								<figure><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png" /></figure>
								<div class="member-info">
									<p>Myrtle Erickson</p>
									<p>UK Design Team</p>
								</div>
							</td>
							<td>
								<p>Rs 4,670</p>
								<p>Paid</p>
							</td>
							<td class="status">
								<span class="status-text status-orange">In progress</span>
							</td>
							<td>
								
							</td>
						</tr>
						<tr>
							<td>
								<p>New Medicine</p>
								
							</td>
							<td>
								<p>17th April, 22</p>
								<p class="text-danger">Overdue</p>
							</td>
							<td class="member">
								<figure><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png" /></figure>
								<div class="member-info">
									<p>Myrtle Erickson</p>
									<p>UK Design Team</p>
								</div>
							</td>
							<td>
								<p>Rs 44,670</p>
								<p>Paid</p>
							</td>
							<td class="status">
								<span class="status-text status-blue">Early stages</span>
							</td>
							<td>
			
							</td>
						</tr>
						<tr>
							<td>
								<p>New Medicine</p>
			
							</td>
							<td>
								<p>17th April, 22</p>
								<p class="text-danger">Overdue</p>
							</td>
							<td class="member">
								<figure><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png" /></figure>
								<div class="member-info">
									<p>Myrtle Erickson</p>
									<p>UK Design Team</p>
								</div>
							</td>
							<td>
								<p>RS 44,670</p>
								<p>Paid</p>
							</td>
							<td class="status">
								<span class="status-text status-orange">In progress</span>
							</td>
							<td>
							
							</td>
						</tr>
					</table>
				</div>
			</div>
			<div class="chart-data">
				<div class="row">
					<div class="col-12 col-md-4">
						<div class="chart radar-chart dark">
							
							<h3 class="title">Expenditure</h3>
							<p class="tagline">Yearly</p>
							<canvas height="400" id="radarChartDark"></canvas>
						</div>
					</div>
					<div class="col-12 col-md-4">
						<div class="chart bar-chart light">
							
							<h3 class="title">Monthly revenue</h3>
							
							<canvas height="400" id="barChartHDark"></canvas>
						</div>
					</div>
					<div class="col-12 col-md-4">
						<div class="chart doughnut-chart dark">
			
							<h3 class="title">Exports of Products</h3>
							<canvas height="400" id="doughnutChartDark"></canvas>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</div>
        


  )
}
